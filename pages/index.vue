<template>
  <div class="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#020420] transition-colors duration-500">
    <!-- Cosmic Background Blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#34d399]/20 dark:bg-[#10b981]/15 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
      <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#60a5fa]/20 dark:bg-[#2563eb]/10 rounded-full blur-[100px] animate-[float_25s_infinite_ease-in-out_reverse]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-[#c084fc]/20 dark:bg-[#7c3aed]/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
    </div>

    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center pt-28 pb-20 text-center z-10 relative">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-8 backdrop-blur-md">
        <Icon name="heroicons:rocket-launch" class="w-5 h-5 text-[#00DC82]" />
        <span class="text-[#00DC82] font-semibold text-sm tracking-wide uppercase">Framework Vue.js Moderno</span>
      </div>
      
      <h1 class="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
        Aprenda Nuxt 4<br />
        <span class="bg-gradient-to-r from-emerald-500 via-[#36E4DA] to-[#00DC82] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">se Divertindo!</span> 
        <span class="inline-block animate-bounce ml-2">🚀</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
        Descubra o framework Vue.js mais poderoso do planeta! Transforme suas ideias <br class="hidden md:block">
        em aplicações incríveis com componentes de alta performance. ✨
      </p>

      <div class="flex flex-col sm:flex-row gap-6 items-center">
        <NuxtLink 
          to="/docs" 
          class="group relative inline-flex items-center justify-center gap-3 bg-[#00DC82] hover:bg-[#00c976] text-slate-900 font-bold px-10 py-5 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,220,130,0.3)]"
        >
          <span>Começar Agora</span>
          <Icon name="heroicons:arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
        
        <NuxtLink 
          to="/playground" 
          class="group inline-flex items-center justify-center gap-3 bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold px-10 py-5 text-lg rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-md"
        >
          <Icon name="heroicons:code-bracket" class="w-5 h-5 text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          <span>Playground</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Video Section -->
    <div class="relative py-24 z-10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
            Vídeo de Introdução <span class="inline-block animate-pulse ml-2">🎬</span>
          </h2>
          <p class="text-lg text-slate-700 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Explore as principais novidades e aprenda a dominar o Nuxt 4 desde o primeiro passo.
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#00DC82] to-[#36E4DA] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div class="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0F29]/80 backdrop-blur-xl shadow-2xl">
              <iframe
                class="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-0"
                src="https://www.youtube.com/embed/-BZoj6ENAmA"
                title="Nuxt 4 Introduction"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          
          <div class="mt-12 flex justify-center gap-6">
            <div class="px-8 py-3 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm font-medium text-slate-700 dark:text-gray-300 flex items-center gap-3 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-default">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
              Tutorial Completo
            </div>
            <div class="px-8 py-3 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm font-medium text-slate-700 dark:text-gray-300 flex items-center gap-3 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-default">
              <Icon name="heroicons:check-badge" class="w-5 h-5 text-emerald-600 dark:text-purple-400" />
              Atualizado Nuxt 4
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Metrics Section -->
    <div class="py-32 relative">
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Performance Líquida <span class="animate-pulse ml-2">📊</span>
          </h2>
          <p class="text-lg text-slate-700 dark:text-slate-400 font-light">Aplicações que carregam na velocidade da luz</p>
        </div>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div v-for="stat in performanceStats" :key="stat.label" 
               class="group relative bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white dark:hover:bg-white/[0.08] hover:-translate-y-2 hover:border-[#00DC82]/30 shadow-sm hover:shadow-xl">
            <div class="mb-6">
              <div class="w-14 h-14 bg-[#00DC82]/10 rounded-2xl flex items-center justify-center border border-[#00DC82]/20 group-hover:scale-110 transition-transform duration-500">
                <Icon :name="stat.icon" class="w-7 h-7 text-[#00DC82]" />
              </div>
            </div>
            <div class="text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tighter">{{ stat.value }}</div>
            <div class="text-sm text-[#00DC82] font-semibold tracking-wider uppercase">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="container mx-auto px-4 py-32 relative z-10">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
          Recursos de Cristal <span class="ml-2">💎</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-gray-400 font-light">Poderosas ferramentas integradas por padrão</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="(feature, index) in advancedFeatures" 
          :key="feature.title"
          class="group bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-[#00DC82]/30 rounded-3xl p-10 transition-all duration-500 hover:bg-white dark:hover:bg-white/[0.08] backdrop-blur-xl shadow-sm hover:shadow-xl"
        >
          <div class="flex flex-col gap-6">
            <div class="w-16 h-16 bg-[#00DC82]/10 rounded-2xl flex items-center justify-center border border-[#00DC82]/20 group-hover:scale-110 transition-transform duration-500">
              <Icon :name="feature.icon" class="w-8 h-8 text-[#00DC82]" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">{{ feature.title }}</h3>
              <p class="text-slate-600 dark:text-gray-400 leading-relaxed font-light text-lg">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Start CTA -->
    <div class="py-32 relative">
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">
          Pronto para Mergulhar? <span class="inline-block animate-bounce ml-2">🌊</span>
        </h2>
        <p class="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Junte-se a milhares de desenvolvedores que já estão <br class="hidden md:block">
          construindo o futuro da web com Nuxt 4.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <NuxtLink 
            to="/docs"
            class="inline-flex items-center justify-center gap-3 bg-[#00DC82] text-slate-900 hover:bg-[#00c976] font-bold px-12 py-5 text-xl rounded-2xl transition-all shadow-xl hover:shadow-[0_0_40px_rgba(0,220,130,0.3)] hover:-translate-y-1"
          >
            <Icon name="heroicons:book-open" class="w-6 h-6" />
            Ler Documentação
          </NuxtLink>
          <NuxtLink 
            to="/playground"
            class="inline-flex items-center justify-center gap-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-white dark:hover:bg-white/10 font-bold px-12 py-5 text-xl rounded-2xl transition-all backdrop-blur-md hover:-translate-y-1 shadow-sm hover:shadow-xl"
          >
            <Icon name="heroicons:code-bracket" class="w-6 h-6" />
            Experimentar Play
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="py-24 border-t border-white/5">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto text-center">
          <div class="space-y-3 group">
            <div class="text-7xl font-bold text-slate-900 dark:text-white tracking-tighter transition-transform group-hover:scale-110 duration-500">100k+</div>
            <div class="text-[#00DC82] font-semibold uppercase tracking-widest text-sm">Desenvolvedores</div>
          </div>
          <div class="space-y-3 group">
            <div class="text-7xl font-bold text-slate-900 dark:text-white tracking-tighter transition-transform group-hover:scale-110 duration-500">50k+</div>
            <div class="text-[#00DC82] font-semibold uppercase tracking-widest text-sm">Projetos Ativos</div>
          </div>
          <div class="space-y-3 group">
            <div class="text-7xl font-bold text-slate-900 dark:text-white tracking-tighter transition-transform group-hover:scale-110 duration-500 flex items-center justify-center gap-3">
              4.9 <Icon name="heroicons:star-solid" class="w-10 h-10 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
            </div>
            <div class="text-[#00DC82] font-semibold uppercase tracking-widest text-sm">Avaliação Comunidade</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const performanceStats = [
  { label: 'Score Perfeito', value: '100', icon: 'heroicons:star' },
  { label: 'Core Web Vitals', value: 'A+', icon: 'heroicons:bolt' },
  { label: 'Smaller Size', value: '-45%', icon: 'heroicons:arrow-trending-down' },
  { label: 'Load Time', value: '1.2s', icon: 'heroicons:clock' }
]

