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
            <Icon name="heroicons:code-bracket" class="w-5 h-5 text-emerald-600" />
            <span class="text-emerald-700 dark:text-[#00DC82] font-semibold text-sm tracking-wide uppercase">Playground Interativo</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Experimente <span class="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Nuxt 4</span>
          </h1>
          <p class="text-xl text-slate-700 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Explore os conceitos do Nuxt 4 em tempo real com nosso ambiente sandbox de alta performance.
          </p>
        </div>

        <!-- Sandbox Embutido -->
        <div class="bg-white/65 dark:bg-black/40 backdrop-blur-xl border border-white dark:border-white/10 rounded-[2.5rem] overflow-hidden mb-12 shadow-glass hover:shadow-2xl transition-all duration-500 hover:border-emerald-500/20 group">
          <div class="bg-white/50 dark:bg-white/5 p-6 border-b border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Icon name="heroicons:play-solid" class="w-6 h-6 text-emerald-600" />
              </div>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Sandbox Nuxt 4</h2>
            </div>
            <a
              href="https://devtools.nuxt.com/playground"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-8 py-3 bg-[#00DC82] hover:bg-[#00c976] text-slate-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:-translate-y-1"
            >
              Abrir Playground Oficial
              <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5" />
            </a>
          </div>
          
          <div class="relative" style="height: 700px;">
            <iframe
              :src="`https://stackblitz.com/edit/nuxt-starter?embed=1&file=app.vue&theme=${colorMode.value}`"
              style="width: 100%; height: 100%; border: 0;"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
        </div>

        <!-- Examples -->
        <div class="mt-20">
          <h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-10 tracking-tight flex items-center gap-4">
            <Icon name="heroicons:light-bulb" class="w-10 h-10 text-yellow-400" />
            Exemplos Rápidos
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <button
              v-for="example in examples"
              :key="example.title"
              @click="loadExample(example.code)"
              class="group bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-[#00DC82]/30 transition-all duration-500 rounded-3xl p-8 text-left hover:bg-white dark:hover:bg-white/[0.08] hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00DC82] transition-colors">{{ example.title }}</h3>
              <p class="text-slate-600 dark:text-gray-400 text-base font-light leading-relaxed">{{ example.description }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
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
