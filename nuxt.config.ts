// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 3001
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  ui: {
    icons: ['flowbite']
  }
})
