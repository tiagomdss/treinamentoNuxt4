<script setup lang="ts">
useSeoMeta({
  title: 'CSS Moderno | Cascading Styles no Padrão NTL',
  description: 'Arquitetura de estilos, responsividade avançada e performance visual.'
})

const cssTopics = [
  {
    title: 'A Arquitetura OOCSS',
    icon: 'lucide:blocks',
    color: 'blue',
    content: 'O Object-Oriented CSS foca na separação de estrutura e pele (visual). Na NTL, utilizamos utilitários (como Tailwind) mesclados com classes de bloco (.form-group, .btn-primary) para agilizar telas repetitivas, ao mesmo tempo garantindo que a base se mantenha super enxuta e fácil de sobrescrever em projetos White-Label.'
  },
  {
    title: 'Variáveis Nativas (Custom Properties)',
    icon: 'lucide:palette',
    color: 'indigo',
    content: 'Variáveis CSS (ex: --primary-color) são reativas em runtime. Diferente do SCSS, você pode alternar de Dark Mode para Light Mode dinamicamente apenas mudando a cor root no JavaScript. A padronização da NTL prevê uma paleta estrita injetada no document.documentElement.'
  },
  {
    title: 'Modelos Híbridos de Layout',
    icon: 'lucide:layout-grid',
    color: 'sky',
    content: 'Flexbox é linear (1D). CSS Grid é bidimensional (2D). Você deve usar Flexbox para alinhar ícones, botões e barras de navegação (fluxos contínuos). E deve usar Grid obrigatoriamente para as estruturas da página, galerias e dashboards corporativos. Dominar o "grid-template-areas" é essencial para layouts semânticos.'
  },
  {
    title: 'Animações Guiadas por GPU',
    icon: 'lucide:sparkles',
    color: 'purple',
    content: 'Jamais anime "width", "height", "top", "margin" ou "left". Estas propriedades causam o efeito Reflow e Paint no DOM (processamento pesado de CPU). Sempre interpole "transform" (translate, scale, rotate) e "opacity", ativando a aceleração de GPU (Compositing) a 60 FPS consistentes.'
  }
]

const codeExample = `/* Variáveis de Tema da Interface NTL */
:root {
  --ntl-surface-100: #ffffff;
  --ntl-brand-prime: #3b82f6;
  --ntl-brand-hover: #2563eb;
  --ntl-spacing-md: 1.5rem;
}

.dark {
  --ntl-surface-100: #0f172a;
}

/* OOCSS Button Block Moderno */
.btn-ntl {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem var(--ntl-spacing-md);
  background-color: var(--ntl-brand-prime);
  color: #fff;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
              background-color 0.2s ease;
  will-change: transform;
}

.btn-ntl:hover {
  background-color: var(--ntl-brand-hover);
  transform: translateY(-2px) scale(1.02);
}`

</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    <!-- Hero Section -->
    <div class="relative bg-blue-500/10 border border-blue-500/20 rounded-[3rem] p-12 overflow-hidden mb-16 text-center">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-widest uppercase mb-6">
        <Icon name="lucide:paint-roller" class="w-4 h-4" /> Beleza e Engenharia
      </div>
      
      <Icon name="vscode-icons:file-type-css" class="w-24 h-24 block mx-auto drop-shadow-2xl mb-6 hover:scale-110 transition-transform duration-500" />
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
        Masterclass <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">CSS3</span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
        Cascading Stylesheets vai muito além de pintar textos. É engenharia visual purista que exige responsividade atômica, variáveis escaláveis e performance 60FPS.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1.5fr_1fr] gap-12">
      <!-- Deep Content -->
      <div class="space-y-8">
        <div v-for="topic in cssTopics" :key="topic.title" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
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

      <!-- Code Inspector & Principles -->
      <div class="space-y-8">
        <!-- Live Code Block -->
        <div class="bg-[#1e1e1e] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800">
          <div class="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-slate-700">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="ml-4 text-xs font-mono text-slate-400">global-ntl.css</span>
          </div>
          <div class="p-6 overflow-x-auto text-sm font-mono text-sky-400 whitespace-pre">
            {{ codeExample }}
          </div>
        </div>

        <!-- Checklists -->
        <div class="bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900/80 dark:to-slate-800/50 p-8 rounded-[2rem] border border-blue-200/50 dark:border-white/5">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm text-slate-500">A Bíblia do Estilo</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <Icon name="lucide:arrow-down-right" class="w-6 h-6 text-blue-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Evite ao máximo a palavra impura <strong>!important</strong>. Suba a especificidade com combinadores aninhados se precisar.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:arrow-down-right" class="w-6 h-6 text-blue-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Mobile First: Seus Media Queries devem usar <strong>min-width</strong> (construindo de baixo para cima), reduzindo código inútil.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:arrow-down-right" class="w-6 h-6 text-blue-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Respeite o <strong>z-index</strong>. Crie um sistema indexado (10, 20, 30) ao invés de usar z-index 999999 quebrado.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
