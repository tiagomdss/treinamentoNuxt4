<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold mb-4">
          <span class="text-purple-600">PHP</span> → <span class="text-blue-600">Nuxt 4</span>
        </h1>
        <p class="text-xl text-gray-600">
          Migração suave e didática: aprenda com exemplos reais do projeto eventosNTL
        </p>
      </div>

      <!-- Progress Stats -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-xl shadow-lg p-6 text-center">
          <div class="text-4xl font-bold text-green-600 mb-2">68%</div>
          <div class="text-gray-600">APIs Migradas</div>
          <div class="text-sm text-gray-500 mt-2">43 de 63 arquivos</div>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-6 text-center">
          <div class="text-4xl font-bold text-blue-600 mb-2">77%</div>
          <div class="text-gray-600">Frontend Modernizado</div>
          <div class="text-sm text-gray-500 mt-2">49 de 64 páginas</div>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-6 text-center">
          <div class="text-4xl font-bold text-purple-600 mb-2">10x</div>
          <div class="text-gray-600">Mais Rápido</div>
          <div class="text-sm text-gray-500 mt-2">Interface SPA</div>
        </div>
      </div>

      <!-- Comparison Sections -->
      <div class="space-y-12">
        <!-- Section 1: Listagem -->
        <section class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="lucide:list" class="text-blue-600" />
            Exemplo 1: Listagem de Eventos
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- PHP -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">❌</span>
                <h3 class="text-xl font-semibold">PHP Tradicional</h3>
              </div>
              <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-sm text-gray-100"><code>&lt;?php
require_once 'conexao.php';
$sql = "SELECT * FROM eventos";
$result = mysqli_query($conn, $sql);
?&gt;

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Eventos&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Lista de Eventos&lt;/h1&gt;
  &lt;table&gt;
    &lt;?php while($row = mysqli_fetch_assoc($result)): ?&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;?= $row['nomeEvento'] ?&gt;&lt;/td&gt;
      &lt;td&gt;&lt;?= $row['cidade'] ?&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;?php endwhile; ?&gt;
  &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
              </div>
              <div class="mt-3 space-y-2">
                <div class="flex items-start gap-2 text-sm text-red-600">
                  <Icon name="lucide:x-circle" class="mt-0.5 flex-shrink-0" />
                  <span>Reload completo da página</span>
                </div>
                <div class="flex items-start gap-2 text-sm text-red-600">
                  <Icon name="lucide:x-circle" class="mt-0.5 flex-shrink-0" />
                  <span>HTML e PHP misturados</span>
                </div>
                <div class="flex items-start gap-2 text-sm text-red-600">
                  <Icon name="lucide:x-circle" class="mt-0.5 flex-shrink-0" />
                  <span>Sem loading states</span>
                </div>
              </div>
            </div>

            <!-- Nuxt -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">✅</span>
                <h3 class="text-xl font-semibold">Nuxt 4 + Vue 3</h3>
              </div>
              <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-sm text-gray-100"><code>&lt;template&gt;
  &lt;div class="container mx-auto p-6"&gt;
    &lt;h1 class="text-3xl font-bold mb-6"&gt;
      Lista de Eventos
    &lt;/h1&gt;
    
    &lt;LoadingSpinner v-if="loading" /&gt;
    
    &lt;table v-else class="w-full"&gt;
      &lt;tr v-for="evento in eventos" 
          :key="evento.codigo"
          @click="verDetalhes(evento.codigo)"
          class="hover:bg-gray-50 cursor-pointer"&gt;
        &lt;td&gt;{{ evento.nomeEvento }}&lt;/td&gt;
        &lt;td&gt;{{ evento.cidade }}&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const loading = ref(true)
const eventos = ref([])

onMounted(async () => {
  const response = await $fetch('/api/eventos')
  eventos.value = response.data
  loading.value = false
})

const verDetalhes = (id: number) => {
  navigateTo(`/eventos/${id}`)
}
&lt;/script&gt;</code></pre>
              </div>
              <div class="mt-3 space-y-2">
                <div class="flex items-start gap-2 text-sm text-green-600">
                  <Icon name="lucide:check-circle" class="mt-0.5 flex-shrink-0" />
                  <span>SPA - sem reload</span>
                </div>
                <div class="flex items-start gap-2 text-sm text-green-600">
                  <Icon name="lucide:check-circle" class="mt-0.5 flex-shrink-0" />
                  <span>Separação clara (template/script)</span>
                </div>
                <div class="flex items-start gap-2 text-sm text-green-600">
                  <Icon name="lucide:check-circle" class="mt-0.5 flex-shrink-0" />
                  <span>Loading states visuais</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 2: Formulário -->
        <section class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="lucide:file-edit" class="text-purple-600" />
            Exemplo 2: Formulário de Cadastro
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- PHP -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">❌</span>
                <h3 class="text-xl font-semibold">PHP Tradicional</h3>
              </div>
              <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-sm text-gray-100"><code>&lt;?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nome = $_POST['nome'];
  $data = $_POST['data'];
  
  $sql = "INSERT INTO eventos 
          (nomeEvento, dataInicio) 
          VALUES ('$nome', '$data')";
  
  if (mysqli_query($conn, $sql)) {
    header('Location: listagem.php');
    exit;
  }
}
?&gt;

