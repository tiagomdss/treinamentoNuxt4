// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // Inline PostCSS config per Nuxt recommendation
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false
  },
  app: {
    head: {
      title: 'Treinamento Nuxt 4',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend de treinamento com Nuxt 4 e TailwindCSS' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap' }
      ]
    }
  },
  css: [
    '@/assets/css/tailwind.css'
  ],
  tailwindcss: {
    viewer: false
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
})
