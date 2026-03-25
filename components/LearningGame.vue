<script setup lang="ts">
import type { GameQuestion } from '~/data/training'

const props = defineProps<{
  questions: GameQuestion[],
  title: string,
  description: string
}>()

const fallbackQuestion = computed(() => props.questions[props.questions.length - 1]!)
const currentIndex = ref(0)
const selectedOption = ref<string | null>(null)
const answered = ref(false)
const score = ref(0)
const streak = ref(0)

const totalQuestions = computed(() => props.questions.length)

const currentQuestion = computed(() => props.questions[currentIndex.value] ?? fallbackQuestion.value)
const progress = computed(() => Math.round((currentIndex.value / totalQuestions.value) * 100))
const isFinished = computed(() => currentIndex.value >= totalQuestions.value)

const rank = computed(() => {
  if (score.value >= 760) {
    return 'Arquiteto de fluxo'
  }

  if (score.value >= 520) {
    return 'Guardiao da camada de negocio'
  }

  if (score.value >= 320) {
    return 'Mapeador de modulos'
  }

  return 'Aprendiz em rota'
})

function answerQuestion(option: string) {
  if (answered.value || isFinished.value) {
    return
  }

  selectedOption.value = option
  answered.value = true

  if (option === currentQuestion.value.answer) {
    streak.value += 1
    score.value += 100 + (streak.value - 1) * 20
  } else {
    streak.value = 0
  }
}

function nextQuestion() {
  if (!answered.value) {
    return
  }

  currentIndex.value += 1
  selectedOption.value = null
  answered.value = false
}

function restartGame() {
  currentIndex.value = 0
  selectedOption.value = null
  answered.value = false
  score.value = 0
  streak.value = 0
}

function optionClass(option: string) {
  if (!answered.value) {
    return 'border-slate-200 bg-white/70 text-slate-700 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200'
  }

  if (option === currentQuestion.value.answer) {
    return 'border-emerald-400 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
  }

  if (option === selectedOption.value) {
    return 'border-rose-400 bg-rose-500/12 text-rose-700 dark:text-rose-300'
  }

  return 'border-slate-200/70 bg-slate-100/70 text-slate-400 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-500'
}
</script>

<template>
  <section id="jogo" class="space-y-6">
    <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div class="space-y-2">
        <span class="section-kicker">Jogo</span>
        <h2 class="section-heading max-w-3xl">
          {{ props.title }}
        </h2>
        <p class="section-copy max-w-3xl">
          {{ props.description }}
        </p>
      </div>

      <div class="grid grid-cols-3 gap-3 md:min-w-[24rem]">
        <div class="surface-card p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            score
          </p>
          <p class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {{ score }}
          </p>
        </div>
        <div class="surface-card p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            streak
          </p>
          <p class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {{ streak }}
          </p>
        </div>
        <div class="surface-card p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            ranking
          </p>
          <p class="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
            {{ rank }}
          </p>
        </div>
      </div>
    </div>

    <div class="surface-card p-6">
      <template v-if="!isFinished">
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                {{ currentQuestion.category }}
              </p>
              <h3 class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {{ currentQuestion.prompt }}
              </h3>
            </div>

            <div class="min-w-52">
              <div class="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                <span>rodada</span>
                <span>{{ currentIndex + 1 }}/{{ totalQuestions }}</span>
              </div>
              <div class="h-2 rounded-full bg-slate-200/80 dark:bg-slate-800">
                <div
                  class="h-2 rounded-full bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 transition-all"
                  :style="{ width: `${progress}%` }"
                />
              </div>
            </div>
          </div>

          <div class="rounded-[1.5rem] border border-slate-200/80 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-950/50">
            <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
              {{ currentQuestion.context }}
            </p>
          </div>

          <div class="grid gap-3 md:grid-cols-2">
            <button
              v-for="option in currentQuestion.options"
              :key="option"
              type="button"
              class="rounded-[1.4rem] border px-5 py-4 text-left text-sm font-semibold transition"
              :class="optionClass(option)"
              @click="answerQuestion(option)"
            >
              {{ option }}
            </button>
          </div>

          <div
            v-if="answered"
            class="rounded-[1.5rem] border p-5"
            :class="selectedOption === currentQuestion.answer
              ? 'border-emerald-300/60 bg-emerald-500/10'
              : 'border-amber-300/60 bg-amber-500/10'"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.24em]"
              :class="selectedOption === currentQuestion.answer
                ? 'text-emerald-700 dark:text-emerald-300'
                : 'text-amber-700 dark:text-amber-300'"
            >
              {{ selectedOption === currentQuestion.answer ? 'Acerto tecnico' : 'Boa tentativa' }}
            </p>
            <p class="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
              {{ currentQuestion.explanation }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <UButton
              v-if="answered && currentIndex < totalQuestions - 1"
              label="Proxima rodada"
              icon="i-lucide-arrow-right"
              @click="nextQuestion"
            />

            <UButton
              v-else-if="answered && currentIndex === totalQuestions - 1"
              label="Fechar jogo"
              icon="i-lucide-flag"
              @click="nextQuestion"
            />

            <p class="text-sm text-slate-500 dark:text-slate-400">
              Quanto mais acertos seguidos, maior o bonus de score.
            </p>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="space-y-4">
            <span class="section-kicker">Resultado final</span>
            <h3 class="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              {{ rank }}
            </h3>
            <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
              Voce concluiu o circuito com {{ score }} pontos. Use o ranking para decidir se
              ja esta pronto para criar um modulo novo ou se vale repetir uma missao antes.
            </p>

            <div class="grid gap-3 sm:grid-cols-3">
              <div class="rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  perguntas
                </p>
                <p class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {{ totalQuestions }}
                </p>
              </div>
              <div class="rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  streak final
                </p>
                <p class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {{ streak }}
                </p>
              </div>
              <div class="rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  score
                </p>
                <p class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {{ score }}
                </p>
              </div>
            </div>
          </div>

          <div class="surface-card flex flex-col justify-between gap-4 p-5">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                proximo passo sugerido
              </p>
              <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Se o ranking foi alto, siga para o simulador e complete as missoes em ordem.
                Se o ranking foi medio, revise o explorer por camada. Se foi baixo, retome a trilha
                de entrada e CRUD antes de inventar um modulo novo.
              </p>
            </div>

            <UButton
              label="Jogar novamente"
              icon="i-lucide-rotate-ccw"
              @click="restartGame"
            />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
