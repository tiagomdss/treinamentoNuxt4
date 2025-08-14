<script setup lang="ts">
import { computed } from 'vue'
import { useFetch, useState } from '#app'
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import konamiGif from '@/assets/img/secret.gif'

type Folder = {
  icon: string
  name: string
  description: string
  details: string
  analogy: string
  code: string
  visualDemo: 'app' | 'page' | 'component' | 'layout' | 'server_vs_store'
}

// Interactive Lab state
const counter = ref(0)
const resetCounter = () => (counter.value = 0)

const searchQuery = ref('')
const { data: posts, pending: postsPending, refresh: refreshPosts } = await useFetch('/api/posts')
const filteredPosts = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return posts.value || []
  return (posts.value || []).filter(
    (p: any) => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q)
  )
})

// Extra mini demos
const titleInput = ref('Meu Novo Post')
const slug = computed(() =>
  titleInput.value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
)

const likes = ref(0)
const liking = ref(false)
const like = async () => {
  if (liking.value) return
  liking.value = true
  // Simula chamada ao servidor
  await new Promise(r => setTimeout(r, 600))
  likes.value++
  liking.value = false
}

// Global state demo
const labCount = useState<number>('labCount', () => 0)

const folderDemoHtml = (folder: Folder) => {
  if (folder.visualDemo === 'layout') {
    return getTemplateContent(folder.code).replace(
      '<slot />',
      "<div class='flex-grow flex items-center justify-center'>Conteúdo da Página Fica Aqui</div>"
    )
  }
  if (folder.visualDemo === 'page' || folder.visualDemo === 'component') {
    return getTemplateContent(folder.code)
  }
  if (folder.visualDemo === 'app') {
    return `<pre class='text-left whitespace-pre-wrap'>${folder.code}</pre>`
  }
  return `<div class='text-center'>
    <div class='mb-2 p-2 border rounded border-blue-500 bg-blue-100 text-blue-800'><strong>Server:</strong> Pega dados do banco.</div>
    <div class='text-2xl'>⬇️</div>
    <div class='p-2 border rounded border-green-500 bg-green-100 text-green-800'><strong>Store:</strong> Guarda os dados no navegador.</div>
  </div>`
}

type Concept = { title: string; content: string }

const htmlEl = ref<HTMLElement | null>(null)

const logoClicked = ref(false)

const activeAnchor = ref<string>('welcome')

const onLogoClick = () => {
  logoClicked.value = true
  setTimeout(() => {
    logoClicked.value = false
  }, 500)
}

// Konami Code Easter Egg
const easterVisible = ref(false)
const konami = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
]
let konamiIndex = 0
let hideTimer: number | undefined

const onKeydown = (e: KeyboardEvent) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
  if (key === konami[konamiIndex]) {
    konamiIndex++
    if (konamiIndex === konami.length) {
      konamiIndex = 0
      triggerEaster()
    }
  } else {
    // reset logic: if current key equals first, set index 1, else reset 0
    konamiIndex = key === konami[0] ? 1 : 0
  }
}

const triggerEaster = () => {
  easterVisible.value = true
  if (hideTimer) window.clearTimeout(hideTimer)
  hideTimer = window.setTimeout(() => {
    easterVisible.value = false
  }, 10000)
}

