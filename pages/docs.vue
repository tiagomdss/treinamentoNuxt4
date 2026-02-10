<template>
  <div class="relative min-h-screen bg-[#F8FAFC] dark:bg-[#020420] overflow-hidden transition-colors duration-500">
    <!-- Cosmic Background Blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#34d399]/20 dark:bg-[#10b981]/15 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
      <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#60a5fa]/20 dark:bg-[#2563eb]/10 rounded-full blur-[100px] animate-[float_25s_infinite_ease-in-out_reverse]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-[#c084fc]/20 dark:bg-[#7c3aed]/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-emerald-400/10 border border-slate-200 dark:border-white/10 mb-8 backdrop-blur-md">
            <Icon name="heroicons:book-open" class="w-5 h-5 text-emerald-600" />
            <span class="text-emerald-700 dark:text-[#00DC82] font-semibold text-sm tracking-wide uppercase">Guia Completo</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Documentação <span class="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Nuxt 4</span>
          </h1>
          <p class="text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Sua jornada para dominar o framework Vue.js mais intuitivo e poderoso do ecossistema. 🚀
          </p>
        </div>
          <!-- Tabs -->
          <div class="flex items-center justify-center gap-4 flex-wrap mb-16 px-4">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-8 py-3 rounded-xl font-bold transition-all duration-300 backdrop-blur-md border shadow-sm',
                activeTab === tab.id
                  ? 'bg-[#00DC82] text-slate-900 border-[#00DC82] shadow-[0_0_20px_rgba(0,220,130,0.3)] scale-105'
                  : 'bg-slate-100/80 dark:bg-white/5 text-slate-500 dark:text-gray-400 border-black/5 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
              ]"
            >
              {{ tab.label }}
            </button>
          </div>

        <div class="space-y-12">
          <div 
            v-for="section in filteredSections" 
            :key="section.title"
            class="group bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-[#00DC82]/30 shadow-sm hover:shadow-2xl"
          >
            <!-- Header -->
            <div class="p-10 border-b border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.01]">
              <div class="flex flex-col md:flex-row items-start gap-8">
                <div class="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Icon :name="section.icon" class="w-8 h-8 text-emerald-600 dark:text-[#00DC82]" />
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
              <!-- Code Block -->
              <CodeBlock 
                :code="section.code" 
                class="shadow-2xl text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeTab = ref('getting-started')

const tabs = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'core-concepts', label: 'Core Concepts' },
  { id: 'advanced', label: 'Advanced' },
  { id: 'deployment', label: 'Deployment' }
]



