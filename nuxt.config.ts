// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "ร้านค้าออนไลน์",
      meta:[
        {name:"description", content:"รายละเอียดเว็บไซต์"}
      ]
    }
  }
})
