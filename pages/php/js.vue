<script setup lang="ts">
useSeoMeta({
  title: 'JavaScript Vanilla & ES6 Mestre | Padrão NTL',
  description: 'Programe os músculos da sua aplicação corporativa com JS Vanilla e Padrões Funcionais.'
})

const jsTopics = [
  {
    title: 'A Base Assíncrona Total (Event Loop)',
    icon: 'lucide:activity',
    color: 'yellow',
    content: 'O JavaScript funciona de forma single-threaded. Isto significa que a Thread principal não pode travar. Promessas assíncronas delegam tarefas intensivas do Node/WebAPIs para a Event Queue (Fila), rodando em paralelo e desaguando quando estiver completada via the Event Loop.'
  },
  {
    title: 'Programação Funcional Mutável x Imutável',
    icon: 'lucide:arrow-left-right',
    color: 'orange',
    content: 'O paradigma corporativo atual prefere imutabilidade. Métodos de arrays como map(), filter(), e reduce() retornam arrays novos intocados. Isso previne bugs assombrosos ao modificar acidentalmente matrizes utilizadas em múltiplos lugares (side-effects). Contudo, funções como sort() alteram a origem, tenha extremo cuidado e spread [...arr] antes de ordenar.'
  },
  {
    title: 'O Padrão Factory e IIFEs',
    icon: 'lucide:factory',
    color: 'emerald',
    content: 'Com o escopo bloqueado dentro de funções auto-invocadas (IIFE) no Vanilla, era possível criar clojures imitando dados privados. No ecossistema NTL moderno (JS/Nuxt), os ES Modules exportados já protegem o ambiente global limpo. Porém, utilizar Factories (funções que retornam abstrações de objetos) ainda é o estado da arte para controllers modulares.'
  },
  {
    title: 'Manipulação DOM e Event Delegation',
    icon: 'lucide:mouse-pointer-2',
    color: 'indigo',
    content: 'Não anexe EventListeners em cada botão gerado numa tabela de 10.000 linhas! Isso joga memória do browser na fornalha. O Event Delegation anexa 1 único escutador (.addEventListener) à "<table>" pai, utilizando o e.target.closest() para interagir com o clique que brota dos filhos (bubbling), economizando 99% da banda.'
  }
]

const codeExample = `/**
 * Padrão NTL: Requisição Assíncrona Segura
 * (Fetch com wrapper de Error Boundary)
 */
const apiNTL = {
  async fetchClient(url, options = {}) {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${sessionToken}\`
        },
        ...options
      })

      if (!response.ok) {
        throw new Error(\`Falha na rota \${response.status}\`)
      }
      
      const payload = await response.json()
      return { data: payload, error: null }
      
    } catch (err) {
      console.error('[API NTL/CRITICAL]', err.message)
      return { data: null, error: err.message }
    }
  }
}

// Consumo Imutável via ES6
const initDashboard = async () => {
  const { data, error } = await apiNTL.fetchClient('/api/dashboard')
  if (error) return;
  
  // Imutabilidade: clonando a matriz sem quebrar base
  const premiumUsers = data.users.filter(u => u.premium)
  const ordered = [...premiumUsers].sort((a,b) => b.score - a.score)
  
  renderTable(ordered)
}`

</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    
    <!-- Hero Section -->
    <div class="relative bg-yellow-400/10 border border-yellow-500/20 rounded-[3rem] p-12 overflow-hidden mb-16 text-center">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent pointer-events-none"></div>
      
      <Icon name="vscode-icons:file-type-js-official" class="w-24 h-24 mx-auto drop-shadow-2xl mb-6 hover:scale-110 transition-transform duration-500" />
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
        Javascript <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Avançado</span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
        O cérebro pulsante no client-side e server-side. Explore o comportamento do asincronismo e a força funcional da sintaxe ES6+ na NTL.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1.5fr_1fr] gap-12">
      <!-- Deep Content -->
      <div class="space-y-8">
        <div v-for="topic in jsTopics" :key="topic.title" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
          <div class="flex items-center gap-4 mb-4">
            <div :class="`p-3 rounded-2xl bg-${topic.color}-50 dark:bg-${topic.color}-900/20 text-${topic.color}-500 group-hover:scale-110 transition-transform`">
              <Icon :name="topic.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ topic.title }}</h3>
          </div>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light pl-16">
            {{ topic.content }}
          </p>
        </div>
      </div>

      <!-- Code Inspector -->
      <div class="space-y-8">
        <!-- Live Code Block -->
        <div class="bg-[#1e1e1e] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800">
          <div class="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-slate-700">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="ml-4 text-xs font-mono text-slate-400">api-business.js</span>
          </div>
          <div class="p-6 overflow-x-auto text-sm font-mono text-yellow-300 whitespace-pre">
            {{ codeExample }}
          </div>
        </div>

        <!-- Rules -->
        <div class="bg-gradient-to-br from-yellow-50/50 to-white dark:from-slate-900/80 dark:to-slate-800/50 p-8 rounded-[2rem] border border-yellow-200/50 dark:border-white/5">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm text-slate-500">Mandamentos JS/ES6</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <Icon name="lucide:ban" class="w-6 h-6 text-red-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Nunca mais utilize a declaração <strong>var</strong>. Use const sempre, ou let se o valor oscilar intrinsecamente.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:equal-not" class="w-6 h-6 text-red-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Jamais use igualdade abstrata (==). Use apenas a igualdade estrita <strong>(===)</strong> para evitar a letal coersão de tipos booleana.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle-2" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Desestruturação precoce: No parâmetro da função, abra os objetos `({ name, id }) => {}` para transparência em alto nível.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
