import { i18n } from './locales/i18n-nuxt-config'
export default {
  server: { port: 7002, host: '0.0.0.0' },
  ssr: false,
  target: 'static',

  // Global page headers ===================================================
  head: {
    titleTemplate: '%s - Tea Store',
    title: 'Tea Store',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Jost:wght&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/vendors.css',
    '~/assets/css/mmain.css',
    // '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/icons.js', '~/plugins/noty.js'],

  // Auto import components: https://go.nuxtjs.dev/config-componentsdd
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'bootstrap-vue/nuxt',
    ['@nuxtjs/i18n', i18n],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://shoppify-test.ru',
    browserBaseURL: 'https://shoppify-test.ru',
    // baseURL: 'http://localhost:7001',
    // browserBaseURL: 'http://localhost:7001',
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/store',
      callback: '/store',
      home: '/store',
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/token', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/users/me', method: 'get' },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
