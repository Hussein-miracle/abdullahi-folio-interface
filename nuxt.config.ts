// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  css: ["@/assets/styles/main.css", "@/assets/styles/styles.scss","@/assets/styles/utils.scss"],
  components: true,
  modules: [
    "@nuxtjs/tailwindcss",
    //'@nuxt/image',
  ],

})
