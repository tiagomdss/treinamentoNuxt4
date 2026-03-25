<template>
  <div class="relative min-h-screen bg-[#F8FAFC] dark:bg-[#020420] overflow-hidden transition-colors duration-500 font-sans selection:bg-[#00DC82] selection:text-white dark:selection:text-emerald-900">
    <!-- Cosmic Background Blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
      <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[100px] animate-[float_25s_infinite_ease-in-out_reverse]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-5xl mx-auto">
        
        <!-- Hub Selection Screen -->
        <div v-if="!mode" class="text-center animate-fade-in">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-indigo-400/10 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm">
            <span class="text-xl">🛠️</span>
            <span class="text-indigo-700 dark:text-indigo-400 font-semibold text-sm tracking-wide uppercase">Ambiente de Testes</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Hub de <span class="bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">Simulação</span></h1>
          <p class="text-xl text-slate-700 dark:text-slate-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Escolha sua forma de treinamento. Prefere percorrer uma manutenção estrutural do sistema legado ou testar seu conhecimento num circuito contra o tempo?
          </p>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Simulator Card -->
            <button 
              @click="mode = 'simulator'"
              class="group relative bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon name="lucide:monitor-play" class="w-24 h-24 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 mb-8 group-hover:scale-110 transition-transform">
                  <Icon name="lucide:layout-template" class="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Simulador NTL</h2>
                <p class="text-slate-700 dark:text-slate-400 font-light mb-8">Treinamento prático. Veja as telas reais, fluxos de CRUD, camadas de login e banco como num chamado real do sistema legado.</p>
                <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                  Acessar Missões
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </button>

            <!-- PHP Normal Quiz Card -->
            <button 
              @click="mode = 'quiz-php'"
              class="group relative bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon name="vscode-icons:file-type-php" class="w-24 h-24" />
              </div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 mb-8 group-hover:scale-110 transition-transform">
                  <Icon name="heroicons:academic-cap" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Circuito PHP</h2>
                <p class="text-slate-700 dark:text-slate-400 font-light mb-8">Teste sua teoria bruta sobre a estrutura base com perguntas objetivas guiadas.</p>
                <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                  Iniciar Simulado PHP
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </button>

            <!-- Nuxt Normal Quiz Card -->
            <button 
              @click="mode = 'quiz-nuxt'"
              class="group relative bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left overflow-hidden"
            >
              <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon name="vscode-icons:file-type-nuxt" class="w-24 h-24" />
              </div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-[#00DC82]/10 rounded-2xl flex items-center justify-center border border-[#00DC82]/20 mb-8 group-hover:scale-110 transition-transform">
                  <Icon name="heroicons:academic-cap" class="w-8 h-8 text-emerald-600 dark:text-[#00DC82]" />
                </div>
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Circuito Nuxt</h2>
                <p class="text-slate-700 dark:text-slate-400 font-light mb-8">Prova final de refatoração teórica. Responda num sprint com tempo os paradigmas da stack Vue atual.</p>
                <div class="flex items-center gap-2 text-emerald-600 dark:text-[#00DC82] font-bold">
                  Iniciar Simulado Nuxt
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </button>

            <!-- Hacker Game Card (Coming Soon) -->
            <div 
              class="group relative bg-slate-900/40 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500 opacity-60 grayscale cursor-not-allowed overflow-hidden"
            >
              <div class="absolute top-6 right-6 z-20">
                <span class="px-4 py-1.5 bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-[0.2em] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  Em Breve
                </span>
              </div>
              <div class="absolute top-0 right-0 p-8 opacity-10">
                <Icon name="heroicons:computer-desktop" class="w-24 h-24 text-emerald-500" />
              </div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-emerald-500/5 rounded-2xl flex items-center justify-center border border-emerald-500/10 mb-8">
                  <Icon name="heroicons:terminal" class="w-8 h-8 text-emerald-500/40" />
                </div>
                <h2 class="text-3xl font-bold text-white/40 mb-4 font-mono tracking-wider italic">MODO_HACKER</h2>
                <p class="text-slate-500 font-light mb-8 font-mono text-sm leading-relaxed">Prepare sua interface neural. O desafio de segurança definitivo está em desenvolvimento.</p>
                <div class="flex items-center gap-2 text-emerald-500/20 font-bold font-mono uppercase tracking-widest text-xs">
                  Aguardando Sincronização...
                  <Icon name="heroicons:lock-closed" class="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Simulator Core (Mission Viewer from NTL) -->
        <div v-else-if="mode === 'simulator'" class="animate-fade-in">
          <button @click="mode = null" class="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold">
            <Icon name="heroicons:arrow-left" class="w-5 h-5" /> Voltar ao Hub
          </button>
          <SimulatorStudio />
        </div>

        <!-- Quiz Flow (Both PHP and Nuxt uses this) -->
        <div v-else-if="mode === 'quiz-nuxt' || mode === 'quiz-php'" class="max-w-4xl mx-auto">
          
          <!-- Start Quiz Screen -->
          <div v-if="!quizStarted" class="text-center animate-fade-in">
            <h1 class="text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">🎓 Simulado {{ mode === 'quiz-nuxt' ? 'Nuxt 4' : 'PHP' }}</h1>
            <p class="text-xl text-slate-700 dark:text-slate-400 mb-12 font-light">
              Teste seus conhecimentos técnicos nesta linha do tempo para medir capacidade. Não permita o relógio zerar!
            </p>
            
            <div class="bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl shadow-glass">
              <div class="grid md:grid-cols-3 gap-8 mb-10">
                <div class="text-center">
                  <div class="text-4xl font-bold text-slate-900 dark:text-white mb-2">{{ activeQuestions.length }}</div>
                  <div class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold">Questões</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-slate-900 dark:text-white mb-2">10</div>
                  <div class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold">Minutos</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-slate-900 dark:text-white mb-2">70%</div>
                  <div class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold">Aprovação</div>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  @click="startQuiz"
                  class="px-10 py-5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:-translate-y-1"
                >
                  Começar Circuito Completo
                </button>
                <button 
                  @click="mode = null"
                  class="px-10 py-5 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-lg rounded-2xl backdrop-blur-xl hover:bg-white/80 transition-all duration-300"
                >
                  Voltar ao Hub
                </button>
              </div>
            </div>
          </div>

          <!-- Quiz Question / Progress Screen -->
          <div v-else-if="!quizFinished" class="space-y-8 animate-fade-in">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-slate-900 dark:text-white">Questão {{ currentQuestion + 1 }}</span>
                <span class="text-slate-500 dark:text-slate-400"> de {{ activeQuestions.length }}</span>
              </div>
              <div class="px-4 py-2 bg-white/60 dark:bg-white/10 rounded-full font-mono font-bold text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-white/10 flex items-center gap-2 shadow-sm">
                <Icon name="heroicons:clock" class="w-5 h-5" />
                {{ formatTime(timeRemaining) }}
              </div>
            </div>

            <div class="bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl shadow-glass">
              <span class="text-xs uppercase font-bold tracking-widest text-indigo-500 mb-2 block">{{ activeCurrentQuestion?.category }}</span>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-relaxed">
                {{ activeCurrentQuestion?.prompt }}
              </h2>
              <p class="text-slate-600 dark:text-slate-400 mb-8 italic">{{ activeCurrentQuestion?.context }}</p>
              
              <div class="space-y-4">
                <button
                  v-for="(option, index) in activeCurrentQuestion?.options"
                  :key="index"
                  @click="selectAnswer(index)"
                  :class="[
                    'w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group flex items-center gap-4',
                    selectedAnswer === index
                      ? 'bg-indigo-500/10 border-indigo-500 text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-white/5 border-transparent text-slate-700 dark:text-slate-300 hover:border-indigo-500/30 hover:bg-white/80 dark:hover:bg-white/10'
                  ]"
                >
                  <div :class="[
                    'w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors',
                    selectedAnswer === index ? 'bg-indigo-500 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-500'
                  ]">
                    {{ String.fromCharCode(65 + index) }}
                  </div>
                  {{ option }}
                </button>
              </div>

              <!-- Answer Feedback & Proceed Button Box -->
              <transition name="fade">
                <div v-if="localAnsweredStatus" class="mt-8 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-900 dark:text-indigo-100 flex items-start gap-4 animate-fade-in">
                  <Icon name="lucide:lightbulb" class="w-6 h-6 mt-1 text-indigo-500 shrink-0" />
                  <div>
                    <h4 class="font-bold mb-1">Explicação Curta:</h4>
                    <p class="text-sm opacity-90 leading-relaxed">{{ activeCurrentQuestion?.explanation }}</p>
                  </div>
                </div>
              </transition>

              <div class="mt-8 flex justify-between items-center">
                <button @click="abandonConfirm" class="text-slate-400 hover:text-red-500 transition-colors font-medium flex items-center gap-2">
                   <Icon name="heroicons:x-mark" class="w-5 h-5" /> Abandonar
                </button>

                <div class="flex gap-4">
                  <!-- Two step: Verify then Next -->
                  <button
                    v-if="!localAnsweredStatus"
                    @click="verifyAnswerLocal"
                    :disabled="selectedAnswer === null"
                    :class="[
                      'px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2',
                      selectedAnswer !== null
                        ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-200 dark:bg-white/5 text-slate-400 cursor-not-allowed'
                    ]"
                  >
                    Confirmar Resposta
                    <Icon name="heroicons:check-circle" class="w-5 h-5" />
                  </button>

                  <button
                    v-else
                    @click="nextQuestion"
                    class="px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                  >
                    {{ currentQuestion === activeQuestions.length - 1 ? 'Montar Relatório' : 'Próxima Questão' }}
                    <Icon :name="currentQuestion === activeQuestions.length - 1 ? 'heroicons:document-chart-bar' : 'heroicons:arrow-right'" class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Dots Track -->
            <div class="flex gap-2 justify-center">
              <div
                v-for="(_, index) in activeQuestions"
                :key="index"
                :class="[
                  'h-1.5 rounded-full transition-all duration-500',
                  index === currentQuestion ? 'bg-indigo-500 w-12' : answers[index] !== null ? 'bg-indigo-300 dark:bg-indigo-900 w-4' : 'bg-slate-200 dark:bg-white/10 w-4'
                ]"
              />
            </div>
          </div>

          <!-- Quiz Results Screen -->
          <div v-else class="text-center animate-fade-in">
            <div class="mb-12">
              <div class="text-8xl mb-6 transform hover:scale-110 transition-transform cursor-default inline-block">
                {{ score >= 70 ? '🎉' : '📚' }}
              </div>
              <h2 class="text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {{ score >= 70 ? 'Circuito Concluído!' : 'Faltou um pouco...' }}
              </h2>
              <p class="text-xl text-slate-600 dark:text-slate-400">
                Você acertou {{ correctAnswers }} de {{ activeQuestions.length }} questões técnicas do {{ mode === 'quiz-php' ? 'PHP Base' : 'Nuxt 4' }}.
              </p>
            </div>

            <div class="bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 rounded-[2.5rem] p-12 backdrop-blur-xl shadow-glass mb-12">
              <div class="text-7xl font-bold text-slate-900 dark:text-white mb-2">{{ score }}%</div>
              <div class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold mb-8">Score de Performance</div>
              
              <div class="w-full bg-slate-200 dark:bg-white/10 h-3 rounded-full overflow-hidden mb-8 shadow-inner">
                <div
                  class="bg-gradient-to-r from-emerald-400 to-indigo-500 h-full transition-all duration-1000 ease-out"
                  :style="{ width: `${score}%` }"
                />
              </div>

              <p class="text-slate-700 dark:text-slate-300 text-lg font-medium">
                {{ score >= 70 
                  ? 'Excelente raciocínio analítico. Lembre-se desta base teórica para acelerar as entregas no front e backend. 🚀' 
                  : 'Sistemas exigem tempo. Continue rodando a prática e você absorverá todas as lógicas desta arquitetura. 💪' 
                }}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                @click="resetQuiz"
                class="px-10 py-5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg"
              >
                Tentar Rodada Novamente
              </button>
              <button 
                @click="mode = null; resetQuiz()"
                class="px-10 py-5 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-2xl backdrop-blur-xl hover:bg-white/80 transition-all duration-300"
              >
                Voltar ao Hub Central
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Beautiful Exit Confirmation Modal -->
    <client-only>
      <div v-if="showExitModal" class="fixed inset-0 z-[100] bg-slate-950/20 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
        <div class="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-10 rounded-[2.5rem] text-center shadow-2xl animate-scale-in">
           <div class="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Icon name="heroicons:exclamation-triangle" class="w-10 h-10 text-red-500" />
           </div>
           <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Abandonar Simulado?</h2>
           <p class="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10 text-lg">
             Se você sair do circuito agora, a memória da sua contagem e pontuação será perdida. Abandonar missão?
           </p>
           <div class="grid grid-cols-2 gap-4">
              <button 
                @click="cancelExit"
                class="py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10"
              >
                Continuar Prova
              </button>
              <button 
                @click="confirmExit"
                class="py-4 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
              >
                Abandonar
              </button>
           </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { gameQuestions, nuxtQuestions } from '~/data/training'
