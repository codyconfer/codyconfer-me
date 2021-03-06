
export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald|Quicksand|Roboto+Mono|Titillium+Web|Share+Tech+Mono&display=swap" rel="stylesheet' },
    ],
  },
  loading: { color: '#1c2532' },
  css: [
    { src: '~/assets/styles/code-editor.sass', lang: 'sass' },
    { src: '~/assets/styles/responsive-breaks.sass', lang: 'sass' },
    { src: '~/assets/styles/fonts.sass', lang: 'sass' },
    { src: '~/assets/styles/colors.sass', lang: 'sass' },
    { src: '~/assets/styles/layout.sass', lang: 'sass' },
    { src: '~/assets/styles/fonts-styles.sass', lang: 'sass' },
    { src: '~/assets/styles/colors-styles.sass', lang: 'sass' },
    { src: '~/assets/styles/animations.sass', lang: 'sass' },
  ],
  plugins: [
    '~/plugins/vue-rx',
  ],
  buildModules: [
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources',
    '@nuxtjs/font-awesome',
  ],
  styleResources: {
    sass: [
        './assets/styles/fonts-styles.sass',
        './assets/styles/colors-styles.sass',
        './assets/styles/responsive-breaks.sass'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  markdownit: {
    injected: false,
    use: [
      'markdown-it-highlightjs',
      'markdown-it-div',
      'markdown-it-attrs',
    ],
  },
  build: {
    extend (config, ctx) {
    }
  }
}
