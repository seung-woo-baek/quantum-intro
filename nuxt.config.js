import {fileURLToPath} from 'url';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'quantum-intro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  module: ['@pinia/nuxt'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: ['~/assets/css/reset.css', '~/assets/css/common.css'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['external_library']
  },
  target: 'static', // 정적 웹사이트임을 명시
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/css', import.meta.url)),
    'components': fileURLToPath(new URL('./components', import.meta.url))
  }
}

