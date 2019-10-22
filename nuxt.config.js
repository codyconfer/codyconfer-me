
export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Fira+Code|Fira+Sans|Nunito|Oswald|Quicksand|Roboto|Roboto+Condensed|Roboto+Mono|Source+Code+Pro|Teko|Titillium+Web&display=swap" rel="stylesheet' },
    ],
  },
  loading: { color: '#fff' },
  css: [
    { src: '~/node_modules/highlight.js/styles/dracula.css', lang: 'css' }
  ],
  plugins: [
  ],
  buildModules: [
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs',
    ],
  },
  build: {
    extend (config, ctx) {
    }
  }
}