const foldersData = reactive<Folder[]>([
  {
    icon: '🏠',
    name: 'app/',
    description: 'A nova casa para todo o seu código frontend.',
    details:
      'No Nuxt 4, esta é a grande novidade! Para organizar melhor os projetos, pastas como `pages`, `components`, `layouts`, e `composables` agora vivem dentro do diretório `app/`. Isso separa claramente o código da sua aplicação das configurações do projeto.',
    analogy:
      'Imagine que seu projeto é uma casa. A pasta `app/` são todos os cômodos: a sala (`pages`), os móveis (`components`), a planta baixa (`layouts`). O resto do projeto são as fundações e a garagem (`server/`, `nuxt.config.ts`).',
    code: `meu-projeto/\n├── app/\n│   ├── components/\n│   ├── layouts/\n│   └── pages/\n├── server/\n└── nuxt.config.ts`,
    visualDemo: 'app'
  },
  {
    icon: '📄',
    name: 'pages',
    description: 'Cria as rotas (URLs) do seu site automaticamente.',
    details:
      'Cada arquivo `.vue` que você coloca aqui se torna uma página. Por exemplo, `pages/produtos.vue` se torna a URL `/produtos`.',
    analogy:
      'Pense nela como o índice de um livro. Cada capítulo (página) tem seu próprio número de página (URL).',
    code: `<!-- app/pages/produtos.vue -->\n<template>\n  <h1 class="text-2xl font-bold">Nossos Produtos</h1>\n</template>`,
    visualDemo: 'page'
  },
  {
    icon: '🧱',
    name: 'components',
    description: 'Guarda seus componentes reutilizáveis (peças de LEGO).',
    details:
      'Componentes são pedaços da sua interface que você pode usar em vários lugares. O Nuxt os importa automaticamente!',
    analogy:
      'Sua caixa de LEGO. Você constrói peças legais uma vez e pode usá-las para montar qualquer coisa, em qualquer página.',
    code: `<!-- app/components/Alerta.vue -->\n<template>\n  <div class="bg-yellow-200 p-4 rounded border border-yellow-300 text-yellow-800">\n    Atenção!\n  </div>\n</template>`,
    visualDemo: 'component'
  },
  {
    icon: '🎨',
    name: 'layouts',
    description: 'Define a estrutura visual das suas páginas.',
    details:
      'Quer que todas as suas páginas tenham o mesmo cabeçalho e rodapé? Crie um layout e aplique-o.',
    analogy:
      'A moldura de um quadro. O conteúdo (a página) muda, mas a moldura (cabeçalho, rodapé) permanece a mesma.',
    code: `<!-- app/layouts/default.vue -->\n<template>\n  <div class="w-full h-full flex flex-col">\n    <header class="bg-green-500 text-white p-3 text-center">Meu Site</header>\n    <main class="flex-grow p-4"><slot /></main>\n    <footer class="bg-blue-500 text-white p-3 text-center">© 2025</footer>\n  </div>\n</template>`,
    visualDemo: 'layout'
  },
  {
    icon: '🧠 vs 🗄️',
    name: 'server/ vs. store/',
    description: 'Backend (API) vs. Estado do Frontend (Memória).',
    details:
      'Esta é uma dúvida comum! <strong><code>server/</code></strong>: É a sua cozinha (backend). Aqui você cria APIs, conversa com bancos de dados e faz tarefas pesadas. O código aqui só roda no servidor. <strong><code>store/</code></strong> (ou <code>stores/</code> com Pinia): É a "memória" compartilhada do seu frontend. Guarda informações que vários componentes precisam acessar, como o status de login de um usuário ou o conteúdo de um carrinho de compras.',
    analogy:
      '<code>server/</code> é o chef na cozinha preparando o prato. <code>store/</code> é o garçom que sabe o pedido de cada mesa e o que está acontecendo no salão.',
    code: `// server/api/user.ts -> Busca o usuário no banco de dados (Backend)\n\n// stores/user.ts -> Guarda os dados do usuário logado para mostrar o nome dele em várias páginas (Frontend)`,
    visualDemo: 'server_vs_store'
  }
])

