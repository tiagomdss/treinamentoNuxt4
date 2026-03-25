<script setup lang="ts">
useSeoMeta({
  title: 'HTML Semântico | Treinamento Neeo',
  description: 'O esqueleto fundamental da web. Aprenda as tags essenciais, semântica corporativa e melhores práticas NTL.'
})

const htmlTopics = [
  {
    title: 'Estruturação Semântica',
    icon: 'lucide:layout-template',
    color: 'emerald',
    content: 'O HTML5 trouxe tags semânticas (header, nav, main, section, article, footer) que têm significado para os browsers e leitores de tela. No padrão corporativo, usar <div> para tudo é uma má prática. O uso correto das tags melhora o SEO, garante o fluxo natural de leitura (flow content) e facilita a manutenção do código por outras equipes.'
  },
  {
    title: 'Formulários e Validações',
    icon: 'lucide:form-input',
    color: 'blue',
    content: 'Entradas de dados são críticas. Use sempre rótulos (labels) linkados pelos IDs, e conheça os tipos modernos de input (email, tel, url, date, number). No ecossistema NTL, os formulários HTML trabalham em simetria de validação com o Vue (via v-model/Zod) antes mesmo dos dados fluírem para a Business layer via POST.'
  },
  {
    title: 'Acessibilidade (a11y)',
    icon: 'lucide:accessibility',
    color: 'purple',
    content: 'A integridade do DOM não é puramente visual. Para interfaces cegas e automatizadas, os atributos "aria-*" informam estados como botões expandidos, inputs com erros e regiões live. Garantir contraste dinâmico, tamanhos de fontes em rem, e navegação limpa por [TAB] é exigência em projetos maduros.'
  },
  {
    title: 'Análise de Fluxo de Mídia',
    icon: 'lucide:image',
    color: 'orange',
    content: 'Em telas avançadas, imagens carregadas de forma pesada bloqueiam as threads. Use atributos como "loading=lazy" nas tags <img> offscreen e especifique largura/altura explicitamente para o navegador reservar o espaço correto, prevenindo as temidas Cumulative Layout Shifts (CLS).'
  }
]

const codeExample = `<!-- Estrutura NTL de Formulário Moderno -->
<form @submit.prevent="submitCadastro">
  <fieldset class="border border-slate-200 rounded-xl p-6">
    <legend class="text-lg font-bold">Dados do Colaborador</legend>
    
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div class="form-group">
        <label for="nome_completo">Nome Completo</label>
        <input 
          type="text" 
          id="nome_completo" 
          v-model="dados.nome_completo" 
          required 
          autocomplete="name" 
        />
      </div>

      <div class="form-group">
        <label for="nascimento">Data de Nascimento</label>
        <input 
          type="date" 
          id="nascimento" 
          v-model="dados.nascimento" 
          required 
        />
      </div>
    </div>
  </fieldset>
</form>`
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    
    <!-- Hero Section -->
    <div class="relative bg-orange-500/10 border border-orange-500/20 rounded-[3rem] p-12 overflow-hidden mb-16 text-center">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400/20 via-transparent to-transparent pointer-events-none"></div>
      
      <Icon name="vscode-icons:file-type-html" class="w-24 h-24 mx-auto drop-shadow-2xl mb-6 hover:scale-110 transition-transform duration-500" />
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
        Fundação <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">HTML5</span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
        Domine a espinha dorsal de qualquer aplicação. Entenda as engrenagens semânticas, a renderização progressiva do DOM e as regras restritas do padrão de formulários.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1.5fr_1fr] gap-12">
      <!-- Deep Content -->
      <div class="space-y-8">
        <div v-for="topic in htmlTopics" :key="topic.title" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
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
        <!-- Live Code Block Preview Idea -->
        <div class="bg-[#1e1e1e] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800">
          <div class="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-slate-700">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="ml-4 text-xs font-mono text-slate-400">form-padrao.html</span>
          </div>
          <div class="p-6 overflow-x-auto text-sm font-mono text-emerald-400/90 whitespace-pre">
            {{ codeExample }}
          </div>
        </div>

        <!-- Principles SideCard -->
        <div class="bg-gradient-to-br from-slate-100 to-white dark:from-slate-900/80 dark:to-slate-800/50 p-8 rounded-[2rem] border border-slate-200 dark:border-white/5">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm text-slate-500">Checklist do Frontend</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle-2" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Todos os IDs devem ser estritamente únicos na página inteira.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle-2" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Sempre utilize atributos 'alt' ou 'aria-label' descritivos.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle-2" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Jamais aninhe âncoras (&lt;a&gt;) ou botões dentro de botões.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle-2" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">A hierarquia de tags H1 a H6 deve ser perfeitamente linear e sem pulos.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
