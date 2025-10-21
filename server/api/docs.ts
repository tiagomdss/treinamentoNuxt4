export default defineEventHandler(() => {
  return {
    sections: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Aprenda os conceitos básicos do Nuxt 4'
      },
      {
        id: 'core-concepts',
        title: 'Core Concepts',
        description: 'Entenda os principais conceitos do framework'
      },
      {
        id: 'advanced',
        title: 'Advanced',
        description: 'Recursos avançados para projetos complexos'
      }
    ]
  }
})
