<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref<'light' | 'dark'>('light')

const applyTheme = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme.value)
  }
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme.value)
  }
  applyTheme()
}

onMounted(() => {
  if (typeof localStorage !== 'undefined') {
    const saved = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    theme.value = saved
  }
  applyTheme()
})
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
    <header class="border-b bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60 sticky top-0 z-30 border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <RouterLink to="/" class="font-extrabold text-xl tracking-tight">
          <span class="text-gray-900 dark:text-gray-100">Treinamento</span>
          <span class="text-green-600">Nuxt4</span>
        </RouterLink>
        <nav class="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <RouterLink to="/" class="hover:text-gray-900 dark:hover:text-white">Início</RouterLink>
          <RouterLink to="/sobre" class="hover:text-gray-900 dark:hover:text-white">Sobre</RouterLink>
          <a href="https://nuxt.com/docs" target="_blank" class="hover:text-gray-900 dark:hover:text-white">Docs</a>
          <button @click="toggleTheme" class="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            <span v-if="theme === 'dark'">🌙</span>
            <span v-else>☀️</span>
            <span class="hidden sm:inline">{{ theme === 'dark' ? 'Escuro' : 'Claro' }}</span>
          </button>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex items-center justify-between">
        <p>Feito com Nuxt 4 + Tailwind</p>
        <p class="opacity-70">© {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>
