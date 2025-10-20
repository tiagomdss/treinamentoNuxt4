<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 py-12">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold mb-4">
          🎮 <span class="text-green-600">Exercícios Práticos</span>
        </h1>
        <p class="text-xl text-gray-600">
          Aprenda fazendo! Complete os desafios e domine o Nuxt 4
        </p>
      </div>

      <!-- Progress -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-lg">Seu Progresso</h3>
          <span class="text-2xl font-bold text-green-600">{{ completedCount }}/{{ exercises.length }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4">
          <div class="bg-green-600 h-4 rounded-full transition-all duration-500" 
               :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <p class="text-sm text-gray-600 mt-2">{{ progressPercentage }}% completo</p>
      </div>

      <!-- Exercises -->
      <div class="space-y-6">
        <div v-for="(exercise, index) in exercises" :key="index"
             class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Header -->
          <div class="p-6 border-b" :class="getDifficultyColor(exercise.difficulty)">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-3xl">{{ exercise.icon }}</span>
                  <div>
                    <h3 class="text-2xl font-bold">{{ exercise.title }}</h3>
                    <div class="flex items-center gap-3 mt-1">
                      <span class="text-sm px-3 py-1 rounded-full" 
                            :class="getDifficultyBadge(exercise.difficulty)">
                        {{ exercise.difficulty }}
                      </span>
                      <span class="text-sm text-gray-600">
                        <Icon name="lucide:clock" class="inline" /> {{ exercise.time }}
                      </span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700 mt-3">{{ exercise.description }}</p>
              </div>
              <button @click="toggleExercise(index)"
                      class="ml-4 px-4 py-2 rounded-lg font-semibold transition"
                      :class="exercise.completed ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'">
                {{ exercise.completed ? '✓ Completo' : 'Iniciar' }}
              </button>
            </div>
          </div>

          <!-- Content -->
          <div v-show="openExercises[index]" class="p-6 space-y-6">
            <!-- Objetivo -->
            <div>
              <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                <Icon name="lucide:target" class="text-blue-600" />
                Objetivo
              </h4>
              <p class="text-gray-700">{{ exercise.objective }}</p>
            </div>

            <!-- Passos -->
            <div>
              <h4 class="font-bold text-lg mb-3 flex items-center gap-2">
                <Icon name="lucide:list-ordered" class="text-purple-600" />
                Passos
              </h4>
              <ol class="space-y-3">
                <li v-for="(step, stepIndex) in exercise.steps" :key="stepIndex"
                    class="flex gap-3">
                  <span class="flex-shrink-0 w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {{ stepIndex + 1 }}
                  </span>
                  <span class="flex-1 pt-0.5">{{ step }}</span>
                </li>
              </ol>
            </div>

            <!-- Código Inicial -->
            <div v-if="exercise.starterCode">
              <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                <Icon name="lucide:code" class="text-green-600" />
                Código Inicial
              </h4>
              <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-sm text-gray-100"><code>{{ exercise.starterCode }}</code></pre>
              </div>
            </div>

            <!-- Dicas -->
            <div v-if="exercise.hints">
              <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                <Icon name="lucide:lightbulb" class="text-yellow-600" />
                Dicas
              </h4>
              <ul class="space-y-2">
                <li v-for="(hint, hintIndex) in exercise.hints" :key="hintIndex"
                    class="flex gap-2 text-gray-700">
                  <Icon name="lucide:arrow-right" class="text-yellow-600 flex-shrink-0 mt-1" />
                  <span>{{ hint }}</span>
                </li>
              </ul>
            </div>

            <!-- Solução -->
            <div v-if="exercise.solution">
              <button @click="toggleSolution(index)"
                      class="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition">
                <Icon :name="showSolutions[index] ? 'lucide:eye-off' : 'lucide:eye'" />
                {{ showSolutions[index] ? 'Ocultar' : 'Ver' }} Solução
              </button>
              <div v-show="showSolutions[index]" class="mt-4">
                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre class="text-sm text-gray-100"><code>{{ exercise.solution }}</code></pre>
                </div>
              </div>
            </div>

            <!-- Marcar como completo -->
            <div class="pt-4 border-t">
              <button @click="markComplete(index)"
                      class="w-full py-3 rounded-lg font-semibold transition"
                      :class="exercise.completed 
                        ? 'bg-gray-200 text-gray-600 cursor-not-allowed' 
                        : 'bg-green-600 text-white hover:bg-green-700'">
                {{ exercise.completed ? '✓ Exercício Completo!' : 'Marcar como Completo' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Conclusão -->
      <div v-if="allCompleted" class="mt-12 text-center p-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl">
        <div class="text-6xl mb-4">🎉</div>
        <h2 class="text-4xl font-bold text-green-800 mb-4">Parabéns!</h2>
        <p class="text-xl text-green-700 mb-6">
          Você completou todos os exercícios! Agora você está pronto para criar aplicações incríveis com Nuxt 4.
        </p>
        <NuxtLink to="/projetos" class="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
          Ver Projetos Avançados
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Exercise {
  icon: string
  title: string
  description: string
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado'
  time: string
  objective: string
  steps: string[]
  starterCode?: string
  hints?: string[]
  solution?: string
  completed: boolean
}

const exercises = ref<Exercise[]>([
  {
    icon: '📄',
    title: 'Criar Sua Primeira Página',
    description: 'Aprenda a criar uma página simples no Nuxt usando o sistema de rotas automático.',
    difficulty: 'Iniciante',
    time: '10 min',
    objective: 'Criar uma página "Sobre" que será acessível em /sobre',
    steps: [
      'Crie um arquivo chamado sobre.vue dentro da pasta app/pages/',
      'Adicione um template com um título e um parágrafo',
      'Acesse http://localhost:3000/sobre no navegador',
      'Adicione estilização com TailwindCSS'
    ],
    starterCode: `<!-- app/pages/sobre.vue -->
<template>
  <div>
    <!-- Seu código aqui -->
  </div>
</template>

<script setup lang="ts">
// Lógica aqui (se necessário)
</script>`,
    hints: [
      'Use classes do Tailwind como "text-3xl font-bold" para o título',
      'Adicione padding com "p-6" ou "p-8"',
      'Centralize o conteúdo com "container mx-auto"'
    ],
    solution: `<!-- app/pages/sobre.vue -->
<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-4">Sobre Nós</h1>
    <p class="text-lg text-gray-600">
      Bem-vindo à nossa aplicação Nuxt 4! 
      Esta é uma página criada automaticamente pelo sistema de rotas.
    </p>
  </div>
</template>

<script setup lang="ts">
// Nenhuma lógica necessária para este exercício simples
</script>`,
    completed: false
  },
  {
    icon: '🧱',
    title: 'Criar um Componente Reutilizável',
    description: 'Crie um componente de cartão (card) que pode ser usado em várias páginas.',
    difficulty: 'Iniciante',
    time: '15 min',
    objective: 'Criar um componente Card.vue e usá-lo em uma página',
    steps: [
      'Crie o arquivo Card.vue em app/components/',
      'Adicione props para título e conteúdo',
      'Estilize o card com TailwindCSS',
      'Use o componente em uma página (ele é importado automaticamente!)',
      'Teste passando diferentes props'
    ],
    starterCode: `<!-- app/components/Card.vue -->
<template>
  <div>
    <!-- Estrutura do card aqui -->
  </div>
</template>

<script setup lang="ts">
// Defina as props
</script>`,
    hints: [
      'Use defineProps() para definir as props',
      'Adicione classes como "bg-white shadow-lg rounded-lg p-6"',
      'Use slots para conteúdo flexível: <slot />'
    ],
    solution: `<!-- app/components/Card.vue -->
<template>
  <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
    <h3 class="text-2xl font-bold mb-3">{{ title }}</h3>
    <p class="text-gray-600">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<!-- Usar em uma página -->
<template>
  <div class="grid grid-cols-3 gap-4 p-8">
    <Card title="Card 1" content="Conteúdo do primeiro card" />
    <Card title="Card 2" content="Conteúdo do segundo card" />
    <Card title="Card 3" content="Conteúdo do terceiro card" />
  </div>
</template>`,
    completed: false
  },
  {
    icon: '🔄',
    title: 'Buscar Dados de uma API',
    description: 'Use useFetch para buscar dados de uma API e exibi-los na página.',
    difficulty: 'Intermediário',
    time: '20 min',
    objective: 'Criar uma página que busca e exibe uma lista de posts de uma API',
    steps: [
      'Crie uma API em server/api/posts.ts que retorna um array de posts',
      'Crie uma página posts/index.vue',
      'Use useFetch para buscar os dados',
      'Exiba os posts em uma lista',
      'Adicione um loading state'
    ],
    starterCode: `// server/api/posts.ts
export default defineEventHandler(() => {
  return [
    { id: 1, title: 'Post 1', content: 'Conteúdo 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo 2' }
  ]
})

<!-- app/pages/posts/index.vue -->
<template>
  <div>
    <!-- Exibir posts aqui -->
  </div>
</template>

<script setup lang="ts">
// Buscar dados aqui
</script>`,
    hints: [
      'Use const { data, pending } = await useFetch("/api/posts")',
      'Mostre um loading spinner quando pending for true',
      'Use v-for para iterar sobre os posts'
    ],
    solution: `// server/api/posts.ts
export default defineEventHandler(() => {
  return [
    { id: 1, title: 'Introdução ao Nuxt', content: 'Nuxt é incrível!' },
    { id: 2, title: 'Componentes Vue', content: 'Reutilize seu código' },
    { id: 3, title: 'API Routes', content: 'Backend no Nuxt' }
  ]
})

<!-- app/pages/posts/index.vue -->
<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    
    <div v-if="pending" class="text-center">
      <div class="animate-spin text-4xl">⏳</div>
      <p>Carregando...</p>
    </div>
    
    <div v-else class="space-y-4">
      <div v-for="post in data" :key="post.id"
           class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, pending } = await useFetch('/api/posts')
</script>`,
    completed: false
  },
  {
    icon: '🎯',
    title: 'Rota Dinâmica',
    description: 'Crie uma página de detalhes que usa parâmetros dinâmicos na URL.',
    difficulty: 'Intermediário',
    time: '25 min',
    objective: 'Criar uma página de detalhes de post acessível em /posts/:id',
    steps: [
      'Crie o arquivo [id].vue em app/pages/posts/',
      'Use useRoute() para pegar o parâmetro id',
      'Crie uma API em server/api/posts/[id].ts',
      'Busque o post específico usando o id',
      'Exiba os detalhes do post',
      'Adicione um botão para voltar'
    ],
    starterCode: `// server/api/posts/[id].ts
export default defineEventHandler((event) => {
  const id = event.context.params.id
  // Buscar post por id
})

<!-- app/pages/posts/[id].vue -->
<template>
  <div>
    <!-- Detalhes do post -->
  </div>
</template>

<script setup lang="ts">
// Pegar id da rota e buscar post
</script>`,
    hints: [
      'Use const route = useRoute() e route.params.id',
      'Use parseInt() para converter o id para número',
      'Use navigateTo() ou <NuxtLink> para voltar'
    ],
    solution: `// server/api/posts/[id].ts
const posts = [
  { id: 1, title: 'Introdução ao Nuxt', content: 'Nuxt é incrível!', author: 'João' },
  { id: 2, title: 'Componentes Vue', content: 'Reutilize seu código', author: 'Maria' },
  { id: 3, title: 'API Routes', content: 'Backend no Nuxt', author: 'Pedro' }
]

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params.id)
  const post = posts.find(p => p.id === id)
  
  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post não encontrado'
    })
  }
  
  return post
})

<!-- app/pages/posts/[id].vue -->
<template>
  <div class="container mx-auto p-8 max-w-3xl">
    <NuxtLink to="/posts" 
              class="text-blue-600 hover:underline mb-6 inline-block">
      ← Voltar para posts
    </NuxtLink>
    
    <div v-if="pending" class="text-center">
      <div class="animate-spin text-4xl">⏳</div>
    </div>
    
    <article v-else class="bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4">{{ data.title }}</h1>
      <p class="text-gray-500 mb-6">Por {{ data.author }}</p>
      <p class="text-lg text-gray-700">{{ data.content }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data, pending } = await useFetch(\`/api/posts/\${route.params.id}\`)
</script>`,
    completed: false
  },
  {
    icon: '📝',
    title: 'Formulário com Reatividade',
    description: 'Crie um formulário interativo que valida dados em tempo real.',
    difficulty: 'Intermediário',
    time: '30 min',
    objective: 'Criar um formulário de contato com validação e feedback visual',
    steps: [
      'Crie uma página contato.vue',
      'Adicione campos para nome, email e mensagem',
      'Use ref() para criar variáveis reativas',
      'Adicione validação em tempo real',
      'Mostre mensagens de erro',
      'Simule o envio do formulário'
    ],
    hints: [
      'Use v-model para bind dos inputs',
      'Use computed() para validações',
      'Adicione classes condicionais com :class',
      'Use @submit.prevent para prevenir reload'
    ],
    solution: `<!-- app/pages/contato.vue -->
<template>
  <div class="container mx-auto p-8 max-w-2xl">
    <h1 class="text-3xl font-bold mb-6">Contato</h1>
    
    <form @submit.prevent="enviar" class="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <!-- Nome -->
      <div>
        <label class="block font-semibold mb-2">Nome</label>
        <input v-model="form.nome" 
               type="text"
               class="w-full px-4 py-2 border rounded-lg"
               :class="erros.nome ? 'border-red-500' : 'border-gray-300'">
        <p v-if="erros.nome" class="text-red-500 text-sm mt-1">{{ erros.nome }}</p>
      </div>
      
      <!-- Email -->
      <div>
        <label class="block font-semibold mb-2">Email</label>
        <input v-model="form.email" 
               type="email"
               class="w-full px-4 py-2 border rounded-lg"
               :class="erros.email ? 'border-red-500' : 'border-gray-300'">
        <p v-if="erros.email" class="text-red-500 text-sm mt-1">{{ erros.email }}</p>
      </div>
      
      <!-- Mensagem -->
      <div>
        <label class="block font-semibold mb-2">Mensagem</label>
        <textarea v-model="form.mensagem" 
                  rows="4"
                  class="w-full px-4 py-2 border rounded-lg"
                  :class="erros.mensagem ? 'border-red-500' : 'border-gray-300'"></textarea>
        <p v-if="erros.mensagem" class="text-red-500 text-sm mt-1">{{ erros.mensagem }}</p>
      </div>
      
      <!-- Sucesso -->
      <div v-if="sucesso" class="p-4 bg-green-100 text-green-700 rounded-lg">
        Mensagem enviada com sucesso!
      </div>
      
      <!-- Botão -->
      <button type="submit" 
              :disabled="enviando"
              class="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50">
        {{ enviando ? 'Enviando...' : 'Enviar Mensagem' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  nome: '',
  email: '',
  mensagem: ''
})

const erros = ref({
  nome: '',
  email: '',
  mensagem: ''
})

const enviando = ref(false)
const sucesso = ref(false)

const validar = () => {
  erros.value = { nome: '', email: '', mensagem: '' }
  let valido = true
  
  if (!form.value.nome) {
    erros.value.nome = 'Nome é obrigatório'
    valido = false
  }
  
  if (!form.value.email) {
    erros.value.email = 'Email é obrigatório'
    valido = false
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    erros.value.email = 'Email inválido'
    valido = false
  }
  
  if (!form.value.mensagem) {
    erros.value.mensagem = 'Mensagem é obrigatória'
    valido = false
  }
  
  return valido
}

const enviar = async () => {
  if (!validar()) return
  
  enviando.value = true
  
  // Simula envio
  await new Promise(r => setTimeout(r, 2000))
  
  sucesso.value = true
  form.value = { nome: '', email: '', mensagem: '' }
  enviando.value = false
  
  setTimeout(() => {
    sucesso.value = false
  }, 3000)
}
</script>`,
    completed: false
  }
])

const openExercises = ref<Record<number, boolean>>({})
const showSolutions = ref<Record<number, boolean>>({})

const completedCount = computed(() => 
  exercises.value.filter(e => e.completed).length
)

const progressPercentage = computed(() => 
  Math.round((completedCount.value / exercises.value.length) * 100)
)

const allCompleted = computed(() => 
  completedCount.value === exercises.value.length
)

const toggleExercise = (index: number) => {
  openExercises.value[index] = !openExercises.value[index]
}

const toggleSolution = (index: number) => {
  showSolutions.value[index] = !showSolutions.value[index]
}

const markComplete = (index: number) => {
  exercises.value[index].completed = true
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Iniciante': return 'bg-green-50'
    case 'Intermediário': return 'bg-yellow-50'
    case 'Avançado': return 'bg-red-50'
    default: return 'bg-gray-50'
  }
}

const getDifficultyBadge = (difficulty: string) => {
  switch (difficulty) {
    case 'Iniciante': return 'bg-green-200 text-green-800'
    case 'Intermediário': return 'bg-yellow-200 text-yellow-800'
    case 'Avançado': return 'bg-red-200 text-red-800'
    default: return 'bg-gray-200 text-gray-800'
  }
}
</script>
