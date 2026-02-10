<template>
  <div class="relative min-h-screen bg-[#F8FAFC] dark:bg-[#020420] overflow-hidden transition-colors duration-500">
    <!-- Cosmic Background Blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#38bdf8]/20 dark:bg-[#0ea5e9]/15 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
      <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#818cf8]/20 dark:bg-[#6366f1]/10 rounded-full blur-[100px] animate-[float_25s_infinite_ease-in-out_reverse]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-[#c084fc]/20 dark:bg-[#a855f7]/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-sky-400/10 border border-slate-200 dark:border-white/10 mb-8 backdrop-blur-md">
            <Icon name="simple-icons:tailwindcss" class="w-5 h-5 text-[#38bdf8]" />
            <span class="text-[#0ea5e9] dark:text-sky-400 font-semibold text-sm tracking-wide uppercase">Utility-First CSS Framework</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Tailwind <span class="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">CSS</span> Mastery
          </h1>
          <p class="text-xl text-slate-700 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Construa interfaces modernas rapidamente sem sair do seu HTML. Descubra por que o utility-first mudou o desenvolvimento web para sempre. 🌊
          </p>

          <!-- Tailwind Stats Banner -->
          <div class="flex flex-wrap items-center justify-center gap-6 mt-12 mb-12">
            <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              <Icon name="heroicons:bolt" class="w-6 h-6 text-yellow-500" />
              <div class="text-left">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Performance</p>
                <p class="text-lg font-bold text-slate-900 dark:text-white">CSS Minúsculo</p>
              </div>
            </div>
            <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              <Icon name="heroicons:device-phone-mobile" class="w-6 h-6 text-sky-500" />
              <div class="text-left">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Responsivo</p>
                <p class="text-lg font-bold text-slate-900 dark:text-white">Mobile First</p>
              </div>
            </div>
            <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              <Icon name="heroicons:moon" class="w-6 h-6 text-purple-500" />
              <div class="text-left">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Dark Mode</p>
                <p class="text-lg font-bold text-slate-900 dark:text-white">Nativo & Fácil</p>
              </div>
            </div>
            <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              <Icon name="heroicons:sparkles" class="w-6 h-6 text-pink-500" />
              <div class="text-left">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">DX</p>
                <p class="text-lg font-bold text-slate-900 dark:text-white">Produtividade</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2-Level Navigation System -->
        <div class="sticky top-20 z-40 space-y-4 mb-16">
          
          <!-- Level 1: Categories -->
          <div class="flex justify-center">
            <div class="inline-flex bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg">
              <button
                v-for="cat in categories"
                :key="cat.id"
                @click="switchCategory(cat.id)"
                :class="[
                  'px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2',
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-md scale-100'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/30 dark:hover:bg-white/5'
                ]"
              >
                <Icon :name="cat.icon" class="w-4 h-4" />
                {{ cat.label }}
              </button>
            </div>
          </div>

          <!-- Level 2: Tabs (Scrollable) -->
          <div class="-mx-4 px-4 overflow-x-auto pb-2 hide-scrollbar">
            <div class="flex items-center md:justify-center gap-3 min-w-max">
              <button
                v-for="tab in filteredTabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 backdrop-blur-md border text-sm flex items-center gap-2',
                  activeTab === tab.id
                    ? 'bg-[#38bdf8] text-white border-[#38bdf8] shadow-lg shadow-sky-500/20'
                    : 'bg-white/40 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-transparent hover:bg-white/60 dark:hover:bg-white/10'
                ]"
              >
                <Icon :name="tab.icon" class="w-4 h-4" />
                {{ tab.label }}
              </button>
            </div>
          </div>
          
        </div>

        <div class="space-y-12">
          <div 
            v-for="section in filteredSections" 
            :key="section.title"
            class="group bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-[#38bdf8]/30 shadow-sm hover:shadow-2xl"
          >
            <!-- Header -->
            <div class="p-10 border-b border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.01]">
              <div class="flex flex-col md:flex-row items-start gap-8">
                <div class="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center border border-sky-500/20 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Icon :name="section.icon" class="w-8 h-8 text-[#38bdf8] dark:text-sky-400" />
                </div>
                <div class="flex-1">
                  <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{{ section.title }}</h2>
                  <p class="text-slate-700 dark:text-slate-300 text-lg font-light leading-relaxed">{{ section.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-10 space-y-8">
              <!-- Description -->
              <div class="text-slate-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-lg font-light">
                {{ section.content }}
              </div>
              
              <!-- Code Block -->
              <CodeBlock 
                :code="section.code" 
                :filename="section.codeLabel"
                :lang="section.lang || 'html'"
                class="shadow-2xl"
              />

              <!-- Tips (optional) -->
              <div 
                v-if="section.tip"
                class="flex items-start gap-4 p-6 bg-sky-50 dark:bg-sky-500/5 border border-sky-200 dark:border-sky-500/20 rounded-2xl"
              >
                <Icon name="heroicons:light-bulb" class="w-6 h-6 text-sky-500 shrink-0 mt-0.5" />
                <p class="text-sky-800 dark:text-sky-300 text-sm leading-relaxed font-medium">{{ section.tip }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeCategory = ref('conceitos')
const activeTab = ref('fundamentos')

const categories = [
  { id: 'conceitos', label: 'Conceitos Core', icon: 'heroicons:book-open' },
  { id: 'ui', label: 'UI & Design', icon: 'heroicons:paint-brush' },
  { id: 'avancado', label: 'Arquitetura & Config', icon: 'heroicons:wrench-screwdriver' }
]

const tabs = [
  // Conceitos
  { id: 'fundamentos', category: 'conceitos', label: 'Fundamentos', icon: 'simple-icons:tailwindcss' },
  { id: 'responsividade', category: 'conceitos', label: 'Responsividade', icon: 'heroicons:device-phone-mobile' },
  { id: 'dark-mode', category: 'conceitos', label: 'Dark Mode', icon: 'heroicons:moon' },
  { id: 'vs-css', category: 'conceitos', label: 'Tailwind vs CSS', icon: 'heroicons:scale' },
  
  // UI
  { id: 'layouts', category: 'ui', label: 'Layouts', icon: 'heroicons:rectangle-group' },
  { id: 'componentes', category: 'ui', label: 'Componentes', icon: 'heroicons:puzzle-piece' },
  { id: 'efeitos', category: 'ui', label: 'Efeitos & Animações', icon: 'heroicons:sparkles' },
  { id: 'tipografia', category: 'ui', label: 'Tipografia Pro', icon: 'heroicons:language' },
  
  // Avançado
  { id: 'boas-praticas', category: 'avancado', label: 'Boas Práticas', icon: 'heroicons:check-badge' },
  { id: 'customizacao', category: 'avancado', label: 'Customização', icon: 'heroicons:paint-brush' },
]

const filteredTabs = computed(() => tabs.filter(t => t.category === activeCategory.value))

const switchCategory = (catId: string) => {
  activeCategory.value = catId
  // Select first tab of new category
  const firstTab = tabs.find(t => t.category === catId)
  if (firstTab) activeTab.value = firstTab.id
}

const docSections = [
  // === FUNDAMENTOS ===
  {
    category: 'fundamentos',
    title: '🧱 O Conceito Utility-First',
    icon: 'simple-icons:tailwindcss',
    description: 'Em vez de componentes pré-prontos, o Tailwind oferece "peças de Lego" de baixo nível para você construir qualquer design.',
    content: `A ideia central é estilizar elementos aplicando classes pré-existentes diretamente no HTML.
    
**Principais Vantagens:**
• Não precisa sair do HTML para escrever CSS
• Mudanças são seguras (mudar aqui não quebra lá)
• Não precisa inventar nomes de classes
• O CSS para de crescer com o tempo`,
    code: `<!-- Tipografia Básica -->
<h1 class="text-3xl font-bold underline text-blue-600">
  Hello world!
</h1>

<!-- Espaçamento e Cores -->
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>`,
    codeLabel: 'utility-first.html',
    tip: 'Pode parecer feio no começo, mas a produtividade ganha é absurda. Você nunca mais vai precisar abrir um arquivo .css separado.'
  },
  {
    category: 'fundamentos',
    title: '📏 Espaçamento e Tamanho',
    icon: 'heroicons:arrows-pointing-out',
    description: 'Controle margens, paddings, larguras e alturas com precisão usando a escala padrão.',
    content: `A escala do Tailwind é consistente. 1 unidade = 0.25rem (4px).
    
**Exemplos Comuns:**
• **p-4**: padding: 1rem (16px)
• **mt-8**: margin-top: 2rem (32px)
• **w-full**: width: 100%
• **h-screen**: height: 100vh
• **gap-4**: gap: 1rem (16px)`,
    code: `<div class="p-8 bg-gray-100">
  <div class="mb-4 bg-white p-4 rounded shadow">
    Margem inferior de 1rem (mb-4)
  </div>
  <div class="flex gap-4">
    <div class="w-1/2 p-4 bg-blue-100">50% de largura (w-1/2)</div>
    <div class="w-1/2 p-4 bg-red-100">50% de largura (w-1/2)</div>
  </div>
</div>`,
    codeLabel: 'espacamento.html',
    tip: 'Use a extensão "Tailwind CSS IntelliSense" no VS Code para ver o valor exato em pixels ao passar o mouse sobre a classe.'
  },

  // === LAYOUTS (FLEX/GRID) ===
  {
    category: 'layouts',
    title: '📦 Flexbox Moderno',
    icon: 'heroicons:squares-plus',
    description: 'Flexbox é a ferramenta essencial para alinhamento unidimensional (linha ou coluna).',
    content: `Classes utilitárias tornam flexbox intuitivo.
    
**Cheat Sheet:**
• **flex**: display: flex
• **flex-col**: flex-direction: column
• **items-center**: align-items: center
• **justify-between**: justify-content: space-between
• **gap-x**: espaçamento entre itens`,
    code: `<!-- Navbar Layout -->
<nav class="flex items-center justify-between p-4 bg-white shadow">
  <!-- Logo à esquerda -->
  <div class="font-bold text-xl">Logo</div>
  
  <!-- Links à direita -->
  <div class="flex gap-4">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">Sobre</a>
    <a href="#" class="hover:text-blue-500">Contato</a>
  </div>
</nav>

<!-- Card Centralizado -->
<div class="flex items-center justify-center h-64 bg-gray-100">
  <div class="p-6 bg-white rounded shadow text-center">
    Estou centralizado vertical e horizontalmente!
  </div>
</div>`,
    codeLabel: 'flexbox.html',
    tip: 'Use flex-col para empilhar itens verticalmente (padrão mobile) e md:flex-row para colocá-los lado a lado em telas maiores.'
  },
  {
    category: 'layouts',
    title: '🏗️ CSS Grid Layout',
    icon: 'heroicons:table-cells',
    description: 'Crie layouts complexos bidimensionais com facilidade usando CSS Grid.',
    content: `Perfeito para galerias de imagens, dashboards e layouts de página inteira.
    
**Essencial:**
• **grid**: display: grid
• **grid-cols-3**: 3 colunas iguais
• **col-span-2**: ocupa 2 colunas
• **gap-4**: espaçamento entre células`,
    code: `<!-- Galeria Responsiva -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <!-- Cartão 1 -->
  <div class="bg-white p-6 rounded shadow">Item 1</div>
  <!-- Cartão 2 -->
  <div class="bg-white p-6 rounded shadow">Item 2</div>
  <!-- Cartão 3 - Destaque (Full Width no Mobile) -->
  <div class="bg-white p-6 rounded shadow md:col-span-2 lg:col-span-1">Item 3 (Destaque)</div>
  <!-- Cartão 4 -->
  <div class="bg-white p-6 rounded shadow">Item 4</div>
  <!-- Cartão 5 -->
  <div class="bg-white p-6 rounded shadow">Item 5</div>
  <!-- Cartão 6 -->
  <div class="bg-white p-6 rounded shadow">Item 6</div>
</div>

<!-- Dashboard Layout -->
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-1 bg-gray-200 h-screen">Sidebar</div>
  <div class="col-span-3 bg-white h-screen">Main Content</div>
</div>`,
    codeLabel: 'grid-layout.html',
    tip: 'Combine grid com responsividade (md:grid-cols-2) para criar layouts que se adaptam perfeitamente a qualquer dispositivo.'
  },

  // === COMPONENTES ===
  {
    category: 'componentes',
    title: '🔘 Botões e Elementos de UI',
    icon: 'heroicons:cursor-arrow-rays',
    description: 'Exemplos de componentes comuns estilizados com Tailwind.',
    content: `Copie e cole esses componentes para começar rapidamente. Observe o uso de pseudo-classes como \`hover:\`, \`focus:\` e \`active:\`.`,
    code: `<!-- Botão Primário -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
  Clique Aqui
</button>

<!-- Botão Secundário (Outline) -->
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-all">
  Cancelar
</button>

<!-- Botão com Ícone -->
<button class="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
  </svg>
  <span>Adicionar Novo</span>
</button>`,
    codeLabel: 'botoes.html',
    tip: 'Use @apply no seu CSS se você estiver repetindo essas classes muitas vezes, ou melhor, crie um componente Vue reutilizável.'
  },
  {
    category: 'componentes',
    title: '📝 Formulários e Inputs',
    icon: 'heroicons:pencil-square',
    description: 'Estilização de campos de formulário com estados de foco e erro.',
    content: `Inputs bonitos e acessíveis com anéis de foco coloridos e mensagens de erro.`,
    code: `<!-- Input Simples -->
<label class="block">
  <span class="text-gray-700">Email</span>
  <input type="email" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
  " placeholder="seu@email.com"/>
</label>

<!-- Checkbox Personalizado -->
<div class="flex items-center gap-2 mt-4">
  <input type="checkbox" id="check" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
  <label for="check" class="text-gray-700 text-sm">Li e concordo com os termos</label>
</div>`,
    codeLabel: 'forms.html',
    tip: 'O plugin @tailwindcss/forms facilita muito a estilização de inputs resetando os estilos padrão do navegador.'
  },

  // === EFEITOS & ANIMAÇÕES (NOVO) ===
  {
    category: 'efeitos',
    title: '✨ Efeitos Visuais (Gradients & Filters)',
    icon: 'heroicons:sparkles',
    description: 'Crie visuais deslumbrantes com degradês, sombras e filtros de desfoque.',
    content: `Tailwind torna fácil o uso de propriedades CSS modernas que antes exigiam dezenas de linhas de código.`,
    code: `<!-- Gradiente de Texto -->
<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
  Unicorn Magic
</h1>

<!-- Efeito Glassmorphism (Vidro) -->
<div class="bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-xl">
  <p class="text-white font-bold">Conteúdo flutuante em vidro</p>
</div>

<!-- Sombras Coloridas -->
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-lg hover:shadow-cyan-500/80 transition-shadow">
  Botão Neon
</button>

<!-- Filtros de Imagem -->
<img class="grayscale hover:grayscale-0 transition-all duration-500 rounded-lg" src="..." alt="Preto e Branco para Colorido">`,
    codeLabel: 'efeitos.html',
    tip: 'Combine backdrop-blur com bg-opacity (bg-white/10) para criar efeitos de vidro modernos estilo iOS/Windows 11.'
  },
  {
    category: 'efeitos',
    title: '🔄 Animações & Transições',
    icon: 'heroicons:arrow-path',
    description: 'Anime qualquer propriedade (cor, tamanho, posição) com transições suaves ou use animações pré-definidas.',
    content: `Use \`transition-all\` e \`duration-300\` para animar tudo. Use \`animate-spin\` para carregamento.`,
    code: `<!-- Hover Scale & Color -->
<div class="bg-blue-500 hover:bg-red-500 hover:scale-110 hover:-rotate-3 transition-all duration-300 w-32 h-32 rounded-xl"></div>

<!-- Loading Spinners -->
<div class="flex items-center gap-4">
  <div class="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
  <div class="animate-ping w-4 h-4 bg-red-500 rounded-full"></div>
  <div class="animate-bounce w-6 h-6 bg-green-500 rounded-full"></div>
</div>

<!-- Delay em Grupo -->
<div class="group flex gap-2">
  <div class="w-4 h-4 bg-blue-500 group-hover:-translate-y-2 transition-transform duration-300 delay-75"></div>
  <div class="w-4 h-4 bg-blue-500 group-hover:-translate-y-2 transition-transform duration-300 delay-150"></div>
  <div class="w-4 h-4 bg-blue-500 group-hover:-translate-y-2 transition-transform duration-300 delay-200"></div>
</div>`,
    codeLabel: 'animacoes.html',
    tip: 'A propriedade `group-hover:` permite acionar animações em filhos quando o pai é sobrevoado pelo mouse.'
  },

  // === TIPOGRAFIA PRO (NOVO) ===
  {
    category: 'tipografia',
    title: '✍️ Tipografia Profissional',
    icon: 'heroicons:language',
    description: 'Controle absoluto sobre espaçamento entre letras (tracking), altura de linha (leading) e listas.',
    content: `Uma boa tipografia é 90% do design. Use utilitários de texto para garantir legibilidade perfeita.`,
    code: `<!-- Título Impactante -->
<h1 class="text-4xl font-black uppercase tracking-widest text-slate-900">
  Manchete
</h1>

<!-- Parágrafo Otimizado para Leitura -->
<p class="text-lg leading-relaxed text-slate-700 max-w-prose mx-auto text-justify indent-8">
  Este é um parágrafo configurado para leitura longa. O 'leading-relaxed' aumenta o espaçamento entre linhas, e o 'max-w-prose' limita a largura da linha (~65 caracteres) para que o olho não se canse ao ler textos longos em telas grandes.
</p>

<!-- Lista Estilizada -->
<ul class="list-disc list-inside space-y-2 marker:text-sky-500 text-slate-600">
  <li>Item da lista com marcador customizado</li>
  <li>Espaçamento vertical consistente (space-y-2)</li>
  <li>Texto cinza suave</li>
</ul>`,
    codeLabel: 'tipografia.html',
    tip: 'Para blogs ou documentações, instale o plugin `@tailwindcss/typography` e use a classe `prose`. Ele formata todo o HTML automaticamente.'
  },

  // === RESPONSIVIDADE ===
  {
    category: 'responsividade',
    title: '📱 Design Responsivo (Mobile First)',
    icon: 'heroicons:device-phone-mobile',
    description: 'Tailwind usa uma abordagem "mobile-first". As classes sem prefixo afetam todos os tamanhos, e os prefixos sobrescrevem em telas maiores.',
    content: `Construir layouts complexos que se adaptam a qualquer tela é incrivelmente simples com os prefixos de breakpoint.
    
**Prefixos Padrão:**
• **sm:** 640px (tablets pequenos)
• **md:** 768px (tablets verticais/iPad)
• **lg:** 1024px (laptops)
• **xl:** 1280px (desktops)
• **2xl:** 1536px (telas grandes)`,
    code: `<!-- Exemplo Responsivo -->
<!-- 
  Padrão (Mobile): Título peq., texto centralizado
  md (Tablet): Título médio, texto à esquerda
  lg (Desktop): Título grande
-->
<div class="text-center md:text-left">
  <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
    Título Responsivo
  </h1>
  <p class="mt-4 text-sm md:text-base text-gray-600">
    Este texto muda de alinhamento e tamanho conforme a tela.
  </p>
</div>

<!-- Grid Responsivo -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Em mobile: 1 coluna -->
  <!-- Em tablet: 2 colunas -->
  <!-- Em desktop: 3 colunas -->
  <div class="bg-blue-100 p-4">Item 1</div>
  <div class="bg-blue-100 p-4">Item 2</div>
  <div class="bg-blue-100 p-4">Item 3</div>
</div>`,
    codeLabel: 'responsividade.html',
    tip: 'Sempre comece estilizando para Mobile (sem prefixo), depois adicione md: e lg: para ajustar para telas maiores.'
  },

  // === DARK MODE ===
  {
    category: 'dark-mode',
    title: '🌙 Dark Mode Nativo',
    icon: 'heroicons:moon',
    description: 'Suporte a modo escuro de primeira classe. Basta adicionar o prefixo `dark:` para definir estilos específicos.',
    content: `Não precisa de media queries manuais ou CSS variáveis complexas (a menos que você queira). O Tailwind resolve isso com um único modificador.
    
**Como funciona:**
• Ative o 'class' strategy no tailwind.config (padrão no Nuxt UI/ColorMode)
• Adicione classes como \`dark:bg-slate-900\`
• Quando a tag <html> tiver a classe 'dark', o estilo é aplicado`,
    code: `<!-- Card com Dark Mode -->
<div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <!-- ... ícone ... -->
      </svg>
    </span>
  </div>
  
  <!-- Texto preto no claro, branco no escuro -->
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
    Escreve Upside-Down
  </h3>
  
  <!-- Texto cinza no claro, cinza mais claro no escuro -->
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    O Zero Gravity Pen pode ser usado para escrever em qualquer ângulo, até mesmo em gravidade zero.
  </p>
</div>`,
    codeLabel: 'dark-mode.html',
    tip: 'No Nuxt com @nuxtjs/color-mode, a classe "dark" é adicionada automaticamente ao <html>, fazendo tudo funcionar magicamente.'
  },

  // === BOAS PRÁTICAS (NOVO) ===
  {
    category: 'boas-praticas',
    title: '✅ Boas Práticas e Arquitetura',
    icon: 'heroicons:check-badge',
    description: 'Como manter seu projeto Tailwind organizado e evitar "Spaghetti de Classes" em projetos grandes.',
    content: `O maior erro de iniciantes é repetir classes em todo lugar. Em projetos Vue/Nuxt, a solução não é @apply, é Componentização.
    
**Regras de Ouro:**
1. **Evite @apply**: Use apenas para estilos globais ou overrides de libs de terceiros.
2. **Componentize cedo**: Se você copiou um botão 2 vezes, crie um <AppButton>.
3. **Ordene classes**: Use plugins como \`prettier-plugin-tailwindcss\` para ordenar automaticamente.`,
    code: `<!-- ❌ ERRADO: Repetindo classes em todo lugar -->
<button class="bg-blue-500 text-white p-2 rounded">Salvar</button>
<button class="bg-blue-500 text-white p-2 rounded">Enviar</button>
<button class="bg-blue-500 text-white p-2 rounded">Excluir</button>

<!-- ❌ ERRADO: Abusando do @apply (recriando CSS tradicional) -->
<style>
.btn {
  @apply bg-blue-500 text-white p-2 rounded; /* Perde a flexibilidade do utility */
}
</style>

<!-- ✅ CORRETO: Componente Vue (AppButton.vue) -->
<template>
  <button :class="['bg-blue-500 hover:bg-blue-600 text-white p-2 rounded shadow', props.class]">
    <slot />
  </button>
</template>

<!-- Uso limpo -->
<AppButton>Salvar</AppButton>
<AppButton class="bg-red-500">Excluir</AppButton>`,
    codeLabel: 'arquitetura.vue',
    lang: 'vue',
    tip: 'O Prettier Plugin TailwindCSS é obrigatório. Ele garante que as classes sempre fiquem na mesma ordem, evitando conflitos de merge e confusão visual.'
  },

  // === CUSTOMIZAÇÃO ===
  {
    category: 'customizacao',
    title: '🎨 Customização (tailwind.config)',
    icon: 'heroicons:paint-brush',
    description: 'Tailwind não é opinativo. Você pode (e deve) configurar suas próprias cores, fontes e espaçamentos.',
    content: `O arquivo tailwind.config.ts permite estender ou sobrescrever o tema padrão. É aqui que você define a identidade visual do seu projeto (Design System).

**O que você pode customizar:**
• Paleta de Cores
• Breakpoints de Tela
• Fontes (Font Family)
• Espaçamentos
• Animações`,
    code: `// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      // Adicionando cores personalizadas
      colors: {
        'brand': {
          DEFAULT: '#00DC82', // brand
          '50': '#E6FCF3',
          '100': '#CCF8E6',
          // ...
          '900': '#002E1B'
        }
      },
      // Adicionando fontes
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Outfit', 'sans-serif']
      },
      // Adicionando animações
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
}

// Uso no HTML:
// <div class="bg-brand text-brand-50 font-display animate-float">
//   Customizado!
// </div>`,
    codeLabel: 'tailwind.config.ts',
    lang: 'typescript',
    tip: 'Sempre use "extend" para manter os valores padrões do Tailwind e apenas adicionar os seus. Se usar fora do "extend", você perde os padrões.'
  },

  // === TAILWIND VS CSS (EXPANDIDO) ===
  {
    category: 'vs-css',
    title: '🥊 Tailwind vs CSS Tradicional: O Debate Final',
    icon: 'heroicons:scale',
    description: 'Por que o mundo inteiro está migrando? Uma análise profunda sobre manutenção, escalabilidade e velocidade.',
    content: `Muitos desenvolvedores olham para o Tailwind e pensam "que bagunça". Mas essa "bagunça" local resolve problemas globais gigantescos.

**1. O Problema do "Append-Only" CSS**
Em projetos CSS/Sass normais, ninguém tem coragem de deletar estilos porque não se sabe onde eles estão sendo usados. Resultado: O CSS só cresce.
No Tailwind, se você deleta o HTML, o estilo morre junto. O CSS para de crescer.

**2. Nomeação é a coisa mais difícil da computação**
Quanto tempo você perde pensando se deve chamar de \`.sidebar-menu-item-active\` ou \`.menu-link--active\`?
Com Tailwind, você não gasta energia mental com nomes. Você gasta energia construindo. 

**3. Manutenção a Longo Prazo**
Voltar num projeto CSS de 2 anos atrás é um pesadelo. Você tem medo de mexer.
Voltar num projeto Tailwind é tranquilo. As classes dizem EXATAMENTE o que está acontecendo.`,
    code: `/* ❌ SASS / BEM - O Jeito "Antigo" */
/* style.scss */
.user-card {
  @include card-shadow;
  display: flex;
  padding: $spacing-lg;
  
  &__avatar {
    border-radius: 50%;
    margin-right: $spacing-md;
  }
  
  &__title {
    font-weight: bold;
    color: $primary-color;
    
    &--highlight {
      color: $accent-color;
    }
  }
}

/* Onde está essa variável $spacing-lg? Em qual arquivo? */
/* Se eu mudar o user-card, vai quebrar o product-card que herda dele? */


/* ✅ TAILWIND - O Jeito Moderno */
/* Tudo está explícito. Nada está escondido. */

<div class="flex p-6 shadow-lg rounded-xl">
  <img class="rounded-full mr-4" />
  <div>
    <h3 class="font-bold text-blue-600">Título</h3>
    <p class="text-yellow-500">Destaque</p>
  </div>
</div>`,
    codeLabel: 'manutenibilidade.css',
    lang: 'scss',
    tip: 'Tailwind não é sobre escrever menos. É sobre escrever CÓDIGO MAIS MANUTENÍVEL. A verbosidade do HTML é o preço (baixo) que pagamos pela sanidade do CSS.'
  }
]

const filteredSections = computed(() => {
  return docSections.filter(section => section.category === activeTab.value)
})

useHead({
  title: 'Tailwind CSS Masterclass - Aprenda Nuxt 4',
  meta: [
    { name: 'description', content: 'Guia completo de Tailwind CSS com exemplos práticos: Utility-First, Layouts, Componentes, Responsividade e mais.' }
  ]
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