useSeoMeta({ title: 'Jogos e Hub de Simulação | Treinamento Neeo' })

const mode = ref<'simulator' | 'quiz-nuxt' | 'quiz-php' | 'hacker' | null>(null)

// Quiz State
const quizStarted = ref(false)
const quizFinished = ref(false)
const currentQuestion = ref(0)
const selectedAnswer = ref<number | null>(null)
const answers = ref<(number | null)[]>([])
const timeRemaining = ref(600) // 10 minutes
const timerInterval = ref<any>(null)
const localAnsweredStatus = ref(false)

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Select active question bank based on mode and shuffle 10 questions
const activeQuestions = computed(() => {
  if (mode.value === 'quiz-nuxt') return shuffleArray(nuxtQuestions).slice(0, 10)
  if (mode.value === 'quiz-php') return shuffleArray(gameQuestions).slice(0, 10)
  return []
})

const activeCurrentQuestion = computed(() => {
  return activeQuestions.value[currentQuestion.value]
})

// Navigation Guard State
const showExitModal = ref(false)
let pendingNavigation: ((value: boolean) => void) | null = null

function resolveNavigation(confirmed: boolean) {
  if (pendingNavigation) {
    pendingNavigation(confirmed)
    pendingNavigation = null
  }
}

function confirmExit() {
  quizStarted.value = false // Skip guard
  showExitModal.value = false
  resolveNavigation(true)
  if (!pendingNavigation) { // if the user just clicked abandon directly
    mode.value = null
    resetQuiz() 
  }
}