const conceptsData = reactive<Concept[]>([
  {
    title: 'Renderização no Servidor (SSR)',
    content:
      'O Nuxt pré-renderiza suas páginas no servidor. Isso significa que o navegador recebe uma página HTML completa, o que é ótimo para <strong>SEO (mecanismos de busca)</strong> e para a <strong>percepção de velocidade</strong> do usuário. Depois, o Vue.js "hidrata" a página, tornando-a interativa.'
  },
  {
    title: 'Busca de Dados Universal (useFetch)',
    content:
      'O composable <code>useFetch</code> é a forma padrão de buscar dados. Ele funciona tanto no servidor (para a renderização inicial) quanto no cliente (para navegações). O Nuxt otimiza isso automaticamente, evitando buscas duplicadas e garantindo que os dados estejam disponíveis onde e quando você precisar. É a ferramenta principal para se comunicar com sua API ou APIs externas.'
  },
  {
    title: 'Estado Compartilhado (useState)',
    content:
      'Para compartilhar um estado reativo (como informações do usuário logado) entre componentes de forma segura para SSR, use <code>useState</code>. Ele garante que o estado criado no servidor seja transferido corretamente para o cliente, evitando erros de hidratação. É como uma "memória global" para sua aplicação.'
  },
  {
    title: 'Auto-Imports (A Mágica do Nuxt)',
    content:
      'Você não precisa importar manualmente seus componentes, composables ou plugins. O Nuxt escaneia seus diretórios e os torna disponíveis globalmente. Isso acelera muito o desenvolvimento, mas lembre-se: o nome do arquivo define o nome do componente/composable (ex: <code>components/MeuBotao.vue</code> vira <code>&lt;MeuBotao /&gt;</code>).'
  },
  {
    title: 'Roteamento Dinâmico com Parâmetros',
    content:
      'Para criar páginas para itens específicos (como um post de blog ou um produto), você pode usar rotas dinâmicas. Crie um arquivo com colchetes, como <code>pages/produtos/[id].vue</code>. Dentro do script, você pode acessar o parâmetro <code>id</code> usando <code>const route = useRoute(); const id = route.params.id;</code>. Isso permite criar infinitas páginas a partir de um único arquivo.'
  },
  {
    title: 'Middleware (Protetores de Rota)',
    content:
      'Middleware são funções que rodam antes de navegar para uma rota. São perfeitos para proteger páginas que exigem login. Crie um arquivo em <code>middleware/auth.ts</code> e adicione <code>definePageMeta({ middleware: "auth" })</code> na página que você quer proteger. O middleware pode redirecionar o usuário se ele não estiver autenticado.'
  },
  {
    title: 'Módulos Nuxt',
    content:
      'Módulos são como "plugins" para o seu projeto Nuxt. Eles podem adicionar integrações com bibliotecas de UI (como Tailwind CSS), ferramentas de análise, ou adicionar novas funcionalidades ao framework. Você os adiciona no seu arquivo <code>nuxt.config.ts</code>.'
  }
])

const openFolders = ref<Record<number, boolean>>({})
const openConcepts = ref<Record<number, boolean>>({})
const openDemos = ref<Record<number, boolean>>({})

const toggleDemo = (i: number) => {
  openDemos.value[i] = !openDemos.value[i]
}

const copyToClipboard = async (text: string, btn?: EventTarget | null) => {
  try {
    await navigator.clipboard.writeText(text)
    const el = btn as HTMLElement | null
    if (el) {
      const original = el.innerText
      el.innerText = 'Copiado!'
      setTimeout(() => (el.innerText = original), 2000)
    }
  } catch (e) {
    console.error('Clipboard error', e)
  }
}

const getTemplateContent = (code: string) => {
  const match = code.match(/<template>([\s\S]*)<\/template>/)
  return match ? match[1].trim() : code
}

const snippets = {
  botao: `<template>\n  <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">\n    <slot />\n  </button>\n</template>`,
  usoBotao: `<template>\n  <div class="p-8">\n    <BotaoLegal>Clique em mim!</BotaoLegal>\n  </div>\n</template>`,
  apiPosts: `// server/api/posts.ts\nexport default defineEventHandler(() => [\n  { id: 1, title: 'Meu Primeiro Post', content: 'Nuxt é incrível!' },\n  { id: 2, title: 'Explorando Pastas', content: 'As convenções são poderosas.' },\n  { id: 3, title: 'Componentes Reutilizáveis', content: 'Não repita código!' }\n])`,
  blogList: `<script setup>\nconst { data: posts } = await useFetch('/api/posts')\n<\/script>\n<template>\n  <div class="p-8">\n    <h1 class="text-3xl font-bold mb-4">Meu Blog</h1>\n    <ul>\n      <li v-for="post in posts" :key="post.id">\n        <NuxtLink :to="'/blog/' + post.id" class="text-xl text-blue-500 hover:underline">\n          {{ post.title }}\n        </NuxtLink>\n      </li>\n    </ul>\n  </div>\n</template>`,
  blogDetail: `<script setup>\nconst route = useRoute()\nconst { data: post } = await useFetch('/api/posts/' + route.params.id)\n<\/script>\n<template>\n  <div class="p-8">\n    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>\n    <p>{{ post.content }}</p>\n    <NuxtLink to="/" class="text-blue-500 hover:underline mt-8 block">\n      &larr; Voltar para a lista\n    </NuxtLink>\n  </div>\n</template>`,
  apiPostId: `// server/api/posts/[id].ts\nconst posts = [\n  { id: 1, title: 'Meu Primeiro Post', content: 'Nuxt é incrível!' },\n  { id: 2, title: 'Explorando Pastas', content: 'As convenções são poderosas.' },\n  { id: 3, title: 'Componentes Reutilizáveis', content: 'Não repita código!' }\n]\n\nexport default defineEventHandler((event) => {\n  const postId = parseInt(event.context.params.id, 10)\n  const post = posts.find(p => p.id === postId)\n  if (!post) {\n    throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })\n  }\n  return post\n})`
}

