<template>
  <div class="relative min-h-screen bg-[#F8FAFC] dark:bg-[#020420] overflow-hidden transition-colors duration-500">
    <!-- Cosmic Background Blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#34d399]/20 dark:bg-[#10b981]/15 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
      <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#60a5fa]/20 dark:bg-[#2563eb]/10 rounded-full blur-[100px] animate-[float_25s_infinite_ease-in-out_reverse]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-[#c084fc]/20 dark:bg-[#7c3aed]/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-emerald-400/10 border border-slate-200 dark:border-white/10 mb-8 backdrop-blur-md">
            <Icon name="heroicons:sparkles" class="w-5 h-5 text-emerald-600" />
            <span class="text-emerald-700 dark:text-[#00DC82] font-semibold text-sm tracking-wide uppercase">Inspiração & Projetos</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Exemplos <span class="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Práticos</span>
          </h1>
          <p class="text-xl text-slate-700 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Explore projetos reais e referências mundiais que utilizam tecnologias de ponta.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="example in examples" 
            :key="example.title"
            class="group bg-white/65 dark:bg-white/[0.03] backdrop-blur-xl border border-white dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-emerald-500/30 shadow-glass hover:shadow-2xl hover:-translate-y-2"
          >
            <!-- Preview Image -->
            <div class="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-800 border-b border-slate-200 dark:border-white/5">
              <img 
                :src="example.image" 
                :alt="example.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span class="text-white text-sm font-medium flex items-center gap-2">
                  <Icon name="heroicons:eye" class="w-4 h-4" />
                  Ver Detalhes
                </span>
              </div>
              <div class="absolute top-4 right-4 animate-pulse">
                <span 
                  v-if="example.badge"
                  :class="[
                    'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border transition-colors',
                    example.badge === 'Projeto Pessoal' 
                      ? 'bg-[#00DC82] text-slate-900 border-[#00DC82]/20' 
                      : 'bg-purple-500 text-white border-purple-400/20'
                  ]"
                >
                  {{ example.badge }}
                </span>
              </div>
            </div>

            <div class="p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-[#00DC82]/10 rounded-xl flex items-center justify-center border border-[#00DC82]/20 group-hover:scale-110 transition-transform">
                  <Icon :name="example.icon" class="w-6 h-6 text-[#00DC82]" />
                </div>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{{ example.title }}</h3>
              </div>
              
              <p class="text-slate-600 dark:text-gray-400 mb-8 font-light leading-relaxed min-h-[4rem] line-clamp-2">
                {{ example.description }}
              </p>
              
              <div class="space-y-6">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in example.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-slate-200/50 dark:bg-white/5 text-slate-500 dark:text-gray-400 text-xs rounded-lg border border-slate-300 dark:border-white/5 group-hover:border-[#00DC82]/20 transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <div class="pt-6 border-t border-slate-200 dark:border-white/5 flex gap-4">
                  <a 
                    v-if="example.demo"
                    :href="example.demo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 px-6 py-3 bg-[#00DC82] hover:bg-[#00c976] text-slate-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,220,130,0.3)] flex items-center justify-center gap-2"
                  >
                    <Icon name="heroicons:globe-alt" class="w-5 h-5" />
                    Visitar Site
                  </a>
                  <a 
                    v-if="example.github"
                    :href="example.github" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-5 py-3 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white font-bold rounded-xl transition-all border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 group/btn"
                  >
                    <Icon name="simple-icons:github" class="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const examples = [
  {
    title: 'Tiago Martins Portfolio',
    icon: 'heroicons:user-circle',
    description: 'Site pessoal de alta performance focado em tecnologias modernas e UX.',
    technologies: ['Nuxt 4', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/img/examples/martinsds.png',
    demo: 'https://martinsds.dev.br',
    github: 'https://github.com/tiagomdss/martinsds.dev.br',
    badge: 'Projeto Pessoal'
  },
  {
    title: 'Louis Vuitton',
    icon: 'heroicons:shopping-bag',
    description: 'Experiência de luxo digital com animações sofisticadas e design premium.',
    technologies: ['Vue.js', 'Premium UX', 'E-commerce'],
    image: '/img/examples/lv.png',
    demo: 'https://br.louisvuitton.com/por-br/homepage',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'Google Ventures (GV)',
    icon: 'heroicons:light-bulb',
    description: 'Design minimalista e tipografia impecável para o mundo corporativo moderno.',
    technologies: ['Modern Web', 'Minimalism', 'Typography'],
    image: '/img/examples/gv.png',
    demo: 'https://www.gv.com',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'Microsoft Edge Dev',
    icon: 'heroicons:code-bracket',
    description: 'Documentação técnica moderna e recursos interativos avançados.',
    technologies: ['Design System', 'Acessibilidade', 'Tech Content'],
    image: '/img/examples/edge.png',
    demo: 'https://developer.microsoft.com/en-us/microsoft-edge?form=MA13LH',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'GitLab',
    icon: 'heroicons:code-bracket-square',
    description: 'Interface complexa e robusta para fluxos de trabalho DevOps avançados.',
    technologies: ['DevOps', 'Collaboration', 'Scalability'],
    image: '/img/examples/gitlab.png',
    demo: 'https://about.gitlab.com',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'Armani',
    icon: 'heroicons:sparkles',
    description: 'E-commerce de moda elegante com foco absoluto em estética e fluidez.',
    technologies: ['Luxury Fashion', 'E-commerce', 'Animations'],
    image: '/img/examples/armani.png',
    demo: 'https://www.armani.com/en-wx/',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'Nuxt Content',
    icon: 'heroicons:document-text',
    description: 'CMS baseado em Git para projetos Nuxt com Markdown e MDC. Poderoso e flexível.',
    technologies: ['Open Source', 'Nuxt Module', 'Git-based'],
    image: '/img/examples/nuxt-content.png',
    demo: 'https://content.nuxt.com',
    github: 'https://github.com/nuxt/content',
    badge: 'Oficial'
  }
]

useHead({
  title: 'Exemplos - Aprenda Nuxt 4',
  meta: [
    { name: 'description', content: 'Exemplos práticos de projetos com Nuxt 4' }
  ]
})
</script>
