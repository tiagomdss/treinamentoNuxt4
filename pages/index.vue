<script setup lang="ts">
import { connectionLoop, folderZones, learningTracks } from '~/data/training'

// Nuxt 4 stats
const performanceStats = [
  { label: 'Score Perfeito', value: '100', icon: 'heroicons:star' },
  { label: 'Core Web Vitals', value: 'A+', icon: 'heroicons:bolt' },
  { label: 'Smaller Size', value: '-45%', icon: 'heroicons:arrow-trending-down' },
  { label: 'Load Time', value: '1.2s', icon: 'heroicons:clock' }
]

const advancedFeatures = [
  {
    title: 'Server Components',
    description: 'Renderização no servidor com componentes híbridos para máxima performance fluida.',
    icon: 'heroicons:server'
  },
  {
    title: 'Auto-imports',
    description: 'Imports automáticos de componentes e composables que fluem naturalmente no seu código.',
    icon: 'heroicons:sparkles'
  },
  {
    title: 'File-based Routing',
    description: 'Sistema de rotas intuitivo onde a estrutura de arquivos reflete sua navegação.',
    icon: 'heroicons:folder'
  },
  {
    title: 'Data Fetching',
    description: 'APIs modernas e hooks inteligentes para buscar dados com cache integrado e suave.',
    icon: 'heroicons:cloud-arrow-down'
  },
  {
    title: 'TypeScript',
    description: 'Suporte completo a TypeScript - tipagem segura, transparente e produtiva.',
    icon: 'heroicons:code-bracket-square'
  },
  {
    title: 'Nitro Engine',
    description: 'Motor de servidor universal com deploy líquido em qualquer plataforma.',
    icon: 'heroicons:rocket-launch'
  }
]

// NTL stats
const statCards = [
  { label: 'Camadas dominadas', value: '5', detail: 'pagina, JS, backend, repositorio e ambiente' },
  { label: 'Missoes guiadas', value: '3', detail: 'login, CRUD e upload' },
  { label: 'Ritmo de estudo', value: '4', detail: 'tracks para sair da teoria e entrar no fluxo' }
]

const environmentChecklist = [
  'SQL Server com schema Ntl acessivel',
  'vendor/autoload.php instalado via Composer',
  'Constantes de conexao e credenciais fora do repo',
  'Sessao PHP habilitada',
  'Pastas de upload com permissao de escrita',
  'Secrets FTP se o deploy automatico for usado'
]

useSeoMeta({
  title: 'Treinamento Neeo - Plataforma de Aprendizado Avançada',
  description: 'Aprenda Nuxt 4 e NTL de forma dinâmica! Descubra o framework, simulação guiada e jogo interativo.'
})
</script>

