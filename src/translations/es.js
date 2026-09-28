export default {
  //
  //  Nombre del idioma en el propio idioma
  //
  languageLocalName: 'Español',

  //
  // General
  //
  title: 'Generador de Códigos 3D',
  subtitle: 'Exporta códigos QR o códigos de Spotify como STL para impresión 3D',
  preview: 'Vista previa',
  controlsHint: 'Usa el ratón para rotar',
  changeLanguage: 'Cambiar idioma',
  contributeTranslation: 'Contribuye con una traducción',
  generateButton: 'Generar modelo 3D',
  scrollDownForGuide: 'Desplázate hacia abajo para ver una guía sobre cómo imprimir tu código QR.',
  printabilityWarning: 'Aviso de imprimibilidad 3D',
  printabilityWarningBody: 'Al menos un borde del elemento más pequeño del modelo 3D es muy pequeño: {dimensions}. Dependiendo de tu configuración, esto podría dificultar la impresión.',
  supportMe: 'Apoya qrcode2stl',
  viewOnGithub: 'GitHub',
  shareButtonTitle: 'Comparte esta página',
  file: 'archivo',
  no: 'no',
  yes: 'sí',
  top: 'arriba',
  bottom: 'abajo',
  left: 'izquierda',
  right: 'derecha',
  content: 'contenido',
  min: 'mín',
  max: 'máx',
  thankYou: 'Muchas gracias por tu apoyo. ¡Eres genial!',
  promotionTitle: '¿Quieres empezar una nueva afición? ¿Buscas una segunda o tercera impresora 3D?',
  promotionSubtitle: 'Aquí tienes algunas impresoras 3D y accesorios recomendados.',
  corner: 'esquina',
  isGenerating: 'Generando modelo 3D...',
  copyExistingQRCode: 'Copiar un código QR existente',
  holdQRCodeInView: 'Coloca el código QR frente a la cámara',
  decodedQRCodeData: 'Datos del código QR decodificados',

  //
  // Panel de opciones del código QR
  //
  qrCodeOptionsTitle: 'Opciones del código QR',
  qrCodeTextPlaceholder: 'El texto para tu código QR, p. ej. Hola mundo o https://miguelquiroga.es',
  errorCorrection: 'Corrección de errores',
  errorCorrectionHelp: 'Cuanto mayor sea el nivel de corrección de errores, más denso será el código QR.',
  useEscapeSequences: 'Secuencias de escape',
  useEscapeSequencesToggle: 'Interpretar secuencias de escape',
  useEscapeSequencesHelp: 'Ejemplos: \\n (salto de línea), \\t (tabulación), \\r (retorno de carro)',
  optionalFieldsHint: 'No es necesario rellenar todos los campos.',
  // Wifi
  ssidPlaceholder: 'El nombre de la red WiFi',
  password: 'Contraseña',
  passwordPlaceholder: 'La contraseña de la red WiFi',
  security: 'Seguridad',
  hidden: 'Oculta',
  hiddenText: 'El SSID está oculto',
  // Contacto
  contact: 'Contacto',
  yourName: 'Tu nombre',
  firstname: 'Nombre',
  lastname: 'Apellidos',
  organization: 'Organización',
  role: 'Cargo',
  numbers: 'Números',
  cellphone: 'Móvil',
  phone: 'Teléfono',
  street: 'Calle',
  city: 'Ciudad',
  state: 'Provincia',
  // E-Mail
  recipient: 'Destinatario',
  recipientPlaceholder: 'La dirección que recibirá el correo',
  subject: 'Asunto',
  subjectPlaceholder: 'El asunto del correo',
  body: 'Cuerpo',
  bodyPlaceholder: 'El contenido del correo',
  // SMS
  phonePlaceholder: 'El número de teléfono del destinatario',
  smsMessage: 'Mensaje',
  smsMessagePlaceholder: 'El mensaje SMS',
  // Calendario
  calendar: 'Calendario',
  eventName: 'Nombre del evento',
  eventNamePlaceholder: 'Nombre del evento',
  startDate: 'Fecha de inicio',
  startTime: 'Hora de inicio',
  endDate: 'Fecha de fin',
  endTime: 'Hora de fin',
  allDay: 'Todo el día',
  allDayEvent: 'Evento de todo el día',
  location: 'Lugar',
  locationPlaceholder: 'Lugar del evento (opcional)',
  description: 'Descripción',
  descriptionPlaceholder: 'Descripción del evento (opcional)',

  //
  // Panel de opciones de Spotify
  //
  spotifyOptions: 'Opciones del código de Spotify',
  spotifyUri: 'URI/Enlace de Spotify',
  spotifyUriHelp: 'Puedes obtener el URI de Spotify de una canción/álbum/lista/usuario pulsando "Compartir" y luego "URI".',
  spotifyCodeHeightInfo: 'Los códigos de Spotify tienen una relación de aspecto fija de 4:1',

  //
  // Panel de opciones del modelo 3D
  //
  modelOptions: 'Opciones del modelo 3D',
  base: 'Base',
  width: 'Ancho',
  height: 'Alto',
  depth: 'Profundidad',
  cornerRadius: 'Radio de esquina',
  border: 'Borde',
  borderAroundBase: 'Añadir borde alrededor de la base',
  margin: 'Margen',
  block: 'Bloque',
  style: 'Estilo',
  shape: 'Forma',
  rectangle: 'rectángulo',
  roundedRectangle: 'rectángulo redondeado',
  square: 'cuadrado',
  round: 'redondo',
  size: 'Tamaño',
  blockSizeHelp: `
  Este ajuste modifica el tamaño de cada bloque del código QR de forma individual.
  Juega con este valor para conseguir un aspecto visual único, pero ten en cuenta que puede afectar a la legibilidad del código QR.
  Comprueba la vista previa con tu móvil antes de imprimir para ver si te has pasado.
  Déjalo al 100% si no estás seguro.
  Si aumentas este valor por encima del 100% (por ejemplo, 120%), los bloques formarán islas conectadas que facilitan la impresión del código QR.`,
  icon: 'Icono',
  noIcon: 'Sin icono',
  customIcon: 'Icono personalizado',
  uploadCustomIcon: 'Subir icono personalizado',
  selectSvgFile: 'Seleccionar archivo SVG',
  customIconUploaded: 'Icono personalizado subido correctamente',
  invalidSvgFile: 'Archivo SVG no válido. Selecciona un archivo SVG válido.',
  iconUploadError: 'Error al subir el icono. Inténtalo de nuevo.',
  iconSizeHelp: `
  El tamaño del icono en relación al ancho total del código QR.
  El icono aprovecha la corrección de errores integrada del código QR. Si es demasiado grande, puede que el código no se pueda leer.
  Si quieres un icono grande pero tu móvil no puede leer el código QR, prueba a aumentar el nivel de corrección de errores.`,
  text: 'Texto',
  textOnEdge: 'Añade un texto personalizado a tu código QR.',
  placement: 'Posición',
  theText: 'Línea normal\n*Línea en cursiva*\n**Línea en negrita**\n***Línea en cursiva y negrita***',
  fontInfoText: 'Cambia el estilo de fuente en líneas individuales:',
  italicInfoText: '*cursiva*',
  boldInfoText: '**negrita**',
  cityMode: 'QR-Ciudad',
  cityModeText: 'Modifica aleatoriamente la altura de los bloques.',
  invert: 'Invertir',
  invertText: 'Invierte la estructura del código',
  keychain: 'Llavero',
  keychainHelp: 'Añade un orificio en el lateral de la etiqueta (por ejemplo, para colgarla de tu llavero).',
  mirrorHoles: 'Reflejar orificios',
  mirrorHolesHelp: 'Refleja los orificios en el lado opuesto (por ejemplo, para fijarlo con tornillos).',
  keychainHoleDiameter: 'Diámetro del orificio',
  keychainMaterialThickness: 'Grosor del material',
  keychainOffset: 'Desplazamiento del saliente',
  nfcIndentation: 'NFC/RFID',
  nfcIndentationHelp: 'Añade un hueco en la parte inferior de la base donde se puede insertar una etiqueta NFC/RFID.',
  indentation: 'Hueco',
  nfcIndentationHiddenHelp: 'Crea una cavidad dentro de la base con un desplazamiento de 1 mm desde la parte inferior. Esto te permite incrustar firmemente la etiqueta NFC dentro de la propia pieza impresa. Pausa la impresión antes de la capa de cierre, inserta la etiqueta y reanuda la impresión. Asegúrate de que la profundidad del hueco sea ligeramente mayor que la propia etiqueta y ajusta la profundidad de la base en consecuencia.',
  magnetPockets: 'Huecos para imanes',
  magnetPocketsHelp: 'Añade 4 huecos redondos para pegar imanes en la parte inferior de la base, uno cerca de cada esquina.',
  holeSize: 'Tamaño del hueco',
  offsetFromOuterEdge: 'Distancia desde el borde exterior',
  compatibilityMode: 'Modo de compatibilidad',
  compatibilityModeLabel: 'Generación de modelo antigua (si tienes problemas, p. ej. en TinkerCAD)',
  compatibilityModeHelp: 'Recientemente se mejoró la velocidad de generación del modelo. Si tienes problemas con el modelo generado, puedes activar esta opción. Generará el modelo con el método anterior, que puede solucionar algunos problemas con tu laminador o software CAD. Esto también afecta al procesado de iconos: las formas de icono complejas pueden simplificarse para mejorar la compatibilidad.',
  iconCompatibilityWarning: 'Modo de compatibilidad con TinkerCAD activo',
  iconShapesSimplified: 'las formas del icono se han simplificado',
  iconHolesRemoved: 'se han eliminado los huecos del icono',
  iconCompatibleProcessing: 'usar el procesado compatible con TinkerCAD puede simplificar el icono. Desactívalo si el icono no se ve como esperabas',
  monochromeLogoInfo: 'Para obtener mejores resultados, sube logotipos monocromos (blanco y negro). Los logotipos multicolor pueden no funcionar bien con la generación del código QR.',

  //
  // Ajustes de exportación
  //
  exportTypeHelp: 'Déjalo en "binario" para mantener el tamaño del archivo bajo. Si tu software tiene problemas con el archivo generado, prueba a cambiar esta opción.',
  exportSeparatePartsHelp: 'Si se establece en "sí", la base y el código QR se guardarán como dos piezas separadas para impresoras con doble extrusión. Puede que tu navegador te pida permiso para descargar varios archivos.',
  separateParts: 'Piezas separadas',
  saveAsButton: 'Exportar a STL',
  saveAsImageButton: 'Renderizar a PNG',

  //
  // Guía de impresión
  // ¡con etiquetas HTML incluidas!
  //
  printGuideTitle: 'Guía de impresión 3D',
  printGuideSubtitle: '¿Cómo imprimir un código QR de dos colores con una impresora 3D de un solo extrusor?',
  printGuideWIPInfo: 'Esta guía está en construcción.',
  printGuideIntro: `
  Puedes imprimir objetos multicolor incluso con un solo extrusor cambiando el filamento en capas concretas.<br/>
  Podemos usar este método para imprimir la base de nuestro código QR y la parte del código QR en la parte superior en dos colores diferentes.<br/>
  Esta técnica es lo que hace posible imprimir códigos QR en 3D.<br/>
  El proceso varía según el software laminador que utilices.<br/>
  En esta guía me centraré solo en Cura y PrusaSlicer y no me hago responsable de ningún daño que puedas causar a tu impresora durante el proceso.<br/>`,
  printGuideSupportWarningTitle: 'Ten en cuenta: no todas las impresoras/firmwares admiten la funcionalidad necesaria.',
  printGuideSupportWarningMessage: `
  Esta es una guía general, ya que no puedo detallar cada combinación de impresora/firmware que existe.<br/>
  Te recomiendo hacer primero una pequeña prueba de impresión. Si tienes problemas, busca si tu modelo de impresora admite el comando G-Code <strong>M600</strong> para el cambio de filamento.<br/>`,
  printGuideGenerateQRCode: 'Generar el código QR',
  printGuideGenerateQRCodeSteps: `
  <li>Selecciona el tipo de código QR que quieres generar en "Opciones del código QR".</li>
  <li>Rellena los campos necesarios.</li>
  <li>Configura el modelo 3D en "Opciones del modelo 3D".</li>
  <li>Haz clic en "Generar modelo 3D"</li>
  <li>Guarda el archivo STL con el botón "Exportar a STL" arriba a la derecha.</li>`,
  printGuideVersionDisclaimer: 'Versión {version}, tu experiencia puede variar.',
  // Cura
  printGuideCuraStep1: `
  Lamina el modelo y localiza la capa donde debe producirse el cambio de color.<br/>
  En mi caso es en la capa 16.<br/>`,
  printGuideCuraStep2: `
  <li>Ve a "Extensiones -> Post-procesado -> Modificar G-Code".</li>
  <li>Haz clic en "Añadir un script" y selecciona "Cambio de filamento".</li>
  <li>En los ajustes de cambio de filamento, pon el valor "Capa" con el número de capa del paso 1.</li>
  <li>Vuelve a laminar el modelo. El icono a la izquierda del botón "Laminar" indica que hay un script de post-procesado activo.</li>`,
  // PrusaSlicer
  printGuidePrusaSlicerStep1: `
  Lamina el modelo y localiza la capa donde debe producirse el cambio de color.<br/>
  En mi caso es en la capa 11.<br/>`,
  printGuidePrusaSlicerStep2: `
  <li>Haz clic en el pequeño signo más a la derecha de la barra de selección de capas.</li>
  <li>PrusaSlicer te muestra una vista previa donde puedes ver los diferentes colores para verificar que has seleccionado la capa correcta. Las partes del código QR deben tener un color distinto al de la base</li>
  <li>Vuelve a laminar el modelo.</li>`,
  printGuideStep3: `
  Ya puedes imprimir el modelo con normalidad.<br/>
  La impresora 3D se pausará en la capa indicada y se moverá al origen de la cama de impresión.
  Ahora puedes cambiar el filamento y reanudar el trabajo de impresión desde el menú de tu impresora.`,

  //
  // Sección de preguntas frecuentes
  //
  faqTitle: 'Preguntas frecuentes',
  faqQuestion1: '¿Qué formatos de archivo puedo exportar?',
  faqAnswer1: 'Puedes exportar tus modelos 3D como archivos STL (en formato binario o ASCII) para impresión 3D, o como imágenes PNG para previsualizar.',
  faqQuestion2: '¿Cuál es la diferencia entre los niveles de corrección de errores?',
  faqAnswer2: 'Los niveles de corrección de errores más altos hacen que el código QR sea más resistente a daños y errores de escaneo, pero también lo hacen más denso, con más módulos. Para impresión 3D, los niveles Medio (M) o Cuartil (Q) suelen funcionar mejor.',
  faqQuestion3: '¿Por qué mi código QR no se escanea bien después de imprimirlo?',
  faqAnswer3: 'Asegúrate de que haya suficiente contraste entre los módulos del código QR y la base. Usa filamentos de colores diferentes o comprueba que la diferencia de altura sea suficiente. Revisa también que la resolución de tu impresora sea adecuada para el tamaño del código QR.',
  faqQuestion4: '¿Mi código QR seguirá funcionando para siempre o caduca?',
  faqAnswer4: 'El propio código QR generado seguirá funcionando siempre. Sin embargo, si lo usas para enlazar a una página externa, el enlace puede dejar de funcionar con el tiempo; esto queda fuera de nuestro control. Si es una página tuya, asegúrate de mantener el enlace activo. Si es de terceros y cambian su sitio, el enlace puede romperse. Puedes usar un acortador de enlaces que te permita cambiar el destino después de crear el código. Los códigos de Spotify funcionarán hasta que Spotify retire esta función.',
  faqQuestion5: '¿Cómo puedo imprimir códigos QR con mi impresora 3D multicolor?',
  faqAnswer5: 'Al exportar el código QR, selecciona la opción de descargar el modelo 3D en varias piezas. Esta opción está en la parte superior de la página, justo a la izquierda del botón de exportar a STL. Esto crea un archivo ZIP con todas las piezas del modelo 3D. Carga todas las piezas en tu laminador y superpónlas. Ahora puedes asignar colores a cada pieza en tu laminador. También puedes crear un código QR con aspecto plano (2D) poniendo la altura del código QR en un valor muy bajo (por ejemplo, 0,1 mm). Comprueba la vista previa en tu laminador para asegurarte de que todo funciona como esperas.',
  faqQuestion6: '¿Cómo puedo generar varios códigos QR a la vez?',
  faqAnswer6: '¡Usa el Modo por Lotes! Pulsa el botón "Modo por Lotes" en la sección de opciones del código QR. Primero, configura tus ajustes predeterminados en el formulario principal. Luego descarga la plantilla CSV, rellénala con tus datos (un código QR por fila) y súbela. La herramienta generará todos los códigos QR y los empaquetará en un archivo ZIP para descargar. Puedes personalizar cada código QR rellenando la columna correspondiente, o dejar celdas vacías para usar tus ajustes predeterminados. Pasa el ratón sobre cualquier etiqueta del formulario principal para ver el nombre del campo que debes usar en el CSV.',

  // Pie de la sección FAQ
  faqFooter: 'Si tienes alguna pregunta adicional, no dudes en escribirme y la añadiré a la lista:',
  faqContact: 'Envíame un correo con tu pregunta',

  //
  // Modo por lotes
  //
  batchMode: 'Modo por lotes',
  batchModeDescription: 'Genera varios códigos QR a la vez. Usa el modo Simple para códigos QR de solo texto rápidos, o el modo Avanzado para una personalización completa mediante CSV.',
  batchModeType: 'Modo',
  batchModeSimple: 'Simple',
  batchModeAdvanced: 'Avanzado (CSV)',
  batchModeSimpleHelp: 'Introduce un texto de código QR por línea. El resto de ajustes (tamaño, estilo, etc.) usarán tu configuración actual.',
  batchModeAdvancedHelp: 'Sube un archivo CSV con control total sobre los ajustes de cada código QR. Usa la plantilla para ver los campos disponibles.',
  batchSimpleHowToTitle: 'Cómo usar el modo Simple:',
  batchSimpleStep1: 'Configura el aspecto de tu código QR en el formulario principal (tamaño, borde, texto, etc.).',
  batchSimpleStep2: 'Introduce un texto de código QR por línea en el área de texto de abajo.',
  batchSimpleStep3: 'Pulsa "Generar todo" para crear tus códigos QR en un archivo ZIP.',
  batchSimpleTextareaLabel: 'Textos de los códigos QR (uno por línea)',
  batchSimpleTextareaPlaceholder: 'https://ejemplo.com/pagina1\nhttps://ejemplo.com/pagina2\nHola mundo\n...',
  batchSimpleTextareaHelp: 'Se generará(n) {count} código(s) QR',
  batchHowToTitle: 'Cómo usar el modo Avanzado:',
  batchStep1: 'Primero, configura los ajustes de tu código QR en el formulario principal (tipo de contenido, opciones del modelo, etc.). Se usarán como valores predeterminados.',
  batchStep2: 'Descarga la plantilla CSV de abajo. Contiene todos los campos disponibles para el tipo de contenido seleccionado.',
  batchStep3: 'Rellena el CSV con tus datos. Cada fila se convierte en un código QR. Deja las celdas vacías para usar tus ajustes predeterminados.',
  batchStep4: 'Sube el archivo CSV y pulsa "Generar todo" para crear tus códigos QR en un archivo ZIP.',
  batchTips: 'Consejos:',
  batchTip1: 'Pasa el ratón sobre cualquier etiqueta del formulario principal para ver el nombre de su campo (p. ej., "base.width", "code.depth").',
  batchTip2: 'Añade una columna "filename" para personalizar los nombres de los archivos de salida (sin la extensión .stl).',
  batchTip3: 'El CSV puede usar como separador tanto la coma (,) como el punto y coma (;).',
  batchTemplateDownload: 'Paso 1: Descargar plantilla CSV',
  batchTemplateHelp: 'Descarga un archivo CSV de plantilla con todos los campos disponibles para el tipo de contenido seleccionado. La plantilla incluye una fila de ejemplo con tus ajustes actuales.',
  downloadCsvTemplate: 'Descargar plantilla',
  uploadCsvFile: 'Paso 2: Subir archivo CSV',
  chooseFile: 'Elegir un archivo...',
  noFileSelected: 'Ningún archivo seleccionado',
  batchLargeWarning: 'Estás a punto de generar {count} códigos QR. Esto puede tardar un rato y usar bastante memoria. Considera dividirlo en lotes más pequeños si tienes problemas.',
  batchPreview: 'Vista previa',
  batchShowingRows: 'mostrando {shown} de {total} filas',
  batchMoreRows: '...y {count} filas más',
  batchValidation: 'Validación',
  batchValidRows: 'Filas válidas',
  batchInvalidRows: 'Filas no válidas (se omitirán)',
  batchProcessing: 'Generando códigos QR...',
  batchProgress: 'Procesando {current} de {total}',
  batchCurrentItem: 'Actual',
  batchGenerate: 'Generar todo',
  batchAbort: 'Cancelar',
  batchDownloadZip: 'Descargar ZIP',
  batchStartNew: 'Empezar un nuevo lote',
  batchSuccessCount: '¡{count} código(s) QR generado(s) correctamente!',
  batchErrorCount: 'No se pudieron generar {count} código(s) QR',
  batchRowError: 'Fila {row}: {error}',
  batchMoreErrors: '...y {count} errores más',
  batchParseError: 'Error al analizar el CSV',
  batchFileReadError: 'Error al leer el archivo',
  batchNoDataRows: 'El archivo CSV debe contener al menos una fila de cabecera y una fila de datos',
  batchMissingRequiredField: 'El CSV debe contener al menos una de estas columnas: {fields}',
  batchEmptyQRText: 'Contenido del código QR vacío',
  batchDownloadCountdown: 'La descarga empezará en {seconds} segundos.',
  batchDownloadStarting: 'La descarga va a empezar ahora.',
  batchThankYou: 'Gracias por usar esta herramienta.',
  batchAdblockMessage: '',
  cancel: 'Cancelar',
  close: 'Cerrar',
  or: 'o',

  //
  // Importar/exportar configuración
  //
  importExportSettings: 'Importar/Exportar configuración',
  exportSettings: 'Exportar configuración',
  exportSettingsDescription: 'Copia o descarga tu configuración actual como JSON para compartirla o guardarla como copia de seguridad.',
  importSettings: 'Importar configuración',
  importSettingsDescription: 'Pega o carga un archivo JSON de configuración para aplicar los ajustes guardados.',
  copyToClipboard: 'Copiar al portapapeles',
  downloadAsFile: 'Descargar como archivo',
  loadFromFile: 'Cargar desde archivo',
  applySettings: 'Aplicar configuración',
  pasteJsonHere: 'Pega aquí la configuración JSON...',
  copiedToClipboard: '¡Copiado al portapapeles!',
  settingsApplied: '¡Configuración aplicada correctamente!',
  invalidJsonError: 'Formato JSON no válido',
};
