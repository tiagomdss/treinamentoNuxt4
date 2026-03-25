<script setup lang="ts">
import { folderZones } from '~/data/training'

const environmentChecklist = [
  'SQL Server com schema Ntl acessivel',
  'vendor/autoload.php instalado via Composer',
  'Constantes de conexao e credenciais fora do repo',
  'Sessao PHP habilitada',
  'Pastas de upload com permissao de escrita',
  'Secrets FTP se o deploy automatico for usado'
]

useSeoMeta({
  title: 'Sobre o PHP | Treinamento Neeo',
  description: 'Conhecimentos fundamentais oficiais reunidos do Treinamento 2024.'
})

const activeTab = ref(0)
const tabs = [
  { label: 'Características Formacionais', icon: 'lucide:brain' },
  { label: 'Treinamento e Padrões', icon: 'lucide:graduation-cap' },
  { label: 'Organização e Telas', icon: 'lucide:layers' },
  { label: 'Projetos e Processos NTL', icon: 'lucide:briefcase' }
]

const zoomedImage = ref<string | null>(null)
</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase mb-6">
        <Icon name="vscode-icons:file-type-php" class="w-5 h-5" /> Base Fundamental
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Tudo Sobre PHP & O Sistema NTL</h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
        Todo o conteúdo extraído do Padrão Oficial 2024 e do atlas do projeto para você dominar a base antes de codar.
      </p>
    </div>

    <!-- Mapeamento Geográfico & Checklist (Moved from index) -->
    <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-20">
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-[#00DC82] bg-clip-text text-transparent">Mapeamento Geográfico (Atlas)</h2>
          <p class="text-slate-600 dark:text-slate-400 mt-2">Abra os arquivos certos antes de mexer em qualquer coisa. Aprenda como se estivesse pegando uma tarefa real.</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="zone in folderZones" :key="zone.name" class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
            <span class="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">{{ zone.count }}</span>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-3">{{ zone.name }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">{{ zone.summary }}</p>
            <p class="text-xs font-semibold text-emerald-500 mt-4">{{ zone.connect }}</p>
          </div>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Checklist de Ambiente</h2>
        <div class="bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-white/5">
          <div class="space-y-3">
            <div v-for="item in environmentChecklist" :key="item" class="flex items-start gap-3">
              <Icon name="lucide:check-square" class="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PDF Download Block -->
    <div class="py-8 relative z-10 mb-12 border border-indigo-500/20 rounded-[2.5rem] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-xl overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-2xl opacity-60"></div>
      <div class="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Icon name="lucide:book-open-check" class="w-4 h-4" /> Passo a Passo Fundamental
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Padrão <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">2024</span> Oficial
          </h2>
          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Baixe o guia oficial de treinamento 2024. É o mapa essencial com todos os padrões que um desenvolvedor NTL precisa aplicar na prática diária. Não ouse codar sem lê-lo.
          </p>
        </div>
        <div class="shrink-0 w-full md:w-auto">
          <a href="/treinamento-2024.pdf" target="_blank" download class="group relative flex w-full justify-center md:inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-500 hover:to-pink-400 text-white font-bold px-10 py-5 text-xl rounded-2xl transition-all duration-300 hover:scale-[1.03] shadow-[0_0_40px_rgba(99,102,241,0.4)] overflow-hidden">
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <Icon name="lucide:download-cloud" class="w-7 h-7 animate-bounce relative z-10" />
            <span class="relative z-10">Baixar PDF Completo</span>
          </a>
        </div>
      </div>
    </div>

    <!-- PDF Extracted Content with Tabs -->
    <div class="border-t border-slate-200 dark:border-white/10 pt-16">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Conteúdo do Treinamento 2024</h2>
      </div>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Vertical Tabs -->
        <div class="w-full md:w-64 shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 scrollbar-hide">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            @click="activeTab = index"
            class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal font-semibold text-left"
            :class="activeTab === index ? 'bg-indigo-500 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
          >
            <Icon :name="tab.icon" class="w-5 h-5" />
            <span class="text-sm">{{ tab.label }}</span>
          </button>
        </div>

        <!-- Tab Content -->
        <div class="flex-1 bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-xl min-h-[500px]">
          <transition name="fade" mode="out-in">
            <div :key="activeTab" class="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
              
              <!-- TAB 0 -->
              <div v-if="activeTab === 0" class="space-y-6">
                <h3 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-900 pb-2">Características Pessoais & Habilidades</h3>
                <p>Antes de começarmos a escrever códigos, precisamos falar sobre algumas características pessoais e habilidades técnicas que todo programador deverá possuir e sempre irão lhe acompanhar em sua vida.</p>
                
                <h4 class="font-bold text-lg mt-6 text-slate-900 dark:text-white flex items-center gap-2"><Icon name="lucide:user" class="text-emerald-500" /> Características Pessoais</h4>
                <ul class="list-none space-y-2 mt-2">
                  <li class="flex items-center gap-2"><Icon name="lucide:check-circle-2" class="w-5 h-5 text-emerald-500" /> Comunicação, Persistência, Curiosidade e Vontade de aprender</li>
                  <li class="flex items-center gap-2"><Icon name="lucide:check-circle-2" class="w-5 h-5 text-emerald-500" /> Capacidade de resolver problemas</li>
                  <li class="flex items-center gap-2"><Icon name="lucide:check-circle-2" class="w-5 h-5 text-emerald-500" /> Atenção aos detalhes e Trabalho em equipe</li>
                  <li class="flex items-center gap-2"><Icon name="lucide:check-circle-2" class="w-5 h-5 text-emerald-500" /> Autodisciplina</li>
                </ul>

                <h4 class="font-bold text-lg mt-6 text-slate-900 dark:text-white flex items-center gap-2"><Icon name="lucide:code" class="text-emerald-500" /> Habilidades Técnicas</h4>
                <div class="grid sm:grid-cols-2 gap-4 mt-2">
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">1</span> Raciocínio lógico e Lógica de Programação</div>
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">2</span> Proficiência em linguagem de programação</div>
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">3</span> Estruturas de dados e Algoritmos</div>
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">4</span> Controle de versionamento</div>
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">5</span> Design de software e arquitetura</div>
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">6</span> Banco de Dados e SQL avançado</div>
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">7</span> Automação de serviços</div>
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-bold text-emerald-600">8</span> Segurança da informação</div>
                </div>
              </div>

              <!-- TAB 1 -->
              <div v-if="activeTab === 1" class="space-y-6">
                <h3 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-900 pb-2">Treinamento Base</h3>
                <p>Para começarmos a pôr a mão na massa, precisamos falar sobre algumas tecnologias. Para melhor entendermos como funciona páginas WEB, assimilaremos as tecnologias abaixo como o corpo humano que é composto por peles, ossos, e músculos.</p>
                
                <div class="space-y-4 my-6">
                  <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-l-4 border-orange-500">
                    <strong>HTML:</strong> A linguagem de Marcação. É o que define nossas <em>características ósseas</em>.
                  </div>
                  <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>CSS:</strong> Folhas de estilo em cascata. É responsável por nossas <em>características visuais</em> (peles e músculos).
                  </div>
                  <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-l-4 border-yellow-400">
                    <strong>JavaScript:</strong> Linguagem interpretada. Responsável pelas nossas <em>ações e movimentos</em>.
                  </div>
                  <div class="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl border-l-4 border-indigo-500">
                    <strong>PHP:</strong> Executa todos os arquivos HTML, CSS e JS do lado do servidor. O <em>sistema nervoso central</em> da NTL.
                  </div>
                  <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-l-4 border-emerald-500">
                    <strong>SQL:</strong> Linguagem de banco de dados. Responsável por <em>guardar nossas memórias</em> e relacionamentos.
                  </div>
                </div>
                
                <h4 class="font-bold text-lg mt-6">Links e Referências:</h4>
                <div class="flex flex-wrap gap-2">
                  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs text-indigo-500 hover:bg-indigo-50">MDN: HTML</a>
                  <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs text-indigo-500 hover:bg-indigo-50">MDN: CSS</a>
                  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs text-indigo-500 hover:bg-indigo-50">MDN: JS</a>
                  <a href="https://www.w3schools.com/sql/" target="_blank" class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs text-indigo-500 hover:bg-indigo-50">W3Schools: SQL</a>
                </div>
              </div>

              <!-- TAB 2 -->
              <div v-if="activeTab === 2" class="space-y-6">
                <h3 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-900 pb-2">Organização das Telas NTL</h3>
                <p>O framework é organizado pelo arquivo de visualização (<strong>view</strong>), controlador (<strong>business</strong>) e model (<strong>sqlscope</strong>) aonde o view terá a responsabilidade de ser a parte que o usuário fará a interação, o bussines será o responsável por enviar os dados via HTTPS para o sqlscope, que trata os dados para o banco.</p>

                <div class="my-8">
                  <h4 class="font-bold text-xl mb-4 text-slate-900 dark:text-white">Menu Lateral</h4>
                  <p class="mb-4">Para configurarmos o menu lateral teremos que abrir o arquivo <code>config.ui.php</code> na pasta inc. Para criarmos um sub menu, você deverá criar um menu "Tabela Básica" e dentro dele os sub-arrays correspondentes.</p>
                  <div class="grid md:grid-cols-2 gap-4">
                    <img src="/treinamento_extraido/imagem1.png" alt="Menu Lateral 1" class="rounded-xl border border-slate-200 dark:border-slate-700 shadow-md w-full cursor-zoom-in hover:ring-2 hover:ring-indigo-500 transition-all" @click="zoomedImage = '/treinamento_extraido/imagem1.png'" />
                    <img src="/treinamento_extraido/imagem2.png" alt="Menu Lateral 2" class="rounded-xl border border-slate-200 dark:border-slate-700 shadow-md w-full cursor-zoom-in hover:ring-2 hover:ring-indigo-500 transition-all" @click="zoomedImage = '/treinamento_extraido/imagem2.png'" />
<div class="bg-[#0f172a] rounded-xl border border-slate-700/50 my-4 overflow-hidden shadow-xl col-span-1 md:col-span-2">
  <div class="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
    <div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-red-400/80"></div><div class="w-3 h-3 rounded-full bg-amber-400/80"></div><div class="w-3 h-3 rounded-full bg-green-400/80"></div></div>
    <span class="ml-4 text-xs font-mono text-slate-400">config.ui.php</span>
  </div>
  <div class="p-4 overflow-x-auto">
<pre class="text-sm font-mono leading-relaxed text-slate-300">
<span class="text-emerald-400">$page_nav</span> = <span class="text-blue-400">array</span>(<span class="text-yellow-300">"home"</span> =>
    <span class="text-blue-400">array</span>(
        <span class="text-yellow-300">"title"</span> => <span class="text-yellow-300">"Home"</span>,
        <span class="text-yellow-300">"icon"</span> => <span class="text-yellow-300">"fa-home"</span>,
        <span class="text-yellow-300">"url"</span> => <span class="text-indigo-300">APP_URL</span> . <span class="text-yellow-300">"/index.php"</span>
    )
);

<span class="text-emerald-400">$page_nav</span>[<span class="text-yellow-300">'tabelaBasica'</span>] = <span class="text-blue-400">array</span>(
    <span class="text-yellow-300">"title"</span> => <span class="text-yellow-300">"Tabela Básica"</span>,
    <span class="text-yellow-300">"icon"</span> => <span class="text-yellow-300">"fa-table"</span>);

<span class="text-emerald-400">$page_nav</span>[<span class="text-yellow-300">'tabelaBasica'</span>][<span class="text-yellow-300">'sub'</span>] = <span class="text-blue-400">array</span>();
</pre>
  </div>
</div>
                  </div>
                </div>

                <div class="my-8">
                  <h4 class="font-bold text-xl mb-4 text-slate-900 dark:text-white">Estrutura de Arquivos (Telas)</h4>
                  <p class="mb-4">Todas as telas são compostas por 4 arquivos: filtro, listagem, cadastro, business e sqlscope. A tela de filtro e cadastro se dividem em 4 partes: Configuração (permissões, includes), Corpo HTML, Importação de arquivos e Funcionalidades (Event Listeners).</p>
                  <div class="space-y-4">
<div class="bg-[#0f172a] rounded-xl border border-slate-700/50 my-4 overflow-hidden shadow-xl">
  <div class="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
    <div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-red-400/80"></div><div class="w-3 h-3 rounded-full bg-amber-400/80"></div><div class="w-3 h-3 rounded-full bg-green-400/80"></div></div>
    <span class="ml-4 text-xs font-mono text-slate-400">tabelaBasica_sexoFiltro.php</span>
  </div>
  <div class="p-4 overflow-x-auto">
<pre class="text-sm font-mono leading-relaxed text-slate-300">
<span class="text-emerald-400">$condicaoAcessarOK</span> = (<span class="text-blue-400">in_array</span>(<span class="text-yellow-300">'NOMEDAPERMISSAO'</span>, <span class="text-emerald-400">$arrayPermissao</span>, <span class="text-purple-400">true</span>));

<span class="text-purple-400">if</span> (<span class="text-emerald-400">$condicaoAcessarOK</span> == <span class="text-purple-400">false</span>) {
    <span class="text-blue-400">unset</span>(<span class="text-emerald-400">$_SESSION</span>[<span class="text-yellow-300">'login'</span>]);
    <span class="text-blue-400">header</span>(<span class="text-yellow-300">"Location:login.php"</span>);
}

<span class="text-slate-500">/* ------------- PHP Custom Scripts ---------
   YOU CAN SET CONFIGURATION VARIABLES HERE BEFORE IT GOES TO NAV, RIBBON, ...
   E.G. $page_title = "Custom Title" */</span>

<span class="text-emerald-400">$page_title</span> = <span class="text-yellow-300">"Sexo"</span>;

<span class="text-slate-500">//include header</span>
<span class="text-emerald-400">$page_css</span>[] = <span class="text-yellow-300">"your_style.css"</span>;
<span class="text-blue-400">include</span>(<span class="text-yellow-300">"inc/header.php"</span>);

<span class="text-slate-500">//include left panel (navigation)</span>
<span class="text-emerald-400">$page_nav</span>[<span class="text-yellow-300">"cadastro"</span>][<span class="text-yellow-300">"sub"</span>][<span class="text-yellow-300">"empresa"</span>][<span class="text-yellow-300">"active"</span>] = <span class="text-purple-400">true</span>;
</pre>
  </div>
</div>
<img src="/treinamento_extraido/imagem6.png" alt="Includes Bottom" class="rounded-xl border border-slate-200 dark:border-slate-700 shadow-md w-full my-4 cursor-zoom-in hover:ring-2 hover:ring-indigo-500 transition-all" @click="zoomedImage = '/treinamento_extraido/imagem6.png'" />
<div class="bg-[#0f172a] rounded-xl border border-slate-700/50 my-4 overflow-hidden shadow-xl">
  <div class="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
    <div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-red-400/80"></div><div class="w-3 h-3 rounded-full bg-amber-400/80"></div><div class="w-3 h-3 rounded-full bg-green-400/80"></div></div>
    <span class="ml-4 text-xs font-mono text-slate-400">scripts.php</span>
  </div>
  <div class="p-4 overflow-x-auto">
<pre class="text-sm font-mono leading-relaxed text-slate-300">
<span class="text-slate-500">&lt;!-- PAGE FOOTER --&gt;</span>
<span class="text-red-400">&lt;?php</span>
<span class="text-blue-400">include</span>(<span class="text-yellow-300">"inc/footer.php"</span>);
<span class="text-red-400">?&gt;</span>
<span class="text-slate-500">&lt;!-- END PAGE FOOTER --&gt;</span>

<span class="text-red-400">&lt;?php</span>
<span class="text-slate-500">//include required scripts</span>
<span class="text-blue-400">include</span>(<span class="text-yellow-300">"inc/scripts.php"</span>);
<span class="text-red-400">?&gt;</span>

<span class="text-slate-500">&lt;!-- Flot Chart Plugin: Flot Engine, Flot Resizer, Flot Tooltip --&gt;</span>
&lt;<span class="text-blue-400">script</span> src=<span class="text-yellow-300">"&lt;?php echo ASSETS_URL; ?&gt;/js/plugin/flot/jquery.flot.cust.min.js"</span>&gt;&lt;/<span class="text-blue-400">script</span>&gt;
&lt;<span class="text-blue-400">script</span> src=<span class="text-yellow-300">"&lt;?php echo ASSETS_URL; ?&gt;/js/plugin/flot/jquery.flot.resize.min.js"</span>&gt;&lt;/<span class="text-blue-400">script</span>&gt;

<span class="text-slate-500">&lt;!-- Full Calendar --&gt;</span>
&lt;<span class="text-blue-400">script</span> src=<span class="text-yellow-300">"&lt;?php echo ASSETS_URL; ?&gt;/js/plugin/moment/moment.min.js"</span>&gt;&lt;/<span class="text-blue-400">script</span>&gt;
&lt;<span class="text-blue-400">script</span> src=<span class="text-yellow-300">"&lt;?php echo ASSETS_URL; ?&gt;/js/plugin/fullcalendar/fullcalendar.js"</span>&gt;&lt;/<span class="text-blue-400">script</span>&gt;
</pre>
  </div>
</div>
                  </div>
                </div>

                <div class="my-8 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                  <h4 class="font-bold text-xl mb-4 text-blue-900 dark:text-blue-400">Camada Business</h4>
                  <p class="mb-4 text-blue-800 dark:text-blue-300">O arquivo de business é o responsável de transportar os dados da tela para o sqlscope via requisições assíncronas (HTTPS).</p>
<div class="bg-[#0f172a] rounded-xl border border-slate-700/50 my-4 overflow-hidden shadow-xl">
  <div class="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
    <div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-red-400/80"></div><div class="w-3 h-3 rounded-full bg-amber-400/80"></div><div class="w-3 h-3 rounded-full bg-green-400/80"></div></div>
    <span class="ml-4 text-xs font-mono text-slate-400">script.js</span>
  </div>
  <div class="p-4 overflow-x-auto">
<pre class="text-sm font-mono leading-relaxed text-slate-300">
&lt;<span class="text-blue-400">script</span>&gt;
  <span class="text-blue-400">$</span>(<span class="text-cyan-300">document</span>).<span class="text-blue-300">ready</span>(<span class="text-purple-400">function</span>() {
    <span class="text-blue-400">$</span>(<span class="text-yellow-300">'#btnSearch'</span>).<span class="text-blue-300">on</span>(<span class="text-yellow-300">"click"</span>, <span class="text-purple-400">function</span>() {
      <span class="text-blue-300">listarFiltro</span>();
    });
    <span class="text-blue-400">$</span>(<span class="text-yellow-300">'#btnNovo'</span>).<span class="text-blue-300">on</span>(<span class="text-yellow-300">"click"</span>, <span class="text-purple-400">function</span>() {
      <span class="text-blue-300">novo</span>();
    });
  });

  <span class="text-purple-400">function</span> <span class="text-blue-300">listarFiltro</span>() {
    <span class="text-purple-400">var</span> <span class="text-blue-400">descricao</span> = <span class="text-blue-400">$</span>(<span class="text-yellow-300">'#descricao'</span>).<span class="text-blue-300">val</span>();
    <span class="text-purple-400">var</span> <span class="text-blue-400">ativo</span> = <span class="text-blue-400">$</span>(<span class="text-yellow-300">'#ativo'</span>).<span class="text-blue-300">val</span>();

    <span class="text-blue-400">$</span>(<span class="text-yellow-300">'#resultadoBusca'</span>).<span class="text-blue-300">load</span>(<span class="text-yellow-300">'tabelaBasica_sexoFiltroListagem.php?'</span>, {
      <span class="text-blue-400">descricao</span>: descricao,
      <span class="text-blue-400">ativo</span>: ativo
    });
  }

  <span class="text-purple-400">function</span> <span class="text-blue-300">novo</span>() {
    <span class="text-blue-400">$</span>(location).<span class="text-blue-300">attr</span>(<span class="text-yellow-300">'href'</span>, <span class="text-yellow-300">'tabelaBasica_sexoCadastro.php'</span>);
  }
&lt;/<span class="text-blue-400">script</span>&gt;
</pre>
  </div>
</div>
                </div>
              </div>

              <!-- TAB 3 -->
              <div v-if="activeTab === 3" class="space-y-6">
                <h3 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-900 pb-2">Projetos e Processos NTL (Sqlscope)</h3>
                
                <p>O <strong>sqlscope</strong> é onde você tratará os dados recebidos das telas de cadastro e formatará (ex: datas para <code>YYYY-MM-DD</code>) antes de salvá-los com procedures ou queries.</p>

                <h4 class="font-bold text-xl mt-8">Passo a Passo Prático do Projeto: Tela Cadastro de Funcionário</h4>
                
                <div class="space-y-6 mt-4">
                  <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <h5 class="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">1. Tabelas Básicas e Filtro</h5>
                    <p>Crie o menu "Cadastro/Funcionário". A tela precisa de campos como Nome Completo, CPF, RG, Data de Nascimento, Gênero. Crie 3 telas básicas auxiliares para popular a tela maior: Estado Civil, Gênero, Sexualidade.</p>
                    <img src="/treinamento_extraido/imagem9.png" alt="Tela Funcionário" class="mt-4 rounded-xl border border-slate-200 dark:border-slate-600 shadow-sm w-full cursor-zoom-in hover:ring-2 hover:ring-indigo-500 transition-all" @click="zoomedImage = '/treinamento_extraido/imagem9.png'" />
                  </div>

                  <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <h5 class="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">2. Aprimoramento e Validações</h5>
                    <p>Adicione accordions para Endereço (CEP, Logradouro, Bairro), e garanta validações estritas no banco: <strong>CPF</strong> (máscara, nunca duplicar), <strong>RG</strong> (máscara), e data lógica (Idade > 15 anos).</p>
                  </div>

                  <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <h5 class="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">3. Contato e Dependentes</h5>
                    <p>Crie um accordion "Contato" com listagens (Telefones, E-mail) e um accordion "Dependentes" para plano de saúde.</p>
                    <div class="grid md:grid-cols-2 gap-4 mt-4">
                      <img src="/treinamento_extraido/imagem10.png" alt="Contato" class="rounded-xl border border-slate-200 dark:border-slate-600 shadow-sm w-full cursor-zoom-in hover:ring-2 hover:ring-indigo-500 transition-all" @click="zoomedImage = '/treinamento_extraido/imagem10.png'" />
                      <img src="/treinamento_extraido/imagem11.png" alt="Dependentes" class="rounded-xl border border-slate-200 dark:border-slate-600 shadow-sm w-full cursor-zoom-in hover:ring-2 hover:ring-indigo-500 transition-all" @click="zoomedImage = '/treinamento_extraido/imagem11.png'" />
                    </div>
                  </div>

                  <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
                    <h5 class="font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-2">4. Etapa Final: Uploads e PDFs</h5>
                    <p>Adicione envio de documentos (Foto RG, Comprovante). No filtro, crie autocompletes de Cpf e nomes. Use botões laterais na listagem para gerar um <strong>Relatório PDF Individual</strong> ou um modelo completo da lista inteira.</p>
                  </div>
                </div>
              </div>

            </div>
          </transition>
        </div>
      </div>
    </div>
  <!-- Full-screen Image Modal -->
  <transition name="fade">
    <div 
      v-if="zoomedImage" 
      class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
      @click="zoomedImage = null"
    >
      <div class="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
          <button class="absolute top-4 right-4 text-white hover:text-red-400 z-[101] bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors">
              <Icon name="lucide:x" class="w-6 h-6" />
          </button>
          <img :src="zoomedImage" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl ring-1 ring-white/20" />
      </div>
    </div>
  </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
