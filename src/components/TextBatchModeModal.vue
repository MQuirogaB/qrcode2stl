<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card" style="width: 90%; max-width: 800px;">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <i class="fas fa-layer-group"></i> {{ $t('batchMode') }}
        </p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Options (visible before processing and results) -->
        <div class="content" v-if="!isProcessing && !showResults">
          <p>{{ $t('textBatchModeDescription') }}</p>

          <div class="notification is-info is-light">
            <p class="mb-2"><strong>{{ $t('textBatchHowToTitle') }}</strong></p>
            <ol class="mt-0">
              <li>{{ $t('textBatchStep1') }}</li>
              <li>{{ $t('textBatchStep2') }}</li>
              <li>{{ $t('textBatchStep3') }}</li>
            </ol>
          </div>

          <div class="field">
            <label class="label">{{ $t('textBatchTextareaLabel') }}</label>
            <div class="control">
              <textarea
                class="textarea"
                :placeholder="$t('textBatchTextareaPlaceholder')"
                v-model="simpleTextInput"
                rows="10"
              ></textarea>
            </div>
            <p class="help">{{ $t('textBatchTextareaHelp', { count: simpleTextLines.length }) }}</p>
          </div>

          <!-- Warning for large batches -->
          <div class="notification is-warning" v-if="simpleTextLines.length > 50">
            <i class="fas fa-exclamation-triangle"></i>
            {{ $t('textBatchLargeWarning', { count: simpleTextLines.length }) }}
          </div>
        </div>

        <!-- Processing Progress -->
        <div v-if="isProcessing" class="has-text-centered">
          <p class="title is-5">{{ $t('textBatchProcessing') }}</p>
          <progress class="progress is-primary is-large" :value="processedCount" :max="totalCount">
            {{ Math.round((processedCount / totalCount) * 100) }}%
          </progress>
          <p class="subtitle is-6">
            {{ $t('batchProgress', { current: processedCount, total: totalCount }) }}
          </p>
          <p v-if="currentItemLabel" class="has-text-grey">
            {{ $t('batchCurrentItem') }}: {{ currentItemLabel }}
          </p>
        </div>

        <!-- Results Summary with Thank You and Countdown -->
        <div v-if="showResults" class="content">
          <div class="notification is-success" v-if="successCount > 0">
            <i class="fas fa-check-circle"></i>
            {{ $t('textBatchSuccessCount', { count: successCount }) }}
          </div>
          <div class="notification is-danger" v-if="errorResults.length > 0">
            <p><strong><i class="fas fa-times-circle"></i> {{ $t('textBatchErrorCount', { count: errorResults.length }) }}</strong></p>
            <ul>
              <li v-for="(err, index) in errorResults.slice(0, 10)" :key="index">
                {{ $t('batchRowError', { row: err.row, error: err.error }) }}
              </li>
              <li v-if="errorResults.length > 10">
                {{ $t('batchMoreErrors', { count: errorResults.length - 10 }) }}
              </li>
            </ul>
          </div>

          <!-- Countdown and Thank You Message -->
          <div v-if="successCount > 0" class="mt-4">
            <p class="is-size-4">
              <progress class="progress is-small is-primary" max="100" v-if="countdownSeconds !== 0"></progress>
              <progress class="progress is-small is-primary" max="100" v-if="countdownSeconds === 0" value="100"></progress>
              <span v-if="countdownSeconds > 0">{{ $t('batchDownloadCountdown', { seconds: countdownSeconds }) }}</span>
              <span v-if="countdownSeconds === 0">{{ $t('batchDownloadStarting') }}</span>
            </p>
            <p>{{ $t('batchThankYou') }}</p>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="buttons" v-if="!isProcessing && !showResults">
          <button
            class="button is-success"
            :disabled="!canGenerate"
            @click="startBatchGeneration"
          >
            <span class="icon"><i class="fas fa-play"></i></span>
            <span>{{ $t('batchGenerate') }} ({{ simpleTextLines.length }})</span>
          </button>
          <button class="button" @click="close">{{ $t('cancel') }}</button>
        </div>
        <div class="buttons" v-if="isProcessing">
          <button class="button is-danger" @click="abortGeneration">
            <span class="icon"><i class="fas fa-stop"></i></span>
            <span>{{ $t('batchAbort') }}</span>
          </button>
        </div>
        <div class="buttons" v-if="showResults">
          <button class="button is-primary" @click="downloadZip" v-if="successCount > 0">
            <span class="icon"><i class="fas fa-download"></i></span>
            <span>{{ $t('batchDownloadZip') }}</span>
          </button>
          <button class="button" @click="reset">{{ $t('batchStartNew') }}</button>
          <button class="button" @click="close">{{ $t('close') }}</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import JSZip from 'jszip';
import { save } from '../utils';

