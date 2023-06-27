export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'START',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '株式会社STARTは、幸せにつながるお仕事を紹介する人材紹介会社です。人材紹介サービス『スタート』や人材紹介SNS『ゴール』を運営し、またWebデザインを学べるスクール『Webの学校』を開講しています。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'},
      {src: '/js/script.js'},
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&family=Roboto:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Round' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/destyle.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
