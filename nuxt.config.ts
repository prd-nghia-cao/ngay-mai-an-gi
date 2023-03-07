// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "vite-plugin-vue-type-imports/nuxt",
    "@nuxt/image-edge",
  ],
  i18n: {
    lazy: true,
    langDir: "lang",
    defaultLocale: "vi",
    locales: [
      {
        code: "en",
        file: "en-us.json",
      },
      {
        code: "vi",
        file: "vi-vn.json",
      },
    ],
    vueI18n: {
      legacy: false,
    },
  },
});