<template>
  <div class="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#020420] transition-colors duration-500">
    <!-- Cosmic Background Blobs & Scattered Text -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#34d399]/20 dark:bg-[#10b981]/15 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
      <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#60a5fa]/20 dark:bg-[#2563eb]/10 rounded-full blur-[100px] animate-[float_25s_infinite_ease-in-out_reverse]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-[#c084fc]/20 dark:bg-[#7c3aed]/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>

      <!-- Scaterred Transparent Texts -->
      <div class="absolute top-[10%] -left-[5%] text-[10rem] font-black text-slate-300/30 dark:text-white/[0.03] -rotate-12">PHP</div>
      <div class="absolute top-[25%] -right-[5%] text-[12rem] font-black text-slate-300/30 dark:text-white/[0.03] rotate-12">NUXT</div>
      <div class="absolute top-[45%] -left-[10%] text-[8rem] font-black text-slate-300/30 dark:text-white/[0.03] -rotate-6">CSS</div>
      <div class="absolute top-[60%] right-[10%] text-[9rem] font-black text-slate-300/30 dark:text-white/[0.03] rotate-6">JAVASCRIPT</div>
      <div class="absolute bottom-[20%] left-[5%] text-[11rem] font-black text-slate-300/30 dark:text-white/[0.03] -rotate-12">VUE</div>
      <div class="absolute bottom-[5%] -right-[10%] text-[8rem] font-black text-slate-300/30 dark:text-white/[0.03] rotate-12">TAILWIND</div>
      <div class="absolute top-[80%] left-[40%] text-[7rem] font-black text-slate-300/30 dark:text-white/[0.03] rotate-3">TYPESCRIPT</div>
    </div>

    <!-- Nuxt 4 Hero Section -->
    <div class="flex flex-col items-center justify-center pt-28 pb-10 text-center z-10 relative px-4">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-8 backdrop-blur-md">
        <Icon name="heroicons:rocket-launch" class="w-5 h-5 text-[#00DC82]" />
        <span class="text-[#00DC82] font-semibold text-sm tracking-wide uppercase">O Mega Mashup de Treinamentos</span>
      </div>
      
      <div class="mb-8 flex justify-center">
        <img src="/logo-light.png" alt="Treinamento Neeo" class="h-40 md:h-[35rem] dark:hidden drop-shadow-2xl" />
        <img src="/logo-dark.png" alt="Treinamento Neeo" class="h-40 md:h-[35rem] hidden dark:block drop-shadow-2xl" />
      </div>
      
      <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
        A união definitiva do ecossistema moderno Nuxt 4 com o padrão de desenvolvimento prático NTL.<br class="hidden md:block">
        Tudo o que você precisa dominar, em um só lugar. ✨
      </p>

      <div class="flex flex-col sm:flex-row gap-6 items-center flex-wrap justify-center">
        <NuxtLink 
          to="/nuxt/sobre" 
          class="group relative inline-flex items-center justify-center gap-3 bg-[#00DC82] hover:bg-[#00c976] text-slate-900 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,220,130,0.3)]"
        >
          <Icon name="vscode-icons:file-type-nuxt" class="w-6 h-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]" />
          <span>Trilha Nuxt 4</span>
        </NuxtLink>

        <NuxtLink 
          to="/php/sobre" 
          class="group relative inline-flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
        >
          <Icon name="vscode-icons:file-type-php" class="w-6 h-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]" />
          <span>Trilha PHP</span>
        </NuxtLink>

        <NuxtLink 
          to="/jogos" 
          class="group inline-flex items-center justify-center gap-3 bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-md"
        >
          <Icon name="lucide:gamepad-2" class="w-5 h-5 text-slate-500 dark:text-gray-400 group-hover:text-fuchsia-500 transition-colors" />
          <span>Acessar Jogos</span>
        </NuxtLink>
      </div>
    </div>


    <!-- NTL Academy Advanced Training Sections -->
    <div class="container mx-auto px-4 py-16 relative z-10">
      
      <!-- NTL Architecture Overview -->
      <section class="rounded-[2.5rem] bg-white/40 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden mb-16 px-6 py-12 md:p-16">
        <div class="grid gap-12 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
          <div class="space-y-8">
            <div class="space-y-5">
              <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#00DC82]">Arquitetura em Foco</span>
              <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                Treine o sistema NTL diretamente da sala de engenharia
              </h2>
              <p class="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Refizemos a experiência com uma interface premium. O treinamento NTL agora possui atlas navegável, missões reais do simulador, e circuitos de jogos para fixar a estrutura 100% nativa em Nuxt 4.
              </p>
            </div>

            <div class="flex flex-wrap gap-4">
              <!-- Using normal buttons styled like UButton from the old app -->
              <NuxtLink to="/jogos" class="inline-flex items-center gap-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-100 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all">
                <Icon name="lucide:gamepad-2" class="w-5 h-5" /> Acessar Jogos NTL
              </NuxtLink>
            </div>

            <div class="grid gap-4 md:grid-cols-3 pt-4">
              <article v-for="card in statCards" :key="card.label" class="bg-white/60 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/50 dark:border-white/5">
                <p class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{{ card.label }}</p>
                <p class="mt-4 text-5xl font-black text-slate-900 dark:text-white">{{ card.value }}</p>
                <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ card.detail }}</p>
              </article>
            </div>
          </div>

          <div class="space-y-6">
            <article class="bg-white/60 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200/50 dark:border-white/5">
              <div class="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6 mb-6">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-[#00DC82]">O Loop Vencedor</p>
                  <h3 class="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Como projetos reais se movem</h3>
                </div>
                <span class="rounded-full bg-[#00DC82]/10 px-4 py-2 text-xs font-bold text-[#00DC82]">FLUXO NTL</span>
              </div>
              <div class="space-y-4">
                <div v-for="step in connectionLoop" :key="step.title" class="rounded-2xl bg-white dark:bg-black/20 p-5 shadow-sm border border-slate-100 dark:border-white/5">
                  <h4 class="text-base font-bold text-slate-900 dark:text-white">{{ step.title }}</h4>
                  <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ step.detail }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>


      <!-- The Technology Glossary -->
      <section class="my-20 scroll-mt-24">
        <div class="text-center mb-12">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#00DC82]">Base do Treinamento</span>
          <h2 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white tracking-tight">O que compõe a nossa Stack?</h2>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <NuxtLink to="/php/sobre" class="group flex items-center gap-4 bg-white/60 dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-php" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">PHP Base</h3>
          </NuxtLink>
          <NuxtLink to="/nuxt/sobre" class="group flex items-center gap-4 bg-white/60 dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-nuxt" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Nuxt 4</h3>
          </NuxtLink>
          <NuxtLink to="/nuxt/typescript" class="group flex items-center gap-4 bg-white/60 dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-typescript-official" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">TypeScript</h3>
          </NuxtLink>
          <NuxtLink to="/nuxt/tailwind" class="group flex items-center gap-4 bg-white/60 dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-tailwind" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Tailwind</h3>
          </NuxtLink>
          <NuxtLink to="/php/html" class="group flex items-center gap-4 bg-white/60 dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-html" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">HTML</h3>
          </NuxtLink>
          <NuxtLink to="/php/css" class="group flex items-center gap-4 bg-white/60 dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-css" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">CSS</h3>
          </NuxtLink>
          <NuxtLink to="/php/js" class="group flex items-center gap-4 bg-white/60 dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-js-official" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">JavaScript</h3>
          </NuxtLink>
          <NuxtLink to="/php/sql-server" class="group flex items-center gap-4 bg-emerald-500/10 dark:bg-emerald-900/20 p-5 rounded-[1.5rem] border border-emerald-500/30 hover:bg-emerald-500/20 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
            <Icon name="vscode-icons:file-type-sql" class="w-10 h-10 drop-shadow-md group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-emerald-700 dark:text-emerald-400">SQL Server</h3>
          </NuxtLink>
        </div>
      </section>
    </div>

    <!-- Nuxt 4 Capabilities Highlight -->
    <div class="border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
      <div class="container mx-auto px-4 py-24 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Performando Nuxt 4 <span class="text-[#00DC82] ml-2">⚡</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Integrando todas ferramentas mais avançadas fornecidas no ecossistema.</p>
        </div>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          <div v-for="stat in performanceStats" :key="stat.label" class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform shadow-lg hover:shadow-2xl">
            <Icon :name="stat.icon" class="w-10 h-10 text-[#00DC82] mb-6 group-hover:scale-110 transition-transform" />
            <div class="text-4xl font-black text-slate-900 dark:text-white mb-2">{{ stat.value }}</div>
            <div class="text-sm text-slate-500 font-bold uppercase tracking-widest">{{ stat.label }}</div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div v-for="feature in advancedFeatures" :key="feature.title" class="p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 hover:border-[#00DC82]/40 transition-colors bg-white/40 dark:bg-slate-900/30 backdrop-blur-md">
            <div class="w-14 h-14 rounded-2xl bg-[#00DC82]/10 mb-6 flex items-center justify-center border border-[#00DC82]/20">
              <Icon :name="feature.icon" class="w-7 h-7 text-[#00DC82]" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3">{{ feature.title }}</h4>
            <p class="text-slate-600 dark:text-slate-400 font-light">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA -->
    <div class="py-32 relative text-center px-4">
      <h2 class="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">
        A Base NTL é a Sua Missão
      </h2>
      <p class="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-light">
        A melhor forma de aprender é se aprofundando nos detalhes. Abrace o desenvolvimento com todos os recursos que a plataforma oferece.
      </p>
      <NuxtLink to="/nuxt/sobre" class="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-12 py-5 text-xl rounded-2xl hover:scale-105 transition-transform shadow-2xl">
        <Icon name="lucide:book-open" class="w-6 h-6" /> Ir para as Trilhas de Aprendizado
      </NuxtLink>
    </div>

  </div>
</template>
