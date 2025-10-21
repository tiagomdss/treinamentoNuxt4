<template>
  <div>

    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-32 text-center">
      <div class="inline-block bg-purple-600/80 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
        🎮 Aprendizado Divertido
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
        Aprenda Nuxt 4<br>
        <span class="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">se Divertindo!</span> <span class="inline-block rocket-fly">🚀</span>
      </h1>
      
      <p class="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
        Descubra o framework Vue.js mais poderoso do planeta! Transforme suas ideias em aplicações incríveis com magia e diversão. ✨
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/docs" 
          class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-3 text-base rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          Começar Agora
          <Icon name="heroicons:arrow-right-20-solid" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink 
          to="/playground" 
          class="inline-flex items-center justify-center gap-2 bg-purple-800/50 backdrop-blur-sm border border-purple-500/50 text-white hover:bg-purple-700/50 px-8 py-3 text-base rounded-lg transition-all"
        >
          <Icon name="heroicons:code-bracket" class="w-5 h-5" />
          Playground
        </NuxtLink>
      </div>
    </div>

    <!-- Video Section -->
    <div class="bg-purple-950/50 backdrop-blur-sm py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Vídeo de Introdução 🎬
          </h2>
          <p class="text-xl text-purple-200">
            Veja como o Nuxt 4 pode transformar seu desenvolvimento web
          </p>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500/30 bg-black">
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/-BZoj6ENAmA"
              title="Nuxt 4 Introduction"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          
          <div class="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div class="px-4 py-2 bg-purple-900/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-200 text-sm flex items-center gap-2">
              <Icon name="heroicons:play" class="w-4 h-4" />
              <span>Tutorial Completo</span>
            </div>
            <div class="px-4 py-2 bg-purple-900/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-200 text-sm flex items-center gap-2">
              <Icon name="heroicons:fire" class="w-4 h-4" />
              <span>Atualizado</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Metrics Section -->
    <div class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-3 text-white flex items-center justify-center gap-3">
            Performance que Impressiona 📊
          </h2>
          <p class="text-lg text-purple-300">Métricas reais que mostram o poder do Nuxt 4</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:border-purple-400/50 transition-all">
            <div class="mb-3">
              <Icon name="heroicons:star" class="w-8 h-8 text-purple-400 mx-auto pulse-glow" />
            </div>
            <div class="text-4xl font-bold text-white mb-2">100</div>
            <div class="text-sm text-purple-300">Lighthouse Score</div>
          </div>
          
          <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:border-purple-400/50 transition-all">
            <div class="mb-3">
              <Icon name="heroicons:bolt" class="w-8 h-8 text-purple-400 mx-auto wiggle" />
            </div>
            <div class="text-4xl font-bold text-white mb-2">A+</div>
            <div class="text-sm text-purple-300">Core Web Vitals</div>
          </div>
          
          <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:border-purple-400/50 transition-all">
            <div class="mb-3">
              <Icon name="heroicons:arrow-trending-down" class="w-8 h-8 text-purple-400 mx-auto bounce-slow" />
            </div>
            <div class="text-4xl font-bold text-white mb-2">-45%</div>
            <div class="text-sm text-purple-300">Bundle Size</div>
          </div>
          
          <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:border-purple-400/50 transition-all">
            <div class="mb-3">
              <Icon name="heroicons:clock" class="w-8 h-8 text-purple-400 mx-auto rotate-slow" />
            </div>
            <div class="text-4xl font-bold text-white mb-2">1.2s</div>
            <div class="text-sm text-purple-300">Load Time</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Features Section -->
    <div class="container mx-auto px-4 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 text-white flex items-center justify-center gap-3">
          Recursos Avançados do Nuxt 4 🔮
        </h2>
        <p class="text-lg text-purple-300">Tudo o que você precisa para construir apps modernos</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div 
          v-for="(feature, index) in advancedFeatures" 
          :key="feature.title"
          class="card-hover bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 rounded-2xl p-6 group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex items-start gap-4">
            <div class="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
              <Icon :name="feature.icon" :class="['w-6 h-6 text-purple-300 group-hover:text-purple-200', getIconAnimation(feature.icon)]" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">{{ feature.title }}</h3>
              <p class="text-purple-300 text-sm group-hover:text-purple-200 transition-colors">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Start CTA -->
    <div class="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-sm py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Pronto para a Aventura? 🎮
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de desenvolvedores que estão revolucionando a web com Nuxt 4!
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/docs"
            class="inline-flex items-center justify-center gap-2 bg-white text-purple-900 hover:bg-purple-50 font-bold px-10 py-4 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Icon name="heroicons:book-open" class="w-6 h-6" />
            Ler Documentação
          </NuxtLink>
          <NuxtLink 
            to="/playground"
            class="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold px-10 py-4 text-lg rounded-lg transition-all"
          >
            <Icon name="heroicons:code-bracket" class="w-6 h-6" />
            Experimentar Agora
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div class="space-y-2">
            <div class="text-5xl font-bold text-white">100k+</div>
            <div class="text-purple-300">Desenvolvedores</div>
          </div>
          <div class="space-y-2">
            <div class="text-5xl font-bold text-white">50k+</div>
            <div class="text-purple-300">Projetos Criados</div>
          </div>
          <div class="space-y-2">
            <div class="text-5xl font-bold text-white">4.9★</div>
            <div class="text-purple-300">Avaliação GitHub</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const getIconAnimation = (iconName: string) => {
  const animations: Record<string, string> = {
    'heroicons:rocket-launch': 'rocket-fly',
    'heroicons:sparkles': 'pulse-glow',
    'heroicons:folder': 'bounce-slow',
    'heroicons:cloud-arrow-down': 'bounce-slow',
    'heroicons:code-bracket-square': 'wiggle',
    'heroicons:magnifying-glass': 'rotate-slow',
    'heroicons:puzzle-piece': 'wiggle',
    'heroicons:wrench-screwdriver': 'bounce-slow'
  }
  return animations[iconName] || ''
}

