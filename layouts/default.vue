<template>
  <div class="min-h-screen bg-[#F8FAFC] dark:bg-[#020420] flex flex-col transition-colors duration-500">
    <!-- Loading Screen -->
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-[100] flex items-center justify-center bg-[#F8FAFC] dark:bg-[#020420] transition-opacity duration-500"
      :class="{ 'opacity-0': !showLoading }"
    >
      <div class="flex flex-col items-center gap-6">
        <div class="relative w-24 h-24">
          <div class="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
          <div class="absolute inset-0 border-t-4 border-[#00DC82] rounded-full animate-[spin_1.5s_linear_infinite]"></div>
          <div class="absolute inset-4 bg-gradient-to-br from-[#00DC82] to-[#36E4DA] rounded-full opacity-20 animate-pulse"></div>
          <img src="/favicon.png" class="absolute inset-6 w-12 h-12 object-contain animate-bounce" alt="Loading" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <h2 class="text-2xl font-bold bg-gradient-to-r from-[#00DC82] to-[#36E4DA] bg-clip-text text-transparent animate-pulse">
            Carregando...
          </h2>
          <div class="flex gap-1">
            <div class="w-2 h-2 bg-[#00DC82] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div class="w-2 h-2 bg-[#00DC82] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div class="w-2 h-2 bg-[#00DC82] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fixed Navigation -->
    <!-- Fixed Navigation -->
    <nav class="sticky top-0 z-50 bg-white/80 dark:bg-[#020420]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <div class="relative h-14 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
               <img 
                :src="colorMode.value === 'dark' ? '/logo-dark.png' : '/logo-light.png'" 
                alt="Aprenda Nuxt 4" 
                class="h-full w-auto object-contain"
              />
            </div>
          </NuxtLink>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-2">
            <NuxtLink 
              to="/" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
              exact
            >
              <Icon name="heroicons:home" class="w-5 h-5" />
              <span>Início</span>
            </NuxtLink>
            <NuxtLink 
              to="/docs" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
            >
              <Icon name="heroicons:book-open" class="w-5 h-5" />
              <span>Documentação</span>
            </NuxtLink>
            <NuxtLink 
              to="/typescript" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
            >
              <Icon name="heroicons:code-bracket-square" class="w-5 h-5" />
              <span>TypeScript</span>
            </NuxtLink>
            <NuxtLink 
              to="/tailwind" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
            >
              <Icon name="simple-icons:tailwindcss" class="w-5 h-5" />
              <span>Tailwind</span>
            </NuxtLink>
            <NuxtLink 
              to="/playground" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
            >
              <Icon name="heroicons:code-bracket" class="w-5 h-5" />
              <span>Playground</span>
            </NuxtLink>
            <NuxtLink 
              to="/examples" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
            >
              <Icon name="heroicons:rocket-launch" class="w-5 h-5" />
              <span>Exemplos</span>
            </NuxtLink>
            <NuxtLink 
              to="/quiz" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
            >
              <Icon name="heroicons:academic-cap" class="w-5 h-5" />
              <span>Quiz</span>
            </NuxtLink>

            <NuxtLink 
              to="/migracao" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-purple-500/10 dark:hover:text-purple-300 transition-all duration-300"
              active-class="bg-sky-100 text-sky-700 dark:bg-purple-500/20 dark:text-purple-300"
            >
              <Icon name="heroicons:arrow-path" class="w-5 h-5" />
              <span>Migração</span>
            </NuxtLink>

            <!-- Cyclic Theme Switcher -->
            <button 
              @click="cycleTheme" 
              class="group relative p-2.5 rounded-xl text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all ml-2 border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              :title="themeTitle"
            >
              <div class="relative w-5 h-5 flex items-center justify-center">
                <Icon 
                  v-if="colorMode.preference === 'dark'" 
                  name="heroicons:moon-20-solid" 
                  class="w-5 h-5 text-blue-400 animate-fade-in" 
                />
                <Icon 
                  v-else-if="colorMode.preference === 'light'" 
                  name="heroicons:sun-20-solid" 
                  class="w-5 h-5 text-yellow-500 animate-fade-in" 
                />
                <Icon 
                  v-else 
                  name="heroicons:computer-desktop-20-solid" 
                  class="w-5 h-5 text-emerald-500 animate-fade-in" 
                />
              </div>
              <!-- Mini Indicator Badge -->
              <span class="absolute -top-1 -right-1 w-2 h-2 rounded-full border-2 border-white dark:border-slate-900" :class="indicatorColor"></span>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMenu"
            class="md:hidden p-2 text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 rounded-lg transition-colors"
          >
            <Icon :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-if="isMenuOpen"
          class="md:hidden mt-4 space-y-2 pb-4 animate-fade-in"
        >
          <NuxtLink 
            to="/" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="heroicons:home" class="w-5 h-5" />
            <span>Início</span>
          </NuxtLink>
          <NuxtLink 
            to="/docs" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="heroicons:book-open" class="w-5 h-5" />
            <span>Documentação</span>
          </NuxtLink>
          <NuxtLink 
            to="/typescript" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="heroicons:code-bracket-square" class="w-5 h-5" />
            <span>TypeScript</span>
          </NuxtLink>
          <NuxtLink 
            to="/tailwind" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="simple-icons:tailwindcss" class="w-5 h-5" />
            <span>Tailwind</span>
          </NuxtLink>
          <NuxtLink 
            to="/playground" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="heroicons:code-bracket" class="w-5 h-5" />
            <span>Playground</span>
          </NuxtLink>
          <NuxtLink 
            to="/examples" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="heroicons:rocket-launch" class="w-5 h-5" />
            <span>Exemplos</span>
          </NuxtLink>
          <NuxtLink 
            to="/quiz" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="heroicons:academic-cap" class="w-5 h-5" />
            <span>Quiz</span>
          </NuxtLink>

          <NuxtLink 
            to="/migracao" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-sky-50 dark:hover:bg-purple-500/10 transition-all font-medium"
          >
            <Icon name="heroicons:arrow-path" class="w-5 h-5" />
            <span>Migração</span>
          </NuxtLink>

          <!-- Mobile Theme Selector -->
          <div class="px-4 py-3 grid grid-cols-3 gap-2">
             <button 
               @click="colorMode.preference = 'light'"
               class="p-3 rounded-xl border flex flex-col items-center gap-2 transition-all"
               :class="colorMode.preference === 'light' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600' : 'bg-black/5 dark:bg-white/5 border-transparent text-slate-500'"
             >
                <Icon name="heroicons:sun-20-solid" class="w-5 h-5" />
                <span class="text-[10px] font-bold">Claro</span>
             </button>
             <button 
               @click="colorMode.preference = 'dark'"
               class="p-3 rounded-xl border flex flex-col items-center gap-2 transition-all"
               :class="colorMode.preference === 'dark' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600' : 'bg-black/5 dark:bg-white/5 border-transparent text-slate-500'"
             >
                <Icon name="heroicons:moon-20-solid" class="w-5 h-5" />
                <span class="text-[10px] font-bold">Escuro</span>
             </button>
             <button 
               @click="colorMode.preference = 'system'"
               class="p-3 rounded-xl border flex flex-col items-center gap-2 transition-all"
               :class="colorMode.preference === 'system' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600' : 'bg-black/5 dark:bg-white/5 border-transparent text-slate-500'"
             >
                <Icon name="heroicons:computer-desktop-20-solid" class="w-5 h-5" />
                <span class="text-[10px] font-bold">Auto</span>
             </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content with Transition -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-50 dark:bg-[#020420] border-t border-black/5 dark:border-white/5 mt-auto">
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <img 
              :src="colorMode.value === 'dark' ? '/logo-dark.png' : '/logo-light.png'" 
              alt="Aprenda Nuxt 4" 
              class="h-12 w-auto"
            />
          </NuxtLink>
          <div class="flex gap-8 text-slate-500 dark:text-gray-400 text-sm font-medium">
            <NuxtLink to="/docs" class="hover:text-[#00DC82] transition-colors">Documentação</NuxtLink>
            <NuxtLink to="/playground" class="hover:text-[#00DC82] transition-colors">Playground</NuxtLink>
            <NuxtLink to="/quiz" class="hover:text-[#00DC82] transition-colors">Quiz</NuxtLink>
          </div>
        </div>
        <div class="pt-8 border-t border-black/5 dark:border-white/5 text-center space-y-4">
          <p class="text-sm text-slate-500 dark:text-gray-500">
            🎉 Feito com muito carinho para a comunidade Nuxt! 💜<br>
            Aprenda Nuxt 4 e seja um mestre do desenvolvimento moderno.
          </p>
          <p class="text-xs text-slate-400 dark:text-gray-600">
            Desenvolvido por 
            <a href="https://martinsds.dev.br/" target="_blank" rel="noopener noreferrer" class="text-[#00DC82] hover:underline transition-all font-semibold">
              Tiago Martins
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isMenuOpen = ref(false)
const isLoading = ref(true)
const showLoading = ref(true)

onMounted(() => {
  // Simulate heavy content loading or wait for hydration
  setTimeout(() => {
    showLoading.value = false
    setTimeout(() => {
      isLoading.value = false
    }, 500) // Wait for fade out animation
  }, 1500)
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

const themeTitle = computed(() => {
  if (colorMode.preference === 'dark') return 'Modo Escuro (Clique para Auto)'
  if (colorMode.preference === 'light') return 'Modo Claro (Clique para Escuro)'
  return 'Automático (Clique para Claro)'
})

const indicatorColor = computed(() => {
  if (colorMode.preference === 'dark') return 'bg-blue-400'
  if (colorMode.preference === 'light') return 'bg-yellow-500'
  return 'bg-emerald-500'
})

function cycleTheme() {
  if (colorMode.preference === 'system') {
    colorMode.preference = 'light'
  } else if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'system'
  }
}
</script>