function abandonConfirm() {
  showExitModal.value = true
}

function cancelExit() {
  showExitModal.value = false
  resolveNavigation(false)
}

const correctAnswers = computed(() => {
  return answers.value.filter((answer, index) => {
    // Determine the original correct index based on the answer text inside our data models.
    const q = activeQuestions.value[index]
    if (!q) return false
    const expectedIndex = q.options.indexOf(q.answer)
    return answer === expectedIndex
  }).length
})

const score = computed(() => {
  if (activeQuestions.value.length === 0) return 0
  return Math.round((correctAnswers.value / activeQuestions.value.length) * 100)
})

function startQuiz() {
  quizStarted.value = true
  answers.value = new Array(activeQuestions.value.length).fill(null)
  startTimer()
}

function startTimer() {
  if (timerInterval.value) clearInterval(timerInterval.value)
  timerInterval.value = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else {
      finishQuiz()
    }
  }, 1000)
}

function selectAnswer(index: number) {
  if (localAnsweredStatus.value) return // Block change after confirm
  selectedAnswer.value = index
}

// Emulates clicking Verify
function verifyAnswerLocal() {
   if (selectedAnswer.value !== null) {
     answers.value[currentQuestion.value] = selectedAnswer.value
     localAnsweredStatus.value = true
   }
}

function nextQuestion() {
   localAnsweredStatus.value = false
   if (currentQuestion.value < activeQuestions.value.length - 1) {
     currentQuestion.value++
     selectedAnswer.value = answers.value[currentQuestion.value] ?? null
   } else {
     finishQuiz()
   }
}

function finishQuiz() {
  quizFinished.value = true
  localAnsweredStatus.value = false
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
}

function resetQuiz() {
  quizStarted.value = false
  quizFinished.value = false
  currentQuestion.value = 0
  selectedAnswer.value = null
  localAnsweredStatus.value = false
  answers.value = []
  timeRemaining.value = 600
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
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
  window.removeEventListener('beforeunload', handleBeforeUnload)
})

const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  if (quizStarted.value && !quizFinished.value) {
    e.preventDefault()
    e.returnValue = ''
  }
}

onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onBeforeRouteLeave(async (to, from, next) => {
  if (quizStarted.value && !quizFinished.value) {
    showExitModal.value = true
    const confirmed = await new Promise<boolean>((resolve) => {
      pendingNavigation = resolve
    })
    
    if (confirmed) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-in {
  animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.shadow-glass {
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.07),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
</style>
