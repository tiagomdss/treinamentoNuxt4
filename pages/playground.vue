<template>
  <div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-2 bg-green-600/80 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            💻 Playground Interativo
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">Experimente Nuxt 4</h1>
          <p class="text-xl text-purple-200 mb-8">
            Explore os conceitos do Nuxt 4 de forma prática e interativa!
          </p>
        </div>

        <!-- Sandbox Embutido -->
        <div class="bg-black/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl overflow-hidden mb-8">
          <div class="bg-purple-900/50 p-4 border-b border-purple-500/30 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Icon name="heroicons:play" class="w-6 h-6 text-green-400" />
              <h2 class="text-xl font-bold text-white">🎮 Sandbox Interativo - Nuxt 4</h2>
            </div>
            <a
              href="https://stackblitz.com/fork/nuxt-starter"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all text-sm"
            >
              Abrir em Nova Aba
              <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4" />
            </a>
          </div>
          
          <!-- StackBlitz Iframe -->
          <div class="relative" style="height: 800px;">
            <iframe
              src="https://stackblitz.com/edit/nuxt-starter?embed=1&file=app.vue&theme=dark"
              style="width: 100%; height: 100%; border: 0;"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
        </div>

        <!-- Examples -->
        <div class="mt-12">
          <h2 class="text-3xl font-bold text-white mb-6">📝 Exemplos Rápidos</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <button
              v-for="example in examples"
              :key="example.title"
              @click="loadExample(example.code)"
              class="bg-purple-900/50 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400/50 transition-all rounded-xl p-4 text-left"
            >
              <h3 class="text-lg font-bold text-white mb-2">{{ example.title }}</h3>
              <p class="text-purple-200 text-sm">{{ example.description }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const examples = [
  {
    title: 'Hello World',
    description: 'Exemplo básico de componente Vue',
    code: `<template>
  <div>
    <h1>Olá, Nuxt 4!</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const message = ref('Bem-vindo!')
<\/script>`
  },
  {
    title: 'Lista Reativa',
    description: 'Renderização de lista com v-for',
    code: `<template>
  <div>
    <h1>Minha Lista</h1>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = ref(['Nuxt', 'Vue', 'TypeScript'])
<\/script>`
  },
  {
    title: 'useFetch',
    description: 'Buscar dados de API',
    code: `<template>
  <div>
    <div v-if="pending">Carregando...</div>
    <div v-else-if="error">Erro: {{ error.message }}</div>
    <div v-else>
      <h1>{{ data.title }}</h1>
      <p>{{ data.body }}</p>
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch(
  'https://jsonplaceholder.typicode.com/posts/1'
)
<\/script>`
  },
  {
    title: 'Composable',
    description: 'Criar e usar composable',
    code: `// composables/useCounter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return { count, increment, decrement }
}

// pages/index.vue
<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
const { count, increment, decrement } = useCounter()
<\/script>`
  },
  {
    title: 'Rota Dinâmica',
    description: 'Página com parâmetros',
    code: `// pages/users/[id].vue
<template>
  <div>
    <h1>Usuário #{{ route.params.id }}</h1>
    <p>Nome: {{ user?.name }}</p>
    <p>Email: {{ user?.email }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: user } = await useFetch(
  \`https://jsonplaceholder.typicode.com/users/\${route.params.id}\`
)
<\/script>`
  },
  {
    title: 'Server API',
    description: 'Criar endpoint de API',
    code: `// server/api/hello.ts
export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nuxt API!',
    timestamp: new Date().toISOString()
  }
})

// Usar no frontend
<script setup>
const { data } = await useFetch('/api/hello')
console.log(data.value.message)
<\/script>`
  }
]

function loadExample(exampleCode: string) {
  // Copiar código para clipboard
  navigator.clipboard.writeText(exampleCode)
  alert('Código copiado! Cole no StackBlitz acima.')
}

useHead({
  title: 'Playground - Aprenda Nuxt 4',
  meta: [
    { name: 'description', content: 'Playground interativo para experimentar Nuxt 4' }
  ]
})
</script>
