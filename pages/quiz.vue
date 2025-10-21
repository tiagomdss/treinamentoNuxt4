<template>
  <div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-3xl mx-auto">
        <div v-if="!quizStarted" class="text-center">
          <h1 class="text-5xl font-bold text-white mb-6">🎓 Quiz Final</h1>
          <p class="text-xl text-purple-200 mb-12">
            Teste seus conhecimentos sobre Nuxt 4 e veja o quanto você aprendeu!
          </p>
          
          <div class="bg-purple-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 mb-8">
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-white mb-2">{{ questions.length }}</div>
                <div class="text-purple-200">Questões</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-white mb-2">10</div>
                <div class="text-purple-200">Minutos</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-white mb-2">70%</div>
                <div class="text-purple-200">Para Passar</div>
              </div>
            </div>
            
            <button 
              @click="startQuiz"
              class="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-lg rounded-lg transition-all shadow-lg"
            >
              Começar Quiz
            </button>
          </div>
        </div>

        <div v-else-if="!quizFinished" class="space-y-6">
          <div class="flex items-center justify-between mb-8">
            <div class="text-white">
              <span class="text-2xl font-bold">Questão {{ currentQuestion + 1 }}</span>
              <span class="text-purple-300"> de {{ questions.length }}</span>
            </div>
            <div class="text-white text-lg">
              ⏱️ {{ formatTime(timeRemaining) }}
            </div>
          </div>

          <div class="bg-purple-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8">
            <h2 class="text-2xl font-bold text-white mb-6">
              {{ questions[currentQuestion]?.question }}
            </h2>
            
            <div class="space-y-3">
              <button
                v-for="(option, index) in questions[currentQuestion]?.options"
                :key="index"
                @click="selectAnswer(index)"
                :class="[
                  'w-full text-left p-4 rounded-lg border-2 transition-all',
                  selectedAnswer === index
                    ? 'bg-purple-600 border-purple-400 text-white'
                    : 'bg-purple-950/50 border-purple-500/30 text-purple-100 hover:border-purple-400/50'
                ]"
              >
                <span class="font-semibold">{{ String.fromCharCode(65 + index) }}.</span> {{ option }}
              </button>
            </div>

            <button
              @click="nextQuestion"
              :disabled="selectedAnswer === null"
              :class="[
                'mt-6 px-6 py-3 rounded-lg font-semibold transition-all',
                selectedAnswer !== null
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'
                  : 'bg-purple-800/50 text-purple-400 cursor-not-allowed'
              ]"
            >
              {{ currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima' }}
            </button>
          </div>

          <div class="flex gap-2 justify-center">
            <div
              v-for="(_, index) in questions"
              :key="index"
              :class="[
                'w-3 h-3 rounded-full transition-all',
                index === currentQuestion
                  ? 'bg-purple-400 w-8'
                  : answers[index] !== null
                  ? 'bg-purple-600'
                  : 'bg-purple-800'
              ]"
            />
          </div>
        </div>

        <div v-else class="text-center">
          <div class="mb-8">
            <div class="text-8xl mb-4">
              {{ score >= 70 ? '🎉' : '😢' }}
            </div>
            <h2 class="text-4xl font-bold text-white mb-4">
              {{ score >= 70 ? 'Parabéns!' : 'Quase lá!' }}
            </h2>
            <p class="text-xl text-purple-200">
              Você acertou {{ correctAnswers }} de {{ questions.length }} questões
            </p>
          </div>

          <div class="bg-purple-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 mb-8">
            <div class="text-6xl font-bold text-white mb-2">{{ score }}%</div>
            <div class="text-purple-200 mb-4">Sua pontuação</div>
            
            <div class="w-full bg-purple-950/50 rounded-full h-4 mb-6">
              <div
                class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full transition-all duration-1000"
                :style="{ width: `${score}%` }"
              />
            </div>

            <p class="text-purple-200">
              {{ score >= 70 
                ? 'Você dominou o Nuxt 4! Continue assim! 🚀' 
                : 'Continue estudando e tente novamente! 📚' 
              }}
            </p>
          </div>

          <div class="flex gap-4 justify-center">
            <button
              @click="resetQuiz"
              class="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all"
            >
              Tentar Novamente
            </button>
            <NuxtLink
              to="/"
              class="px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all"
            >
              Voltar ao Início
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const quizStarted = ref(false)
const quizFinished = ref(false)
const currentQuestion = ref(0)
const selectedAnswer = ref<number | null>(null)
const answers = ref<(number | null)[]>([])
const timeRemaining = ref(600) // 10 minutes in seconds
const timerInterval = ref<NodeJS.Timeout | null>(null)

const questions = [
  {
    question: 'Qual engine de performance o Nuxt 4 utiliza?',
    options: [
      'Express.js',
      'Nitro 2',
      'Fastify',
      'Koa'
    ],
    correct: 1
  },
  {
    question: 'Qual pasta é usada para criar rotas automaticamente no Nuxt 4?',
    options: ['routes/', 'pages/', 'views/', 'router/'],
    correct: 1
  },
  {
    question: 'Como criar uma rota dinâmica no Nuxt 4?',
    options: [
      'pages/user-[id].vue',
      'pages/users/[id].vue',
      'pages/users/:id.vue',
      'pages/users/dynamic.vue'
    ],
    correct: 1
  },
  {
    question: 'O que são auto-imports no Nuxt 4?',
    options: [
      'Imports automáticos apenas de imagens',
      'Imports automáticos de componentes, composables e APIs do Vue/Nuxt',
      'Imports automáticos apenas de CSS',
      'Imports automáticos de bibliotecas npm'
    ],
    correct: 1
  },
  {
    question: 'Qual composable é usado para buscar dados de APIs no Nuxt 4?',
    options: ['fetch()', 'axios()', 'useFetch() ou useAsyncData()', 'getData()'],
    correct: 2
  },
  {
    question: 'Onde ficam os Server Components no Nuxt 4?',
    options: [
      'components/*.server.vue',
      'server/components/',
      'api/components/',
      'backend/components/'
    ],
    correct: 0
  },
  {
    question: 'Qual é a localização dos Server Routes (API) no Nuxt 4?',
    options: [
      'api/',
      'server/api/',
      'backend/api/',
      'routes/api/'
    ],
    correct: 1
  },
  {
    question: 'Como criar um composable reutilizável no Nuxt 4?',
    options: [
      'Criar arquivo em composables/ com prefixo "use"',
      'Criar arquivo em utils/ com prefixo "get"',
      'Criar arquivo em helpers/ com prefixo "make"',
      'Criar arquivo em services/ com prefixo "do"'
    ],
    correct: 0
  },
  {
    question: 'Qual composable é usado para gerenciar meta tags e SEO?',
    options: ['useMeta()', 'useHead() e useSeoMeta()', 'useSeo()', 'useTitle()'],
    correct: 1
  },
  {
    question: 'Como definir um layout customizado em uma página?',
    options: [
      'useLayout("nome")',
      'setLayout("nome")',
      'definePageMeta({ layout: "nome" })',
      'layout: "nome" no script'
    ],
    correct: 2
  }
]

const correctAnswers = computed(() => {
  return answers.value.filter((answer, index) => answer === questions[index]?.correct).length
})

const score = computed(() => {
  return Math.round((correctAnswers.value / questions.length) * 100)
})

function startQuiz() {
  quizStarted.value = true
  answers.value = new Array(questions.length).fill(null)
  startTimer()
}

function startTimer() {
  timerInterval.value = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else {
      finishQuiz()
    }
  }, 1000)
}

function selectAnswer(index: number) {
  selectedAnswer.value = index
}

function nextQuestion() {
  if (selectedAnswer.value !== null) {
    answers.value[currentQuestion.value] = selectedAnswer.value
    
    if (currentQuestion.value < questions.length - 1) {
      currentQuestion.value++
      selectedAnswer.value = answers.value[currentQuestion.value]
    } else {
      finishQuiz()
    }
  }
}

function finishQuiz() {
  quizFinished.value = true
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
  }
}

function resetQuiz() {
  quizStarted.value = false
  quizFinished.value = false
  currentQuestion.value = 0
  selectedAnswer.value = null
  answers.value = []
  timeRemaining.value = 600
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

onUnmounted(() => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
  }
})

useHead({
  title: 'Quiz - Aprenda Nuxt 4',
  meta: [
    { name: 'description', content: 'Teste seus conhecimentos sobre Nuxt 4' }
  ]
})
</script>
