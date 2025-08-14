const posts = [
  { id: 1, title: 'Meu Primeiro Post', content: 'Nuxt é incrível!' },
  { id: 2, title: 'Explorando Pastas', content: 'As convenções são poderosas.' },
  { id: 3, title: 'Componentes Reutilizáveis', content: 'Não repita código!' }
]

export default defineEventHandler((event) => {
  const postId = Number(event.context.params?.id)
  const post = posts.find(p => p.id === postId)
  if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
  }
  return post
})