const advancedFeatures = [
  {
    title: 'Server Components',
    description: 'Renderização no servidor com componentes híbridos para máxima performance',
    icon: 'heroicons:server'
  },
  {
    title: 'Auto-imports',
    description: 'Imports automáticos de componentes, composables e utilitários',
    icon: 'heroicons:sparkles'
  },
  {
    title: 'File-based Routing',
    description: 'Sistema de rotas baseado em arquivos, simples e poderoso',
    icon: 'heroicons:folder'
  },
  {
    title: 'Data Fetching',
    description: 'APIs modernas para buscar dados com cache inteligente',
    icon: 'heroicons:cloud-arrow-down'
  },
  {
    title: 'TypeScript',
    description: 'Suporte completo a TypeScript sem configuração adicional',
    icon: 'heroicons:code-bracket-square'
  },
  {
    title: 'SEO & Meta',
    description: 'Gerenciamento avançado de meta tags e otimização para SEO',
    icon: 'heroicons:magnifying-glass'
  },
  {
    title: 'Nitro Engine',
    description: 'Motor de servidor universal com deploy em qualquer plataforma',
    icon: 'heroicons:rocket-launch'
  },
  {
    title: 'Módulos',
    description: 'Ecossistema rico de módulos para estender funcionalidades',
    icon: 'heroicons:puzzle-piece'
  },
  {
    title: 'DevTools',
    description: 'Ferramentas de desenvolvimento integradas para debugging',
    icon: 'heroicons:wrench-screwdriver'
  }
]

useHead({
  title: 'Aprenda Nuxt 4 - Plataforma de Aprendizado Interativa',
  meta: [
    { name: 'description', content: 'Aprenda Nuxt 4 de forma divertida e interativa!' }
  ]
})
</script>
