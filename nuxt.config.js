module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "audren-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Audren Mauplot, front-end developer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["./assets/global.css", "./assets/scss/index.scss"],
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./assets/scss/index.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/lazyloading.js",
    {
      src: '~/plugins/vue-scrollmagic.js',
      ssr: false
    },
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