const docSections = [
  {
    category: 'getting-started',
    title: '🚀 Introdução ao Nuxt 4',
    icon: 'heroicons:rocket-launch',
    description: 'Nuxt 4 é o framework Vue.js mais moderno do planeta. Construa aplicações Vue incríveis com SSR, SSG, ISR e Nitro engine.',
    content: `Nuxt 4 traz melhorias significativas em performance, developer experience e novas features poderosas.

**Principais Novidades:**
• Nitro 2 engine para performance extrema
• Auto-imports inteligentes
• Server components nativos
• Melhor suporte a TypeScript`,
    code: `// Criar novo projeto Nuxt 4
npx nuxi@latest init meu-projeto
cd meu-projeto
npm install
npm run dev

// Estrutura de diretórios
meu-projeto/
├── app.vue          # Componente raiz
├── pages/           # Rotas automáticas
├── components/      # Componentes auto-importados
├── composables/     # Funções reutilizáveis
├── layouts/         # Layouts da aplicação
├── public/          # Arquivos estáticos
└── server/          # API e middleware`
  },
  {
    category: 'getting-started',
    title: '📁 Estrutura de Diretórios',
    icon: 'heroicons:folder',
    description: 'A estrutura de pastas do Nuxt 4 é intuitiva e segue convenções que aceleram o desenvolvimento.',
    content: `Cada diretório tem um propósito específico e o Nuxt automaticamente configura tudo para você.

**Diretórios Principais:**
• pages/ - Rotas automáticas
• components/ - Componentes globais
• composables/ - Lógica reutilizável
• layouts/ - Templates de página`,
    code: `// app/
├── pages/
│   ├── index.vue        # → /
│   ├── about.vue        # → /about
│   └── users/
│       ├── index.vue    # → /users
│       └── [id].vue     # → /users/:id
├── components/
│   ├── Header.vue       # Auto-importado
│   └── Footer.vue       # Auto-importado
├── composables/
│   └── useAuth.ts       # Auto-importado
├── layouts/
│   └── default.vue      # Layout padrão
└── server/
    └── api/
        └── users.ts     # → /api/users`
  },
  {
    category: 'getting-started',
    title: '⚙️ Configuração Básica',
    icon: 'heroicons:cog-6-tooth',
    description: 'Configure seu projeto Nuxt 4 com nuxt.config.ts para personalizar o comportamento da aplicação.',
    content: `O arquivo nuxt.config.ts é o coração da configuração do seu projeto Nuxt.

**Principais Configurações:**
• app - Configurações da aplicação
• modules - Módulos do Nuxt
• runtimeConfig - Variáveis de ambiente
• vite - Configurações do Vite`,
    code: `// nuxt.config.ts
export default defineNuxtConfig({
  // Configurações de renderização
  ssr: true,
  
  // Módulos
  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss'
  ],
  
  // Configuração da aplicação
  app: {
    head: {
      title: 'Meu App Nuxt 4',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  
  // Runtime config (variáveis de ambiente)
  runtimeConfig: {
    apiSecret: '', // Apenas servidor
    public: {
      apiBase: '/api' // Cliente e servidor
    }
  }
})`
  },
  {
    category: 'core-concepts',
    title: '🔗 Aliases (@ e ~)',
    icon: 'heroicons:link',
    description: 'Entenda como funcionam os atalhos de importação do Nuxt para um código mais limpo.',
    content: `No Nuxt, o símbolo @ (ou ~) é um alias que aponta para a raiz do seu projeto. Isso evita caminhos relativos complexos (../../..) e torna suas importações muito mais estáveis.

**Por que usar:**
• Evita erros ao mover arquivos de pasta
• Código mais curto e legível
• Funciona em arquivos CSS, JS e Vue`,
    code: `// Sem alias (Caminho relativo difícil)
import MyComponent from '../../components/MyComponent.vue'

// Com alias (Limpo e estável)
import MyComponent from '@/components/MyComponent.vue'

// Também funciona no CSS
.minha-classe {
  background: url('@/assets/images/logo.png');
}`
  },
  {
    category: 'core-concepts',
    title: '🎨 Tailwind CSS',
    icon: 'heroicons:paint-brush',
    description: 'Estilize sua aplicação rapidamente com o framework CSS utilitário líder do mercado.',
    content: `O Nuxt 4 integra-se perfeitamente com o Tailwind CSS, permitindo criar designs modernos sem sair do seu arquivo HTML.

**Vantagens:**
• Desenvolvimento ultra-rápido
• Zero conflito de classes
• Design system consistente por padrão`,
    code: `<!-- Exemplo de componentes com Tailwind -->
<div class="p-6 max-w-sm mx-auto bg-white/5 rounded-xl border border-white/10 backdrop-blur-xl flex items-center space-x-4">
  <div class="shrink-0">
    <Icon name="heroicons:rocket-launch" class="h-12 w-12 text-green-500" />
  </div>
  <div>
    <div class="text-xl font-medium text-white">Nuxt 4 + Tailwind</div>
    <p class="text-slate-400 text-sm">Design líquido e responsivo!</p>
  </div>
</div>`
  },
  {
    category: 'advanced',
    title: '📘 TypeScript de Elite',
    icon: 'heroicons:code-bracket-square',
    description: 'Desenvolva com confiança absoluta usando o suporte de primeira classe do Nuxt para TypeScript.',
    content: `O Nuxt 4 é escrito em TypeScript e gera automaticamente definições de tipos para suas rotas, componentes e módulos.

**O que você ganha:**
• Auto-complete inteligente no VS Code
• Erros detectados antes mesmo de salvar
• Refatoração segura e previsível`,
    code: `<script setup lang="ts">
interface User {
  id: number
  name: string
  role: 'admin' | 'user'
}

// O Nuxt infere os tipos automaticamente!
const user = ref<User | null>(null)

const loadUser = async (id: number) => {
  // useFetch já sabe o tipo esperado!
  const { data } = await useFetch<User>(\`/api/users/\${id}\`)
  user.value = data.value
}
<\/script>`
  },
  {
    category: 'core-concepts',
    title: '🎨 Auto-Imports Mágicos',
    icon: 'heroicons:sparkles',
    description: 'Esqueça os imports! O Nuxt 4 importa automaticamente componentes, composables e utilitários.',
    content: `Você não precisa mais escrever import statements. O Nuxt detecta e importa automaticamente tudo que você usa.

**O que é auto-importado:**
• Componentes de components/
• Composables de composables/
• APIs do Vue (ref, computed, etc)
• APIs do Nuxt (navigateTo, useFetch, etc)`,
    code: `<!-- <template> -->
  <div>
    <!-- Componente auto-importado -->
    <Header />
    
    <h1>{{ title }}</h1>
    <p>Contador: {{ count }}</p>
    <button @click="increment">+1</button>
    
    <!-- Outro componente auto-importado -->
    <Footer />
  </div>
<!-- </template> -->

<script setup>
// Sem imports! Tudo funciona automaticamente
const title = ref('Olá Nuxt 4')
const count = ref(0)

// Composable auto-importado
const { user } = useAuth()

const increment = () => {
  count.value++
}
<\/script>`
  },
  {
    category: 'core-concepts',
    title: '🗺️ Roteamento File-Based',
    icon: 'heroicons:map',
    description: 'Crie rotas automaticamente apenas criando arquivos na pasta pages/. Simples e poderoso!',
    content: `O sistema de rotas do Nuxt é baseado em arquivos. Cada arquivo .vue em pages/ vira uma rota automaticamente.

**Tipos de Rotas:**
• Estáticas: pages/about.vue → /about
• Dinâmicas: pages/users/[id].vue → /users/:id
• Nested: pages/blog/[slug].vue → /blog/:slug`,
    code: `// pages/index.vue - Rota: /
<!-- <template> -->
  <div>
    <h1>Página Inicial</h1>
    <NuxtLink to="/about">Sobre</NuxtLink>
  </div>
<!-- </template> -->

// pages/users/[id].vue - Rota: /users/:id
<!-- <template> -->
  <div>
    <h1>Usuário: {{ route.params.id }}</h1>
    <p>{{ user?.name }}</p>
  </div>
<!-- </template> -->

<script setup>
const route = useRoute()
const { data: user } = await useFetch(
  \`/api/users/\${route.params.id}\`
)
<\/script>

// Navegação programática
const router = useRouter()
const goToUser = (id) => {
  router.push(\`/users/\${id}\`)
  // ou
  navigateTo(\`/users/\${id}\`)
}`
  },
  {
    category: 'core-concepts',
    title: '🔧 Server Components',
    icon: 'heroicons:server',
    description: 'Crie templates reutilizáveis para suas páginas com o sistema de layouts do Nuxt.',
    content: `Layouts permitem criar estruturas comuns (header, footer, sidebar) que envolvem suas páginas.

**Como usar:**
1. Crie layouts em layouts/
2. Use <NuxtPage /> para renderizar a página
3. Defina o layout nas páginas`,
    code: `// layouts/default.vue
<!-- <template> -->
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>
    
    <main>
      <!-- Página será renderizada aqui -->
      <NuxtPage />
    </main>
    
    <footer>
      <p>© 2025 Meu Site</p>
    </footer>
  </div>
<!-- </template> -->

// layouts/admin.vue - Layout customizado
<!-- <template> -->
  <div class="admin-layout">
    <aside><!-- Sidebar --></aside>
    <main><NuxtPage /></main>
  </div>
<!-- </template> -->

// pages/admin/dashboard.vue - Usando layout customizado
<script setup>
definePageMeta({
  layout: 'admin'
})
<\/script>`
  },
  {
    category: 'core-concepts',
    title: '📡 Renderização Híbrida',
    icon: 'heroicons:cloud-arrow-down',
    description: 'Busque dados de APIs de forma eficiente com useFetch, useAsyncData e server routes.',
    content: `Nuxt 4 oferece múltiplas formas de buscar dados, todas otimizadas para SSR e performance.

**Principais Composables:**
• useFetch() - Para APIs externas
• useAsyncData() - Para dados assíncronos
• $fetch() - Para chamadas imperativas`,
    code: `// useFetch - Buscar dados de API
<script setup>
const { data: posts, pending, error } = await useFetch(
  'https://api.example.com/posts'
)
<\/script>

<!-- <template> -->
  <div>
    <div v-if="pending">Carregando...</div>
    <div v-else-if="error">Erro: {{ error.message }}</div>
    <div v-else>
      <article v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
      </article>
    </div>
  </div>
<!-- </template> -->

// useAsyncData - Dados customizados
const { data: user } = await useAsyncData(
  'user',
  () => $fetch('/api/user')
)

// Com parâmetros reativos
const id = ref(1)
const { data } = await useFetch(
  () => \`/api/users/\${id.value}\`,
  { watch: [id] }
)`
  },
  {
    category: 'core-concepts',
    title: '🔧 Server Components',
    icon: 'heroicons:server',
    description: 'Componentes que rodam apenas no servidor para máxima segurança e performance.',
    content: `Server Components permitem executar código sensível no servidor, mantendo dados privados seguros.

**Benefícios:**
• Acesso direto ao banco de dados
• API keys seguras
• Redução do bundle JavaScript
• Performance otimizada`,
    code: `// components/ServerData.server.vue
<script setup>
// Este código roda APENAS no servidor
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Busca direto do banco - seguro!
const users = await prisma.user.findMany({
  select: { id: true, name: true, email: true }
})
<\/script>

<!-- <template> -->
  <div>
    <h2>Usuários (Server Component)</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
<!-- </template> -->

// Usar em qualquer página
<!-- <template> -->
  <div>
    <h1>Dashboard</h1>
    <ServerData />
  </div>
<!-- </template> -->`
  },
  {
    category: 'advanced',
    title: '🛣️ Server Routes (API)',
    icon: 'heroicons:code-bracket-square',
    description: 'Crie APIs REST completas diretamente no Nuxt com server routes.',
    content: `Server routes permitem criar endpoints de API sem precisar de um servidor separado.

**Localização:** server/api/
**Métodos:** GET, POST, PUT, DELETE
**Formato:** Retorna JSON automaticamente`,
    code: `// server/api/users/index.ts
export default defineEventHandler(async (event) => {
  // GET /api/users
  const users = await prisma.user.findMany()
  return users
})

// server/api/users/[id].ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (event.method === 'GET') {
    // GET /api/users/:id
    return await prisma.user.findUnique({
      where: { id: Number(id) }
    })
  }
  
  if (event.method === 'POST') {
    // POST /api/users/:id
    const body = await readBody(event)
    return await prisma.user.update({
      where: { id: Number(id) },
      data: body
    })
  }
})

// Usar no frontend
const { data } = await useFetch('/api/users')
const user = await $fetch('/api/users/1')`
  },
  {
    category: 'core-concepts',
    title: '🎯 Composables',
    icon: 'heroicons:cube',
    description: 'Crie lógica reutilizável com composables. São funções que encapsulam comportamento.',
    content: `Composables são funções reutilizáveis que podem usar APIs do Vue (ref, computed, etc).

**Convenção:** Prefixo 'use'
**Localização:** composables/
**Auto-import:** Automático`,
    code: `// composables/useCounter.ts
export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}

// composables/useAuth.ts
export const useAuth = () => {
  const user = useState('user', () => null)
  const isLoggedIn = computed(() => !!user.value)
  
  const login = async (email: string, password: string) => {
    const data = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { email, password }
    })
    user.value = data.user
  }
  
  const logout = () => {
    user.value = null
    navigateTo('/login')
  }
  
  return { user, isLoggedIn, login, logout }
}

// Usar em componentes (auto-importado!)
const { count, increment } = useCounter(10)
const { user, login, logout } = useAuth()`
  },
  {
    category: 'advanced',
    title: '⚡ Nitro Engine',
    icon: 'heroicons:bolt',
    description: 'Nitro é o servidor universal que alimenta o Nuxt 4 com performance extrema.',
    content: `Nitro 2 é a engine de servidor do Nuxt 4, oferecendo deploy universal e performance otimizada.

**Recursos do Nitro:**
• Deploy em qualquer plataforma
• API routes poderosas
• Caching inteligente
• Suporte a WebSockets`,
    code: `// server/api/hello.ts - API Route com Nitro
export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nitro!',
    timestamp: new Date().toISOString()
  }
})

// server/middleware/auth.ts - Middleware global
export default defineEventHandler((event) => {
  const token = getHeader(event, 'authorization')
  
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }
  
  event.context.user = verifyToken(token)
})

// Caching com Nitro
export default defineCachedEventHandler(
  async (event) => {
    const data = await fetchExpensiveData()
    return data
  },
  {
    maxAge: 60 * 60, // 1 hora
    swr: true
  }
)`
  },
  {
    category: 'advanced',
    title: '🏗️ Layer Architecture',
    icon: 'heroicons:squares-plus',
    description: 'Layers permitem compartilhar configuração, componentes e lógica entre projetos.',
    content: `Nuxt Layers são uma forma poderosa de criar projetos modulares e reutilizáveis.

**Benefícios:**
• Compartilhar código entre projetos
• Criar temas reutilizáveis
• Organizar monorepos
• Extender funcionalidades`,
    code: `// nuxt.config.ts - Usando layers
export default defineNuxtConfig({
  extends: [
    './base-layer', // Layer local
    '@my-company/nuxt-layer', // Layer npm
    'github:user/repo#main' // Layer do GitHub
  ]
})

// base-layer/nuxt.config.ts - Definindo um layer
export default defineNuxtConfig({
  components: true,
  // Componentes e composables são auto-compartilhados
})

// Estrutura de um layer
base-layer/
├── components/     # Componentes compartilhados
├── composables/    # Composables compartilhados
├── layouts/        # Layouts compartilhados
├── pages/          # Páginas compartilhadas
└── nuxt.config.ts  # Configuração do layer`
  },
  {
    category: 'advanced',
    title: '🧪 Experimental Features',
    icon: 'heroicons:beaker',
    description: 'Recursos experimentais que você pode ativar para testar novas funcionalidades.',
    content: `Nuxt 4 oferece features experimentais que você pode habilitar no nuxt.config.ts.

**Features Disponíveis:**
• componentIslands - Componentes isolados
• payloadExtraction - Otimização de payload
• viewTransition - Transições nativas
• typedPages - Rotas tipadas`,
    code: `// nuxt.config.ts - Habilitando features experimentais
export default defineNuxtConfig({
  experimental: {
    // Component Islands
    componentIslands: true,
    
    // Payload Extraction
    payloadExtraction: true,
    
    // View Transitions API
    viewTransition: true,
    
    // Typed Pages (rotas tipadas)
    typedPages: true
  }
})

// Usando View Transitions
<script setup>
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})
<\/script>

// CSS para View Transitions
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.3s;
}`
  },
  {
    category: 'deployment',
    title: '▲ Vercel',
    icon: 'heroicons:cloud',
    description: 'Deploy seu app Nuxt 4 na Vercel com zero configuração.',
    content: `Vercel oferece a melhor experiência para deploy de apps Nuxt com edge functions e ISR.

**Vantagens:**
• Deploy automático do GitHub
• Edge Functions globais
• ISR (Incremental Static Regeneration)
• Analytics integrado`,
    code: `// Deploy na Vercel

# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Deploy para produção
vercel --prod

// vercel.json (opcional)
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nuxtjs",
  "regions": ["iad1"]
}

// Variáveis de ambiente
// Adicione no dashboard da Vercel ou use .env
NUXT_PUBLIC_API_BASE=https://api.example.com`
  },
  {
    category: 'deployment',
    title: '🌐 Netlify',
    icon: 'heroicons:globe-alt',
    description: 'Deploy na Netlify com suporte completo a SSR e edge functions.',
    content: `Netlify oferece deploy contínuo e edge functions para apps Nuxt.

**Recursos:**
• Deploy automático
• Edge Functions
• Split Testing
• Forms e Identity`,
    code: `// Deploy na Netlify

# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy

# 4. Deploy para produção
netlify deploy --prod

// netlify.toml
[build]
  command = "npm run build"
  publish = ".output/public"

[[redirects]]
  from = "/*"
  to = "/.netlify/functions/server"
  status = 200

[build.environment]
  NODE_VERSION = "20"`
  },
  {
    category: 'deployment',
    title: '☁️ Cloudflare',
    icon: 'heroicons:cloud-arrow-up',
    description: 'Deploy na edge da Cloudflare com Cloudflare Pages e Workers.',
    content: `Cloudflare Pages oferece deploy global na edge com performance extrema.

**Benefícios:**
• Edge computing global
• Sem cold starts
• R2 Storage integrado
• D1 Database`,
    code: `// Deploy na Cloudflare Pages

# 1. Instalar Wrangler
npm i -g wrangler

# 2. Login
wrangler login

# 3. Deploy
wrangler pages deploy .output/public

// wrangler.toml
name = "my-nuxt-app"
compatibility_date = "2024-01-01"

[build]
command = "npm run build"

[[routes]]
pattern = "/*"
zone_name = "example.com"

// Usando Cloudflare R2 (Storage)
export default defineEventHandler(async (event) => {
  const r2 = useR2()
  const file = await r2.get('my-file.jpg')
  return file
})`
  },
  {
    category: 'deployment',
    title: '🐳 Docker',
    icon: 'heroicons:cube-transparent',
    description: 'Containerize seu app Nuxt 4 com Docker para deploy em qualquer lugar.',
    content: `Docker permite empacotar seu app Nuxt em um container para deploy consistente.

**Vantagens:**
• Deploy em qualquer cloud
• Ambiente consistente
• Fácil escalonamento
• CI/CD simplificado`,
    code: `# Dockerfile
FROM node:20-alpine AS base

# Build stage
FROM base AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM base AS production
WORKDIR /app
COPY --from=build /app/.output ./
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server/index.mjs"]

# docker-compose.yml
version: '3.8'
services:
  nuxt-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped

# Build e run
docker build -t my-nuxt-app .
docker run -p 3000:3000 my-nuxt-app`
  },
  {
    category: 'getting-started',
    title: '🔍 SEO e Meta Tags',
    icon: 'heroicons:magnifying-glass',
    description: 'Otimize seu site para motores de busca com useHead e useSeoMeta.',
    content: `Nuxt 4 facilita a configuração de meta tags, Open Graph, Twitter Cards e mais.

**Composables:**
• useHead() - Meta tags gerais
• useSeoMeta() - SEO otimizado
• useServerSeoMeta() - Apenas servidor`,
    code: `// nuxt.config.ts - Meta tags globais
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Meu Site Incrível',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Descrição do site' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

// Em páginas - Meta tags dinâmicas
<script setup>
const route = useRoute()

useHead({
  title: 'Página Sobre',
  meta: [
    { name: 'description', content: 'Sobre nós' }
  ]
})

// SEO otimizado
useSeoMeta({
  title: 'Meu Artigo',
  description: 'Descrição do artigo',
  ogTitle: 'Meu Artigo',
  ogDescription: 'Descrição para redes sociais',
  ogImage: 'https://example.com/image.jpg',
  twitterCard: 'summary_large_image'
})
<\/script>`
  }
]

const filteredSections = computed(() => {
  return docSections.filter(section => section.category === activeTab.value)
})

useHead({
  title: 'Documentação - Aprenda Nuxt 4',
  meta: [
    { name: 'description', content: 'Documentação completa sobre Nuxt 4' }
  ]
})
</script>
