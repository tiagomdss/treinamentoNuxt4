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
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
              active-class="bg-black/5 dark:bg-purple-800/70"
              exact
            >
              <Icon name="heroicons:home" class="w-5 h-5" />
              <span>Início</span>
            </NuxtLink>
            <NuxtLink 
              to="/docs" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
              active-class="bg-black/5 dark:bg-purple-800/70"
            >
              <Icon name="heroicons:book-open" class="w-5 h-5" />
              <span>Documentação</span>
            </NuxtLink>
            <NuxtLink 
              to="/playground" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
              active-class="bg-black/5 dark:bg-purple-800/70"
            >
              <Icon name="heroicons:code-bracket" class="w-5 h-5" />
              <span>Playground</span>
            </NuxtLink>
            <NuxtLink 
              to="/examples" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
              active-class="bg-black/5 dark:bg-purple-800/70"
            >
              <Icon name="heroicons:rocket-launch" class="w-5 h-5" />
              <span>Exemplos</span>
            </NuxtLink>
            <NuxtLink 
              to="/quiz" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
              active-class="bg-black/5 dark:bg-purple-800/70"
            >
              <Icon name="heroicons:academic-cap" class="w-5 h-5" />
              <span>Quiz</span>
            </NuxtLink>
            <NuxtLink 
              to="/migracao" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
              active-class="bg-black/5 dark:bg-purple-800/70"
            >
              <Icon name="heroicons:arrow-path" class="w-5 h-5" />
              <span>Migração</span>
            </NuxtLink>
            
            <!-- Dark Mode Toggle -->
            <button 
              @click="toggleTheme" 
              class="p-2 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors ml-2"
              :title="colorMode.value === 'dark' ? 'Mudar para Claro' : 'Mudar para Escuro'"
            >
              <Icon 
                :name="colorMode.value === 'dark' ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid'" 
                class="w-5 h-5" 
              />
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
          class="md:hidden mt-4 space-y-2 pb-4"
        >
          <NuxtLink 
            to="/" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:home" class="w-5 h-5" />
            <span>Início</span>
          </NuxtLink>
          <NuxtLink 
            to="/docs" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:book-open" class="w-5 h-5" />
            <span>Documentação</span>
          </NuxtLink>
          <NuxtLink 
            to="/playground" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:code-bracket" class="w-5 h-5" />
            <span>Playground</span>
          </NuxtLink>
          <NuxtLink 
            to="/examples" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:rocket-launch" class="w-5 h-5" />
            <span>Exemplos</span>
          </NuxtLink>
          <NuxtLink 
            to="/quiz" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:academic-cap" class="w-5 h-5" />
            <span>Quiz</span>
          </NuxtLink>
          <NuxtLink 
            to="/migracao" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:arrow-path" class="w-5 h-5" />
            <span>Migração</span>
          </NuxtLink>
          
          <button 
            @click="toggleTheme"
            class="w-full flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-purple-800/50 transition-colors text-left"
          >
            <Icon 
              :name="colorMode.value === 'dark' ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid'" 
              class="w-5 h-5" 
            />
            <span>Mudar Tema</span>
          </button>
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

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
