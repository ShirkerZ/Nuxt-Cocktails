export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cocktails-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src:"https://kit.fontawesome.com/1640a3f9de.js", crossorigin: "anonymous"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //'@/assets/CSS/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //require('postcss-import'),
    // require('tailwindcss'),
    // require('autoprefixer'),
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: false,
    config: {}
  }
}
