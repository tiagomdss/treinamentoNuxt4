<template>
  <div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-2 bg-pink-600/80 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            🎨 Projetos Práticos
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">Exemplos Práticos</h1>
          <p class="text-xl text-purple-200 mb-8">
            Explore projetos completos construídos com Nuxt 4 e aprenda na prática!
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="example in examples" 
            :key="example.title"
            class="bg-purple-900/50 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 rounded-xl overflow-hidden"
          >
            <div class="p-6">
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Icon :name="example.icon" class="w-6 h-6 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-white">{{ example.title }}</h3>
                </div>
                <span 
                  v-if="example.badge"
                  :class="[
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    example.badge === 'Projeto Pessoal' 
                      ? 'bg-green-600/80 text-white' 
                      : 'bg-blue-600/80 text-white'
                  ]"
                >
                  {{ example.badge }}
                </span>
              </div>
              
              <p class="text-purple-200 mb-4">{{ example.description }}</p>
              
              <div class="space-y-2 mb-4">
                <div class="text-sm text-purple-300 font-semibold">Tecnologias:</div>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in example.technologies" 
                    :key="tech"
                    class="px-2 py-1 bg-purple-800/50 text-purple-200 text-xs rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div class="space-y-2">
                <div class="text-sm text-purple-300 font-semibold">Você vai aprender:</div>
                <ul class="space-y-1">
                  <li 
                    v-for="learning in example.learnings" 
                    :key="learning"
                    class="text-purple-100 text-sm flex items-start gap-2"
                  >
                    <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{{ learning }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="px-6 py-4 bg-purple-950/50 border-t border-purple-500/30 flex gap-3">
              <a 
                v-if="example.demo"
                :href="example.demo" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Icon name="heroicons:play" class="w-4 h-4" />
                Demo
              </a>
              <a 
                v-if="example.github"
                :href="example.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2 bg-purple-900/50 hover:bg-purple-800/50 text-white font-semibold rounded-lg transition-all border border-purple-500/30 flex items-center gap-2"
              >
                <Icon name="heroicons:code-bracket" class="w-4 h-4" />
                GitHub
              </a>
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
    title: 'martinsds.dev.br',
    icon: 'heroicons:user-circle',
    description: 'Site pessoal com portfólio e projetos desenvolvidos',
    technologies: ['Nuxt 4', 'TypeScript', 'Tailwind CSS'],
    learnings: [
      'Portfolio moderno',
      'Animações suaves',
      'SEO otimizado',
      'Performance A+'
    ],
    demo: 'https://martinsds.dev.br',
    github: 'https://github.com/tiagomdss/martinsds.dev.br',
    badge: 'Projeto Pessoal'
  },
  {
    title: 'Louis Vuitton',
    icon: 'heroicons:shopping-bag',
    description: 'E-commerce de luxo com experiência premium e animações sofisticadas',
    technologies: ['Vue.js', 'Animations', 'E-commerce'],
    learnings: [
      'Animações complexas',
      'UX premium',
      'Performance otimizada',
      'Design responsivo'
    ],
    demo: 'https://br.louisvuitton.com/por-br/homepage',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'GV (Google Ventures)',
    icon: 'heroicons:light-bulb',
    description: 'Site institucional com design minimalista e tipografia impecável',
    technologies: ['Modern Web', 'Typography', 'Minimalism'],
    learnings: [
      'Design minimalista',
      'Tipografia avançada',
      'Layout clean',
      'Storytelling visual'
    ],
    demo: 'https://www.gv.com',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'Microsoft Edge',
    icon: 'heroicons:globe-alt',
    description: 'Landing page moderna com recursos interativos e documentação completa',
    technologies: ['Microsoft', 'Documentation', 'Interactive'],
    learnings: [
      'Documentação técnica',
      'Recursos interativos',
      'Design system',
      'Acessibilidade'
    ],
    demo: 'https://developer.microsoft.com/en-us/microsoft-edge?form=MA13LH',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'GitLab',
    icon: 'heroicons:code-bracket-square',
    description: 'Plataforma DevOps com interface complexa e funcionalidades avançadas',
    technologies: ['DevOps', 'CI/CD', 'Collaboration'],
    learnings: [
      'Interface complexa',
      'Colaboração em tempo real',
      'CI/CD pipelines',
      'Git workflows'
    ],
    demo: 'https://about.gitlab.com',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'Armani',
    icon: 'heroicons:sparkles',
    description: 'E-commerce de moda com galeria de produtos e experiência visual elegante',
    technologies: ['Fashion', 'E-commerce', 'Luxury'],
    learnings: [
      'Galeria de produtos',
      'Experiência visual',
      'Filtros avançados',
      'Checkout otimizado'
    ],
    demo: 'https://www.armani.com/en-wx/',
    github: '',
    badge: 'Referência'
  },
  {
    title: 'Blog com Nuxt Content',
    icon: 'heroicons:document-text',
    description: 'Sistema de gerenciamento de conteúdo baseado em arquivos com Markdown e Vue components',
    technologies: ['Nuxt Content', 'Markdown', 'MDC'],
    learnings: [
      'Content management system',
      'Markdown com componentes Vue',
      'Query builder poderoso',
      'Syntax highlighting automático'
    ],
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