&lt;form method="POST"&gt;
  &lt;input type="text" name="nome" required&gt;
  &lt;input type="date" name="data" required&gt;
  &lt;button type="submit"&gt;Salvar&lt;/button&gt;
&lt;/form&gt;</code></pre>
              </div>
            </div>

            <!-- Nuxt -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">✅</span>
                <h3 class="text-xl font-semibold">Nuxt 4 + Vue 3</h3>
              </div>
              <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-sm text-gray-100"><code>&lt;template&gt;
  &lt;form @submit.prevent="salvar"&gt;
    &lt;div v-if="erro" class="alert-error"&gt;
      {{ erro }}
    &lt;/div&gt;
    
    &lt;input v-model="form.nome" 
           type="text" required&gt;
    &lt;input v-model="form.data" 
           type="date" required&gt;
    
    &lt;button type="submit" :disabled="salvando"&gt;
      {{ salvando ? 'Salvando...' : 'Salvar' }}
    &lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const form = ref({ nome: '', data: '' })
const salvando = ref(false)
const erro = ref('')

const salvar = async () => {
  salvando.value = true
  try {
    await $fetch('/api/eventos', {
      method: 'POST',
      body: form.value
    })
    navigateTo('/eventos')
  } catch (e) {
    erro.value = 'Erro ao salvar'
  } finally {
    salvando.value = false
  }
}
&lt;/script&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 3: Estrutura de Pastas -->
        <section class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="lucide:folder-tree" class="text-green-600" />
            Estrutura de Pastas: eventosNTL
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-semibold mb-3 text-lg">📁 Frontend (Nuxt)</h3>
              <div class="bg-gray-900 rounded-lg p-4 text-sm text-gray-100 font-mono">
                <pre>app/
├── pages/              <span class="text-green-400"># Rotas automáticas</span>
│   ├── index.vue       <span class="text-gray-500"># /</span>
│   ├── login.vue       <span class="text-gray-500"># /login</span>
│   ├── eventos/
│   │   ├── index.vue   <span class="text-gray-500"># /eventos</span>
│   │   ├── novo.vue    <span class="text-gray-500"># /eventos/novo</span>
│   │   └── [id].vue    <span class="text-gray-500"># /eventos/:id</span>
│   └── funcionarios/
│       ├── index.vue
│       └── [id].vue
│
├── components/         <span class="text-green-400"># Reutilizáveis</span>
│   ├── ModalEditarEvento.vue
│   ├── ModalEditarFuncionario.vue
│   └── LoadingSpinner.vue
│
├── composables/        <span class="text-green-400"># Lógica compartilhada</span>
│   ├── useAuth.ts
│   └── useApi.ts
│
└── layouts/            <span class="text-green-400"># Layouts</span>
    └── default.vue     <span class="text-gray-500"># Menu + conteúdo</span></pre>
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-3 text-lg">🔌 Backend (PHP)</h3>
              <div class="bg-gray-900 rounded-lg p-4 text-sm text-gray-100 font-mono">
                <pre>api/
