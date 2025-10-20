// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
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
      title: 'Treinamento Nuxt 4 - Do PHP ao Nuxt',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Aprenda Nuxt 4 de forma didática e divertida. Migre do PHP tradicional para o mundo moderno do Vue e Nuxt!' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap' }
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
  icon: {
    serverBundle: {
      collections: ['heroicons', 'lucide', 'mdi']
    }
  }
})