// theme handled globally in layout

onMounted(() => {
  htmlEl.value = document.documentElement

  const sections = Array.from(document.querySelectorAll('section'))
  const navObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activeAnchor.value = entry.target.id
      })
    },
    { rootMargin: '-30% 0px -70% 0px' }
  )
  sections.forEach(s => navObserver.observe(s))

  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  if (hideTimer) window.clearTimeout(hideTimer)
})
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="lg:flex">
      <aside class="hidden lg:block w-64 py-12 pr-8">
        <div class="sticky top-12">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-lg">Sua Jornada Nuxt</h3>
          </div>
          <nav class="flex flex-col space-y-3 text-gray-500">
            <a href="#welcome" :class="['nav-link', activeAnchor==='welcome' && 'font-bold text-green-600']">🚀 Começando</a>
            <a href="#video" :class="['nav-link', activeAnchor==='video' && 'font-bold text-green-600']">🎥 Vídeo</a>
            <a href="#what-is-nuxt" :class="['nav-link', activeAnchor==='what-is-nuxt' && 'font-bold text-green-600']">🤔 O que é o Nuxt?</a>
            <a href="#folders" :class="['nav-link', activeAnchor==='folders' && 'font-bold text-green-600']">📁 Desvendando as Pastas</a>
            <a href="#first-component" :class="['nav-link', activeAnchor==='first-component' && 'font-bold text-green-600']">🧱 Seu Primeiro Componente</a>
            <a href="#concepts" :class="['nav-link', activeAnchor==='concepts' && 'font-bold text-green-600']">💡 Conceitos Essenciais</a>
            <a href="#practical-guide" :class="['nav-link', activeAnchor==='practical-guide' && 'font-bold text-green-600']">🛠️ Guia Prático</a>
            <a href="#lab" :class="['nav-link', activeAnchor==='lab' && 'font-bold text-green-600']">🔬 Laboratório</a>
            <a href="#next-steps" :class="['nav-link', activeAnchor==='next-steps' && 'font-bold text-green-600']">🎓 Próximos Passos</a>
          </nav>
        </div>
      </aside>

      <main class="flex-1 py-12 space-y-24">
        <section id="welcome" class="text-center scroll-mt-12">
          <h1
            class="text-5xl md:text-6xl font-extrabold mb-4 cursor-pointer transition-transform"
            :class="{ 'rotate-180 scale-110': logoClicked }"
            @click="onLogoClick"
          >
            Bem-vindo(a) ao <span class="text-green-600">Nuxt</span>!
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Prepare-se para uma aventura divertida no mundo do desenvolvimento web. Vamos aprender juntos, passo a passo, como criar aplicações incríveis!
          </p>
        </section>

        

        

        <section id="video" class="scroll-mt-12">
          <h2 class="text-4xl font-bold mb-6 inline-block border-b-4 border-green-400">🎥 Vídeo</h2>
          <div class="relative w-full overflow-hidden rounded-xl shadow card bg-white dark:bg-gray-800">
            <div class="aspect-video">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/1e7bdaFJ0ZA?si=ORWQAUbIV0zFNVMF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="what-is-nuxt" class="scroll-mt-12">
          <h2 class="text-4xl font-bold mb-6 inline-block border-b-4 border-green-400">🤔 O que é o Nuxt?</h2>
          <p class="text-lg text-gray-600 mb-8">
            Imagine que você quer construir um castelo de LEGO. Você poderia comprar cada peça separadamente, ou poderia comprar um kit que já vem com as peças principais, um manual de instruções e algumas peças mágicas que se montam sozinhas.
            <br /><br />
            O <strong>Nuxt é como esse kit de LEGO incrível</strong> para criar sites e aplicações web. Ele usa o poder do <span class="font-semibold text-green-600">Vue.js</span> (as peças) e adiciona superpoderes para tornar tudo mais fácil e rápido.
          </p>
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div class="card p-6 rounded-xl">
              <div class="text-5xl mb-3">🖼️</div>
              <h3 class="text-2xl font-bold mb-2">Vue.js</h3>
              <p class="text-gray-600">A base de tudo. É o que usamos para construir as partes visuais da sua aplicação.</p>
            </div>
            <div class="card p-6 rounded-xl">
              <div class="text-5xl mb-3">⚡</div>
              <h3 class="text-2xl font-bold mb-2">Vite</h3>
              <p class="text-gray-600">O motor super-rápido. Ele atualiza sua aplicação instantaneamente enquanto você programa.</p>
            </div>
            <div class="card p-6 rounded-xl">
              <div class="text-5xl mb-3">⚙️</div>
              <h3 class="text-2xl font-bold mb-2">Nitro</h3>
              <p class="text-gray-600">O cérebro por trás dos panos. Ele cuida da parte do servidor, tornando sua aplicação full-stack.</p>
            </div>
          </div>
        </section>

        <section id="folders" class="scroll-mt-12">
          <h2 class="text-4xl font-bold mb-2 inline-block border-b-4 border-green-400">📁 Desvendando as Pastas</h2>
          <p class="text-lg text-gray-600 mb-8">
            Um projeto Nuxt é como um armário bem organizado. Cada gaveta (pasta) tem um propósito específico. Clique em cada pasta abaixo para descobrir o que ela guarda e veja uma demonstração interativa!
          </p>

          <div class="space-y-4">
            <div v-for="(folder, i) in foldersData" :key="i" class="card rounded-xl overflow-hidden">
              <div class="p-5 flex items-center justify-between cursor-pointer" @click="openFolders[i] = !openFolders[i]">
                <div class="flex items-center">
                  <span class="text-3xl mr-4">{{ folder.icon }}</span>
                  <div>
                    <h3 class="font-bold text-xl">{{ folder.name }}</h3>
                    <p class="text-gray-500">{{ folder.description }}</p>
                  </div>
                </div>
                <span class="text-2xl text-gray-400 transition-transform" :class="{ '-rotate-180': openFolders[i] }">▾</span>
              </div>

              <div class="border-t" v-show="openFolders[i]">
                <div class="p-6 space-y-6">
                  <p class="text-gray-700" v-html="folder.details" />

                  <div>
                    <span class="font-semibold text-sm text-green-700 bg-green-100 py-1 px-2 rounded-full">Analogia</span>
                    <p class="italic text-gray-600 mt-2">"{{ folder.analogy }}"</p>
                  </div>

                  <div>
                    <span class="font-semibold text-sm text-blue-700 bg-blue-100 py-1 px-2 rounded-full">Exemplo</span>
                    <div class="bg-gray-800 rounded-lg mt-2 overflow-hidden relative">
                      <pre class="p-4 text-white text-sm"><code class="language-html" v-text="folder.code" /></pre>
                    </div>
                  </div>

                  <div>
                    <span class="font-semibold text-sm text-purple-700 bg-purple-100 py-1 px-2 rounded-full">Demonstração Interativa</span>
                    <div class="mt-2">
                      <div v-show="openDemos[i]" class="border rounded-lg shadow bg-white dark:bg-gray-900 overflow-hidden">
                        <div class="px-2 py-1 bg-gray-100 dark:bg-gray-800 flex gap-1">
                          <span class="w-3 h-3 rounded-full bg-red-500" />
                          <span class="w-3 h-3 rounded-full bg-yellow-500" />
                          <span class="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div class="p-4 text-sm min-h-[150px]" v-html="folderDemoHtml(folder)"></div>
                      </div>
                      <button class="w-full mt-2 bg-green-500 text-white py-2 px-3 rounded hover:bg-green-600"
                              @click.stop="toggleDemo(i)">
                        {{ openDemos[i] ? '⏹ Fechar Demo Visual' : '▶ Iniciar Demo Visual' }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="first-component" class="scroll-mt-12">
          <h2 class="text-4xl font-bold mb-6 inline-block border-b-4 border-green-400">🧱 Seu Primeiro Componente</h2>
          <p class="text-lg text-gray-600 mb-8">
            Componentes são como peças de LEGO reutilizáveis. Vamos criar um botão legal. Crie um arquivo chamado
            <code class="font-mono bg-gray-200 p-1 rounded">BotaoLegal.vue</code> dentro da pasta
            <code class="font-mono bg-gray-200 p-1 rounded">components</code> e cole o código abaixo.
          </p>
          <div class="bg-gray-800 rounded-lg overflow-hidden relative">
            <pre class="p-4 text-white"><code class="language-html">&lt;template&gt;
  &lt;button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"&gt;
    &lt;slot /&gt; &lt;!-- O texto do botão vai aqui --&gt;
  &lt;/button&gt;
&lt;/template&gt;</code></pre>
          </div>
          <p class="text-lg text-gray-600 mt-8">
            Agora, em qualquer página (como <code class="font-mono bg-gray-200 p-1 rounded">app.vue</code>), você pode usar seu novo botão. O Nuxt o importa magicamente para você!
          </p>
          <div class="bg-gray-800 rounded-lg mt-4 overflow-hidden relative">
            <pre class="p-4 text-white"><code class="language-html">&lt;template&gt;
  &lt;div class="p-8"&gt;
    &lt;BotaoLegal&gt;Clique em mim!&lt;/BotaoLegal&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        </section>

        <section id="concepts" class="scroll-mt-12">
          <h2 class="text-4xl font-bold mb-6 inline-block border-b-4 border-green-400">💡 Conceitos Essenciais</h2>
          <p class="text-lg text-gray-600 mb-8">
            Para ir além, é útil entender alguns conceitos-chave do Nuxt. Aqui está um resumo rápido do que você precisa saber, tudo em um só lugar.
          </p>
          <div class="space-y-3">
            <div v-for="(c, idx) in conceptsData" :key="idx" class="card rounded-lg overflow-hidden">
              <div class="p-4 flex justify-between items-center cursor-pointer" @click="openConcepts[idx] = !openConcepts[idx]">
                <h4 class="font-bold text-lg">{{ c.title }}</h4>
                <span class="text-xl text-gray-400 transition-transform" :class="{ 'rotate-90': openConcepts[idx] }">▶</span>
              </div>
              <div class="border-t" v-show="openConcepts[idx]">
                <div class="p-4 text-gray-700" v-html="c.content" />
              </div>
            </div>
          </div>
        </section>

        <section id="practical-guide" class="scroll-mt-12">
          <h2 class="text-4xl font-bold mb-6 inline-block border-b-4 border-green-400">🛠️ Guia Prático: Criando um Mini-Blog</h2>
          <p class="text-lg text-gray-600 mb-8">
            Vamos colocar a mão na massa! A melhor forma de aprender é construindo. Seguiremos os passos para criar um blog simples, usando os conceitos que vimos.
          </p>

          <div class="space-y-10">
            <div>
              <h3 class="text-2xl font-bold mb-2">Passo 1: Criar a API de Posts</h3>
              <p class="text-gray-600 mb-4">Primeiro, vamos simular um banco de dados criando uma API no diretório <code>server/</code>. Crie o arquivo <code>server/api/posts.ts</code>.</p>
              <div class="bg-gray-800 rounded-lg overflow-hidden relative">
                <pre class="p-4 text-white text-sm"><code>// server/api/posts.ts
export default defineEventHandler(() => [
  { id: 1, title: 'Meu Primeiro Post', content: 'Nuxt é incrível!' },
  { id: 2, title: 'Explorando Pastas', content: 'As convenções são poderosas.' },
  { id: 3, title: 'Componentes Reutilizáveis', content: 'Não repita código!' }
])</code></pre>
              </div>
              <p class="text-sm text-gray-500 mt-2">Agora você pode acessar <code class="font-mono text-xs">/api/posts</code> no navegador para ver os dados em JSON.</p>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Passo 2: Listar os Posts na Página Inicial</h3>
              <p class="text-gray-600 mb-4">Vamos usar <code>useFetch</code> para buscar os posts e exibi-los. Edite seu <code>app.vue</code> (ou <code>pages/index.vue</code>).</p>
              <div class="bg-gray-800 rounded-lg overflow-hidden relative">
                <pre class="p-4 text-white text-sm"><code v-pre>&lt;script setup&gt;
const { data: posts } = await useFetch('/api/posts')
&lt;/script&gt;
&lt;template&gt;
  &lt;div class="p-8"&gt;
    &lt;h1 class="text-3xl font-bold mb-4"&gt;Meu Blog&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for="post in posts" :key="post.id"&gt;
        &lt;NuxtLink :to="`/blog/${post.id}`" class="text-xl text-blue-500 hover:underline"&gt;
          {{ post.title }}
        &lt;/NuxtLink&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Passo 3: Criar a Página de Detalhe do Post</h3>
              <p class="text-gray-600 mb-4">O Nuxt entende rotas dinâmicas. Crie a estrutura de pastas e o arquivo <code>pages/blog/[id].vue</code>. O <code>[id]</code> indica um parâmetro dinâmico.</p>
              <div class="bg-gray-800 rounded-lg overflow-hidden relative">
                <pre class="p-4 text-white text-sm"><code v-pre>&lt;script setup&gt;
const route = useRoute()const { data: post } = await useFetch(`/api/posts/${route.params.id}`)
&lt;/script&gt;
&lt;template&gt;
  &lt;div class="p-8"&gt;
    &lt;h1 class="text-3xl font-bold mb-4"&gt;{{ post.title }}&lt;/h1&gt;
    &lt;p&gt;{{ post.content }}&lt;/p&gt;
    &lt;NuxtLink to="/" class="text-blue-500 hover:underline mt-8 block"&gt;
      &amp;larr; Voltar para a lista
    &lt;/NuxtLink&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Passo 4: Criar a API para um Post Específico</h3>
              <p class="text-gray-600 mb-4">Agora, vamos criar a API que a página de detalhe precisa. Crie o arquivo <code>server/api/posts/[id].ts</code>.</p>
              <div class="bg-gray-800 rounded-lg overflow-hidden relative">
                <pre class="p-4 text-white text-sm"><code>// server/api/posts/[id].ts
const posts = [
  { id: 1, title: 'Meu Primeiro Post', content: 'Nuxt é incrível!' },
  { id: 2, title: 'Explorando Pastas', content: 'As convenções são poderosas.' },
  { id: 3, title: 'Componentes Reutilizáveis', content: 'Não repita código!' }
]

export default defineEventHandler((event) => {
  const postId = parseInt(event.context.params.id, 10)
  const post = posts.find(p => p.id === postId)
  if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
  }
  return post
})</code></pre>
              </div>
              <p class="text-lg text-gray-600 mt-8"><strong>E pronto!</strong> Você acabou de criar um mini-blog funcional com Nuxt, usando rotas, API no servidor, busca de dados e páginas dinâmicas. Parabéns!</p>
            </div>
          </div>
        </section>

        <section id="lab" class="scroll-mt-12">
          <h2 class="text-4xl font-bold mb-6 inline-block border-b-4 border-green-400">🔬 Laboratório Interativo</h2>
          <p class="text-lg text-gray-600 mb-6">Brinque com mini-demonstrações reais para fixar os conceitos sem clima de prova 🙂</p>

          <div class="grid gap-6 md:grid-cols-2">
            <!-- Counter demo -->
            <div class="card p-5 rounded-xl">
              <h3 class="text-xl font-bold mb-3">Reatividade: Contador</h3>
              <p class="text-gray-600 mb-4">Aperte os botões e veja o estado reativo atualizando.</p>
              <div class="flex items-center gap-4">
                <button class="btn-primary" @click="counter++">+1</button>
                <button class="btn-primary" @click="counter--">-1</button>
                <button class="btn-primary" @click="resetCounter">Reset</button>
                <span class="text-2xl font-extrabold">{{ counter }}</span>
              </div>
            </div>

            <!-- Posts search demo -->
            <div class="card p-5 rounded-xl">
              <h3 class="text-xl font-bold mb-3">useFetch + Filtro</h3>
              <p class="text-gray-600 mb-4">Buscamos posts de <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">/api/posts</code> e filtramos no cliente.</p>
              <div class="flex items-center gap-3 mb-3">
                <button class="btn-primary" @click="refreshPosts">Recarregar</button>
                <span v-if="postsPending" class="text-sm text-gray-500">Carregando...</span>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Pesquisar por título ou conteúdo..."
                class="w-full mb-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              />
              <ul class="space-y-2">
                <li v-for="p in filteredPosts" :key="p.id" class="p-3 rounded border border-gray-200 dark:border-gray-700">
                  <div class="font-semibold">{{ p.title }}</div>
                  <div class="text-gray-600">{{ p.content }}</div>
                </li>
                <li v-if="filteredPosts.length === 0" class="text-gray-500 italic">Nada encontrado.</li>
              </ul>
            </div>

            <!-- Auto-imported component idea -->
            <div class="card p-5 rounded-xl">
              <h3 class="text-xl font-bold mb-3">Auto-Imports e Componentização</h3>
              <p class="text-gray-600 mb-4">Veja como estilos e slots funcionam em componentes simples.</p>
              <div class="flex flex-wrap items-center gap-3">
                <button class="btn-primary">Botão Padrão</button>
                <button class="btn-primary bg-blue-600 hover:bg-blue-700">Ação Azul</button>
                <button class="btn-primary bg-rose-600 hover:bg-rose-700">Perigo</button>
                <button class="btn-primary bg-amber-600 hover:bg-amber-700">Atenção</button>
              </div>
            </div>

            <!-- Slugify demo -->
            <div class="card p-5 rounded-xl">
              <h3 class="text-xl font-bold mb-3">Computed + Slug</h3>
              <p class="text-gray-600 mb-4">Digite um título e veja o slug calculado em tempo real.</p>
              <input v-model="titleInput" type="text" class="w-full mb-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-green-500" />
              <div class="text-sm"><span class="font-semibold">Slug:</span> <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">{{ slug }}</code></div>
            </div>

            <!-- Optimistic like demo -->
            <div class="card p-5 rounded-xl">
              <h3 class="text-xl font-bold mb-3">Interações: Like Otimista</h3>
              <p class="text-gray-600 mb-4">Simula uma chamada ao servidor e atualiza o contador.</p>
              <div class="flex items-center gap-3">
                <button class="btn-primary" :disabled="liking" @click="like">{{ liking ? 'Enviando...' : 'Curtir' }}</button>
                <span class="text-lg">Likes: <strong>{{ likes }}</strong></span>
              </div>
            </div>

            <!-- Global state (useState) demo A -->
            <div class="card p-5 rounded-xl">
              <h3 class="text-xl font-bold mb-3">Estado Global (useState) A</h3>
              <p class="text-gray-600 mb-4">Dois cartões compartilham o mesmo estado global <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">labCount</code>.</p>
              <div class="flex items-center gap-4">
                <button class="btn-primary" @click="labCount.value++">+1</button>
                <button class="btn-primary" @click="labCount.value--">-1</button>
                <span class="text-2xl font-extrabold">{{ labCount }}</span>
              </div>
            </div>

            <!-- Global state (useState) demo B -->
            <div class="card p-5 rounded-xl">
              <h3 class="text-xl font-bold mb-3">Estado Global (useState) B</h3>
              <p class="text-gray-600 mb-4">Interaja aqui e veja o valor refletir no cartão A também.</p>
              <div class="flex items-center gap-4">
                <button class="btn-primary" @click="labCount.value+=5">+5</button>
                <button class="btn-primary" @click="labCount.value=0">Reset</button>
                <span class="text-2xl font-extrabold">{{ labCount }}</span>
              </div>
            </div>

          </div>
        </section>

        <section id="next-steps" class="text-center scroll-mt-12">
          <h2 class="text-4xl font-bold mb-6 inline-block border-b-4 border-green-400">🎓 Próximos Passos</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Parabéns! Você construiu um projeto e entendeu os conceitos-chave. Agora você está pronto para explorar mais a fundo.
          </p>
          <a href="https://nuxt.com/docs" target="_blank" class="bg-green-500 text-white font-bold py-4 px-8 rounded-full inline-block text-lg hover:bg-green-600 transition-transform hover:scale-105">Ler a Documentação Oficial</a>
        </section>
      </main>
    </div>
  </div>

  <transition name="easter">
    <img
      v-if="easterVisible"
      :src="konamiGif"
      alt="easter"
      class="fixed bottom-[-5rem] left-4 w-[20rem] h-[20rem] object-contain z-50 pointer-events-none"
    />
  </transition>
</template>

<style scoped>
.easter-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.easter-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.easter-enter-active {
  transition: all 400ms ease;
}
.easter-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.easter-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
.easter-leave-active {
  transition: all 400ms ease;
}
</style>