├── js/                         <span class="text-blue-400"># Código original</span>
│   ├── repositorio.php         <span class="text-gray-500"># Conexão DB</span>
│   ├── girComum.php            <span class="text-gray-500"># Funções úteis</span>
│   └── sqlscope_*.php          <span class="text-gray-500"># CRUD</span>
│
├── eventoFiltroListagem.php    <span class="text-gray-500"># GET /eventos</span>
├── candidatoFiltroListagem.php <span class="text-gray-500"># GET /funcionarios</span>
├── fornecedorFiltroListagem.php
└── login.php                   <span class="text-gray-500"># POST /login</span></pre>
              </div>
              
              <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                <div class="flex items-start gap-2">
                  <Icon name="lucide:lightbulb" class="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div class="text-sm">
                    <strong class="text-blue-900">Dica:</strong>
                    <span class="text-blue-800"> O backend PHP continua funcionando! Apenas adicionamos headers CORS para permitir chamadas do frontend Nuxt.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 4: Conceitos-Chave -->
        <section class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="lucide:brain" class="text-orange-600" />
            Conceitos-Chave da Migração
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div class="flex items-center gap-3 mb-3">
                <Icon name="lucide:zap" class="text-2xl text-blue-600" />
                <h3 class="text-xl font-bold">Reatividade</h3>
              </div>
              <p class="text-gray-700 mb-3">
                No PHP, você precisa atualizar o DOM manualmente. No Vue/Nuxt, é automático!
              </p>
              <div class="bg-white rounded p-3 text-sm font-mono">
                <div class="text-gray-600">// Variável reativa</div>
                <div>const contador = ref(0)</div>
                <div class="text-gray-600 mt-2">// UI atualiza automaticamente!</div>
                <div>contador.value++</div>
              </div>
            </div>

            <div class="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div class="flex items-center gap-3 mb-3">
                <Icon name="lucide:component" class="text-2xl text-green-600" />
                <h3 class="text-xl font-bold">Componentes</h3>
              </div>
              <p class="text-gray-700 mb-3">
                Crie uma vez, use em qualquer lugar. Sem includes repetitivos!
              </p>
              <div class="bg-white rounded p-3 text-sm font-mono">
                <div class="text-gray-600">// Criar componente</div>
                <div>components/Botao.vue</div>
                <div class="text-gray-600 mt-2">// Usar automaticamente</div>
                <div>&lt;Botao&gt;Clique&lt;/Botao&gt;</div>
              </div>
            </div>

            <div class="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div class="flex items-center gap-3 mb-3">
                <Icon name="lucide:route" class="text-2xl text-purple-600" />
                <h3 class="text-xl font-bold">Roteamento</h3>
              </div>
              <p class="text-gray-700 mb-3">
                Rotas criadas automaticamente baseadas em arquivos!
              </p>
              <div class="bg-white rounded p-3 text-sm font-mono">
                <div>pages/eventos/index.vue</div>
                <div class="text-gray-600">→ /eventos</div>
                <div class="mt-2">pages/eventos/[id].vue</div>
                <div class="text-gray-600">→ /eventos/123</div>
              </div>
            </div>

            <div class="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <div class="flex items-center gap-3 mb-3">
                <Icon name="lucide:database" class="text-2xl text-orange-600" />
                <h3 class="text-xl font-bold">API Calls</h3>
              </div>
              <p class="text-gray-700 mb-3">
                Busque dados de forma simples e otimizada.
              </p>
              <div class="bg-white rounded p-3 text-sm font-mono">
                <div class="text-gray-600">// Buscar dados</div>
                <div>const { data } = await $fetch('/api/eventos')</div>
                <div class="text-gray-600 mt-2">// Automático + cache!</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 5: Passo a Passo -->
        <section class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="lucide:list-checks" class="text-indigo-600" />
            Migração Passo a Passo
          </h2>
          
          <div class="space-y-4">
            <div v-for="(step, index) in migrationSteps" :key="index" 
                 class="flex gap-4 p-4 bg-white rounded-lg shadow">
              <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-lg mb-2">{{ step.title }}</h3>
                <p class="text-gray-600 mb-2">{{ step.description }}</p>
                <div v-if="step.code" class="bg-gray-900 rounded p-3 text-sm text-gray-100 font-mono">
                  {{ step.code }}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center py-12">
          <h2 class="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Explore os exemplos práticos e comece sua migração hoje!
          </p>
          <div class="flex gap-4 justify-center">
            <NuxtLink to="/" class="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Ver Mais Exemplos
            </NuxtLink>
            <NuxtLink to="/exercicios" class="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
              Fazer Exercícios
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const migrationSteps = [
  {
    title: 'Instalar Nuxt',
    description: 'Crie um novo projeto Nuxt 4 com todas as dependências necessárias.',
    code: 'npx nuxi@latest init meu-projeto && cd meu-projeto && npm install'
  },
  {
    title: 'Adicionar TailwindCSS',
    description: 'Instale o módulo do Tailwind para estilização rápida e moderna.',
    code: 'npm install -D @nuxtjs/tailwindcss'
  },
  {
    title: 'Configurar API Base',
    description: 'Configure a URL base da sua API PHP no nuxt.config.ts.',
    code: 'runtimeConfig: { public: { apiBase: "http://localhost:8000" } }'
  },
  {
    title: 'Adicionar CORS no PHP',
    description: 'Adicione headers CORS em todos os arquivos PHP para permitir chamadas do frontend.',
    code: 'header("Access-Control-Allow-Origin: *");'
  },
  {
    title: 'Criar Primeira Página',
    description: 'Crie uma página de listagem em pages/eventos/index.vue.',
    code: null
  },
  {
    title: 'Conectar com API',
    description: 'Use $fetch ou useFetch para buscar dados da API PHP.',
    code: 'const { data } = await $fetch("/api/eventos")'
  },
  {
    title: 'Criar Componentes',
    description: 'Extraia partes reutilizáveis em componentes na pasta components/.',
    code: null
  },
  {
    title: 'Adicionar Autenticação',
    description: 'Implemente login e proteção de rotas com middleware.',
    code: null
  }
]
</script>

<style scoped>
.alert-error {
  @apply p-4 bg-red-100 text-red-700 rounded-lg mb-4;
}
</style>
