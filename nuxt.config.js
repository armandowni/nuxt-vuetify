export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-typeorm",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  env: {
    DB: {
      host: "ec2-3-230-122-20.compute-1.amazonaws.com",
      username: "ndphgigmsldyrf",
      password: "2f86ab68c36d3be06b46dd7c10bd1422ffa920303040c3081fb48e823b54f913",
      database: "d3guldico2husd",
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/vuetify", { defaultAssets: { icons: "fa" } }],
  ],

  build: {
    optimization: {
      splitChunks: {
        chunks: "all",
        name: true,
        cacheGroups: {},
        maxSize: 350000,
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["./modules/api"],

  watch: ["./api/express/routes"],
};