const advancedFeatures = [
  {
    title: 'Server Components',
    description: 'Renderização no servidor com componentes híbridos para máxima performance fluida.',
    icon: 'heroicons:server'
  },
  {
    title: 'Auto-imports',
    description: 'Imports automáticos de componentes e composables que fluem naturalmente no seu código.',
    icon: 'heroicons:sparkles'
  },
  {
    title: 'File-based Routing',
    description: 'Sistema de rotas intuitivo onde a estrutura de arquivos reflete sua navegação.',
    icon: 'heroicons:folder'
  },
  {
    title: 'Data Fetching',
    description: 'APIs modernas e hooks inteligentes para buscar dados com cache integrado e suave.',
    icon: 'heroicons:cloud-arrow-down'
  },
  {
    title: 'TypeScript',
    description: 'Suporte completo a TypeScript - tipagem segura, transparente e produtiva.',
    icon: 'heroicons:code-bracket-square'
  },
  {
    title: 'Nitro Engine',
    description: 'Motor de servidor universal com deploy líquido em qualquer plataforma.',
    icon: 'heroicons:rocket-launch'
  }
]

useHead({
  title: 'Aprenda Nuxt 4 - Plataforma de Aprendizado Interativa',
  meta: [
    { name: 'description', content: 'Aprenda Nuxt 4 de forma divertida e interativa!' }
  ]
})
</script>
