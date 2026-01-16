// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-01-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
  ],

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },


  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'Aprenda Nuxt 4 - Plataforma de Aprendizado Interativa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Aprenda Nuxt 4 de forma divertida e interativa! Descubra o framework Vue.js mais poderoso do planeta.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  typescript: {
    strict: true,
    typeCheck: false
  },

  nitro: {
    experimental: {
      openAPI: true
    }
  }
})
