<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': navbarOpen }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleNavigation"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': navbarOpen }">

    <!-- qrcode2stl Header -->
    <div v-html="headerAd"></div>

      <div class="navbar-end">
        <div class="navbar-item">
          <LanguageSelector />
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-info" @click="openSettingsModal">
              <span class="icon">
                <i class="fa fa-cog"></i>
              </span>
              <span>{{$t('importExportSettings')}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <SettingsModal v-if="settingsModalVisible" />
  </nav>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';
import SettingsModal from './SettingsModal.vue';
import { bus } from '../main';

export default {
  name: 'Header',
  components: {
    LanguageSelector,
    SettingsModal,
  },
  data() {
    return {
      navbarOpen: false,
      headerAd: '',
      settingsModalVisible: false,
    };
  },
  methods: {
    toggleNavigation() {
      this.navbarOpen = !this.navbarOpen;
    },
    openSettingsModal() {
      this.settingsModalVisible = true;
    },
  },
  mounted() {
    this.headerAd = document.getElementById('adsenseloader-header').innerHTML;
  },
  created() {
    bus.$on('closeSettingsModal', () => { this.settingsModalVisible = false; });
  },
};
</script>

<style>
#site-title {
  font-style: bold;
}
</style>
