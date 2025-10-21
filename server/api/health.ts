export default defineEventHandler(() => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    nuxtVersion: '4.0',
    message: 'Nuxt 4 Learning Platform API is running! 🚀'
  }
})
