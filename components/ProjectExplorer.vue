<script setup lang="ts">
import { fileAtlas } from '~/data/training'

const search = ref('')
const activeLayer = ref('Todos')

const layers = ['Todos', ...new Set(fileAtlas.map(file => file.layer))]

const filteredFiles = computed(() => {
  const query = search.value.trim().toLowerCase()

  return fileAtlas.filter((file) => {
    const matchesLayer = activeLayer.value === 'Todos' || file.layer === activeLayer.value
    const haystack = [file.layer, file.path, file.purpose, file.connects, file.why].join(' ').toLowerCase()
    const matchesQuery = !query || haystack.includes(query)

    return matchesLayer && matchesQuery
  })
})
</script>

<template>
  <section id="explorer" class="space-y-6">
    <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div class="space-y-2">
        <span class="section-kicker">Explorer</span>
        <h2 class="section-heading max-w-3xl">
          Abra os arquivos certos antes de mexer em qualquer coisa
        </h2>
        <p class="section-copy max-w-3xl">
          Filtre por camada, pesquise um assunto e veja para cada arquivo o papel, a conexao
          e o motivo de estudo. O objetivo aqui nao e listar tudo, e sim te colocar nos pontos
          de maior retorno.
        </p>
      </div>

      <div class="surface-card w-full max-w-md p-4">
        <label class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Buscar arquivo, fluxo ou integracao
        </label>
        <input
          v-model="search"
          type="search"
          placeholder="Ex.: login, upload, menu, repositorio"
          class="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
        >
      </div>
    </div>

    <div class="flex flex-wrap gap-2">
      <button
        v-for="layer in layers"
        :key="layer"
        type="button"
        class="rounded-full border px-4 py-2 text-sm font-semibold transition"
        :class="activeLayer === layer
          ? 'border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
          : 'border-slate-200 bg-white/70 text-slate-600 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300'"
        @click="activeLayer = layer"
      >
        {{ layer }}
      </button>
    </div>

    <div class="flex items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
      <p>{{ filteredFiles.length }} item(ns) visiveis</p>
      <p>Camada atual: {{ activeLayer }}</p>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="file in filteredFiles"
        :key="file.path"
        class="surface-card flex h-full flex-col gap-4 p-5"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
              {{ file.layer }}
            </p>
            <h3 class="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
              {{ file.path }}
            </h3>
          </div>

          <span class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            foco
          </span>
        </div>

        <div class="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p><strong class="text-slate-900 dark:text-slate-100">Funcao:</strong> {{ file.purpose }}</p>
          <p><strong class="text-slate-900 dark:text-slate-100">Conecta com:</strong> {{ file.connects }}</p>
          <p><strong class="text-slate-900 dark:text-slate-100">Por que estudar:</strong> {{ file.why }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
