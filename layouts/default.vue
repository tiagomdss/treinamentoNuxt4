<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex flex-col">
    <!-- Fixed Navigation -->
    <nav class="sticky top-0 z-50 bg-purple-950/80 backdrop-blur-lg border-b border-purple-500/30">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">N4</span>
            </div>
            <span class="font-bold text-xl text-white hidden sm:block">Aprenda Nuxt 4</span>
          </NuxtLink>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-2">
            <NuxtLink 
              to="/" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
              active-class="bg-purple-800/70"
              exact
            >
              <Icon name="heroicons:home" class="w-5 h-5" />
              <span>Início</span>
            </NuxtLink>
            <NuxtLink 
              to="/docs" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
              active-class="bg-purple-800/70"
            >
              <Icon name="heroicons:book-open" class="w-5 h-5" />
              <span>Documentação</span>
            </NuxtLink>
            <NuxtLink 
              to="/playground" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
              active-class="bg-purple-800/70"
            >
              <Icon name="heroicons:code-bracket" class="w-5 h-5" />
              <span>Playground</span>
            </NuxtLink>
            <NuxtLink 
              to="/examples" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
              active-class="bg-purple-800/70"
            >
              <Icon name="heroicons:rocket-launch" class="w-5 h-5" />
              <span>Exemplos</span>
            </NuxtLink>
            <NuxtLink 
              to="/quiz" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
              active-class="bg-purple-800/70"
            >
              <Icon name="heroicons:academic-cap" class="w-5 h-5" />
              <span>Quiz</span>
            </NuxtLink>
            <NuxtLink 
              to="/migracao" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
              active-class="bg-purple-800/70"
            >
              <Icon name="heroicons:arrow-path" class="w-5 h-5" />
              <span>Migração</span>
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMenu"
            class="md:hidden p-2 text-white hover:bg-purple-800/50 rounded-lg transition-colors"
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
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:home" class="w-5 h-5" />
            <span>Início</span>
          </NuxtLink>
          <NuxtLink 
            to="/docs" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:book-open" class="w-5 h-5" />
            <span>Documentação</span>
          </NuxtLink>
          <NuxtLink 
            to="/playground" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:code-bracket" class="w-5 h-5" />
            <span>Playground</span>
          </NuxtLink>
          <NuxtLink 
            to="/examples" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:rocket-launch" class="w-5 h-5" />
            <span>Exemplos</span>
          </NuxtLink>
          <NuxtLink 
            to="/quiz" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:academic-cap" class="w-5 h-5" />
            <span>Quiz</span>
          </NuxtLink>
          <NuxtLink 
            to="/migracao" 
            @click="closeMenu"
            class="flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
          >
            <Icon name="heroicons:arrow-path" class="w-5 h-5" />
            <span>Migração</span>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Page Content with Transition -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-purple-950/50 backdrop-blur-sm border-t border-purple-500/30 mt-auto">
      <div class="container mx-auto px-4 py-8 text-center">
        <p class="text-sm text-purple-200">
          🎉 Feito com muito carinho para a comunidade Nuxt! 💜<br>
          Aprenda Nuxt 4 e o primeiro passo para se tornar um herói do desenvolvimento web! 🦸‍♂️
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>
