<script setup lang="ts">
import { simulatorMissions } from '~/data/training'

const fallbackMission = simulatorMissions[0]!
const selectedMissionId = ref(simulatorMissions[0]?.id ?? '')
const currentStageIndex = ref(0)

const selectedMission = computed(() => {
  return simulatorMissions.find(mission => mission.id === selectedMissionId.value) ?? fallbackMission
})

const currentStage = computed(() => {
  return selectedMission.value.stages[currentStageIndex.value] ?? selectedMission.value.stages[0]!
})

const stageProgress = computed(() => {
  return Math.round(((currentStageIndex.value + 1) / selectedMission.value.stages.length) * 100)
})

const isFirstStage = computed(() => currentStageIndex.value === 0)
const isLastStage = computed(() => currentStageIndex.value === selectedMission.value.stages.length - 1)

function chooseMission(id: string) {
  selectedMissionId.value = id
  currentStageIndex.value = 0
}

function nextStage() {
  if (!isLastStage.value) {
    currentStageIndex.value += 1
  }
}

function previousStage() {
  if (!isFirstStage.value) {
    currentStageIndex.value -= 1
  }
}

function restartMission() {
  currentStageIndex.value = 0
}
</script>

<template>
  <section id="simulador" class="space-y-6">
    <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div class="space-y-2">
        <span class="section-kicker">Simulador</span>
        <h2 class="section-heading max-w-3xl">
          Aprenda como se estivesse pegando uma tarefa real
        </h2>
        <p class="section-copy max-w-3xl">
          Escolha uma missao e percorra as etapas do mesmo jeito que um dev experiente investigaria o sistema.
        </p>
      </div>
      <div class="surface-card max-w-sm p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
          Resultado esperado
        </p>
        <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {{ selectedMission.outcome }}
        </p>
      </div>
    </div>

    <div class="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
      <div class="space-y-4">
        <article
          v-for="mission in simulatorMissions"
          :key="mission.id"
          class="surface-card cursor-pointer p-5 transition hover:-translate-y-0.5"
          :class="mission.id === selectedMissionId ? 'ring-2 ring-emerald-400/70' : ''"
          @click="chooseMission(mission.id)"
        >
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">{{ mission.level }}</p>
              <h3 class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{{ mission.title }}</h3>
            </div>
            <span class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              {{ mission.stages.length }} etapas
            </span>
          </div>
          <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ mission.summary }}</p>
        </article>
      </div>

      <article class="surface-card p-6">
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">{{ selectedMission.level }}</p>
              <h3 class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ selectedMission.title }}</h3>
            </div>
            <div class="min-w-52">
              <div class="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                <span>progresso</span>
                <span>{{ stageProgress }}%</span>
              </div>
              <div class="h-2 rounded-full bg-slate-200/80 dark:bg-slate-800">
                <div class="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 transition-all" :style="{ width: `${stageProgress}%` }" />
              </div>
            </div>
          </div>

          <div class="grid gap-3 md:grid-cols-4">
            <div
              v-for="(stage, index) in selectedMission.stages"
              :key="stage.label"
              class="rounded-2xl border px-4 py-3 text-sm transition"
              :class="index === currentStageIndex ? 'border-emerald-400/70 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-slate-200/70 bg-white/60 text-slate-500 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400'"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.2em]">etapa {{ index + 1 }}</p>
              <p class="mt-2 font-semibold">{{ stage.label }}</p>
            </div>
          </div>

          <div class="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
            <div class="space-y-4">
              <div class="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-950/50">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">objetivo</p>
                <p class="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{{ currentStage.objective }}</p>
              </div>
              <div class="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-950/50">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">arquivos tocados</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span v-for="touchpoint in currentStage.touchpoints" :key="touchpoint" class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    {{ touchpoint }}
                  </span>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="rounded-[1.5rem] border border-emerald-300/50 bg-emerald-500/10 p-5 dark:bg-emerald-500/8">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">conecta com</p>
                <p class="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{{ currentStage.connects }}</p>
              </div>
              <div class="rounded-[1.5rem] border border-cyan-300/40 bg-cyan-500/8 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">sinal de sucesso</p>
                <p class="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{{ currentStage.success }}</p>
              </div>
              <div class="rounded-[1.5rem] border border-amber-300/50 bg-amber-500/10 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">armadilha comum</p>
                <p class="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{{ currentStage.pitfall }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <UButton label="Voltar etapa" color="neutral" variant="outline" icon="i-lucide-arrow-left" :disabled="isFirstStage" @click="previousStage" />
            <UButton v-if="!isLastStage" label="Avançar etapa" icon="i-lucide-arrow-right" @click="nextStage" />
            <UButton v-else label="Revisar missão" icon="i-lucide-rotate-ccw" @click="restartMission" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