export default {
  name: 'TextBatchModeModal',
  props: {
    options: Object,
    exporter: Object,
    stlType: String,
  },
  emits: ['close'],
  data() {
    return {
      simpleTextInput: '',
      isProcessing: false,
      aborted: false,
      processedCount: 0,
      totalCount: 0,
      currentItemLabel: '',
      successCount: 0,
      errorResults: [],
      showResults: false,
      generatedFiles: [],
      countdownSeconds: 5,
      countdownInterval: null,
      hasAutoDownloaded: false,
    };
  },
  computed: {
    simpleTextLines() {
      if (!this.simpleTextInput.trim()) return [];
      return this.simpleTextInput
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    },
    canGenerate() {
      return this.simpleTextLines.length > 0;
    },
  },
  watch: {
    countdownSeconds(newVal) {
      if (newVal === 0 && this.successCount > 0 && !this.hasAutoDownloaded) {
        this.hasAutoDownloaded = true;
        this.downloadZip();
      }
    },
  },
  methods: {
    close() {
      this.stopCountdown();
      this.$emit('close');
    },

    startCountdown() {
      this.countdownSeconds = 5;
      this.hasAutoDownloaded = false;
      this.countdownInterval = setInterval(() => {
        if (this.countdownSeconds > 0) {
          this.countdownSeconds -= 1;
        }
      }, 1000);
    },

    stopCountdown() {
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
      }
    },

    truncateValue(value) {
      if (!value) return '';
      const str = String(value);
      return str.length > 30 ? str.substring(0, 30) + '...' : str;
    },

    async startBatchGeneration() {
      this.isProcessing = true;
      this.aborted = false;
      this.processedCount = 0;
      this.successCount = 0;
      this.errorResults = [];
      this.generatedFiles = [];
      this.showResults = false;

      const modelWorker = (await import('@/model-worker')).default;

      const lines = this.simpleTextLines;
      this.totalCount = lines.length;

      for (let i = 0; i < lines.length; i++) {
        if (this.aborted) break;

        const textValue = lines[i];
        const rowIndex = i + 1;

        try {
          const rowOptions = JSON.parse(JSON.stringify(this.options));
          rowOptions.base.textMessage = textValue;

          this.currentItemLabel = this.truncateValue(textValue);

          const meshes = await this.generateModelAsync(modelWorker, rowOptions);

          const filename = `texto_${String(i + 1).padStart(3, '0')}`;
          await this.exportToBuffer(meshes, filename);

          this.successCount++;
        } catch (error) {
          this.errorResults.push({
            row: rowIndex,
            error: error.message || String(error),
          });
        }

        this.processedCount++;
      }

      this.isProcessing = false;
      this.showResults = true;
      if (this.successCount > 0) {
        this.startCountdown();
      }
    },

    generateModelAsync(modelWorker, options) {
      return new Promise((resolve, reject) => {
        let timeoutId;

        const originalHandler = modelWorker.worker.onmessage;

        const handler = (event) => {
          if (!event.data || typeof event.data !== 'object') {
            return;
          }

          if (event.data.type !== 'result') {
            return;
          }

          clearTimeout(timeoutId);
          modelWorker.worker.onmessage = originalHandler;

          const jsonLoader = new THREE.ObjectLoader();
          const { meshes } = event.data;

          if (!meshes) {
            reject(new Error('No meshes in worker response'));
            return;
          }

          const parsedMeshes = {};
          let parsed = 0;
          const meshKeys = Object.keys(meshes);
          const total = meshKeys.length;

          if (total === 0) {
            reject(new Error('Empty meshes object'));
            return;
          }

          meshKeys.forEach((key) => {
            jsonLoader.parse(meshes[key], (mesh) => {
              parsedMeshes[key] = mesh;
              parsed++;
              if (parsed === total) {
                resolve(parsedMeshes);
              }
            });
          });
        };

        modelWorker.worker.onmessage = handler;

        modelWorker.send({
          mode: 'Text',
          options: options,
        });

        timeoutId = setTimeout(() => {
          modelWorker.worker.onmessage = originalHandler;
          reject(new Error('Model generation timeout'));
        }, 30000);
      });
    },

    async exportToBuffer(meshes, filename) {
      const exportAsBinary = this.stlType === 'binary';

      if (meshes.combined) {
        const stlData = this.exporter.parse(meshes.combined, { binary: exportAsBinary });
        if (exportAsBinary) {
          const content = stlData.buffer ? new Uint8Array(stlData.buffer) : new Uint8Array(stlData);
          this.generatedFiles.push({
            filename: `${filename}.stl`,
            data: content,
          });
        } else {
          this.generatedFiles.push({
            filename: `${filename}.stl`,
            data: stlData,
          });
        }
      }
    },

    abortGeneration() {
      this.aborted = true;
    },

    async downloadZip() {
      const zip = new JSZip();

      for (const file of this.generatedFiles) {
        if (file.data instanceof Blob) {
          zip.file(file.filename, file.data);
        } else if (file.data instanceof Uint8Array) {
          zip.file(file.filename, file.data, { binary: true });
        } else {
          zip.file(file.filename, file.data);
        }
      }

      const timestamp = new Date().getTime();
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      save(zipBlob, `texto_batch_${timestamp}.zip`);
    },

    reset() {
      this.stopCountdown();
      this.simpleTextInput = '';
      this.isProcessing = false;
      this.aborted = false;
      this.processedCount = 0;
      this.totalCount = 0;
      this.currentItemLabel = '';
      this.successCount = 0;
      this.errorResults = [];
      this.showResults = false;
      this.generatedFiles = [];
      this.countdownSeconds = 5;
      this.hasAutoDownloaded = false;
    },
  },
};
</script>

<style scoped>
.modal-card-body {
  min-height: 300px;
}

.progress {
  margin: 20px 0;
}
</style>
