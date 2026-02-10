<template>
  <div class="relative min-h-screen bg-[#F8FAFC] dark:bg-[#020420] overflow-hidden transition-colors duration-500">
    <!-- Cosmic Background Blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3178c6]/20 dark:bg-[#3178c6]/15 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
      <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#f7df1e]/15 dark:bg-[#f7df1e]/10 rounded-full blur-[100px] animate-[float_25s_infinite_ease-in-out_reverse]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-[#c084fc]/20 dark:bg-[#7c3aed]/10 rounded-full blur-[100px] animate-[float_20s_infinite_ease-in-out]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-blue-400/10 border border-slate-200 dark:border-white/10 mb-8 backdrop-blur-md">
            <Icon name="simple-icons:typescript" class="w-5 h-5 text-[#3178c6]" />
            <span class="text-[#3178c6] dark:text-blue-400 font-semibold text-sm tracking-wide uppercase">Guia Completo</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            <span class="bg-gradient-to-r from-[#3178c6] to-[#235a9e] bg-clip-text text-transparent">TypeScript</span> Masterclass
          </h1>
          <p class="text-xl text-slate-700 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Domine o superset do JavaScript que revolucionou o desenvolvimento moderno. Descubra por que a tipagem estática é a melhor decisão que você pode tomar. 🔷
          </p>

          <!-- TS Stats Banner -->
          <div class="flex flex-wrap items-center justify-center gap-6 mt-12 mb-12">
            <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              <Icon name="heroicons:arrow-trending-up" class="w-6 h-6 text-green-500" />
              <div class="text-left">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Adoção Global</p>
                <p class="text-lg font-bold text-slate-900 dark:text-white">Top 5 Linguagens</p>
              </div>
            </div>
            <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              <Icon name="heroicons:shield-check" class="w-6 h-6 text-blue-500" />
              <div class="text-left">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Bugs Evitados</p>
                <p class="text-lg font-bold text-slate-900 dark:text-white">~15% menos erros</p>
              </div>
            </div>
            <div class="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              <Icon name="heroicons:building-office-2" class="w-6 h-6 text-purple-500" />
              <div class="text-left">
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Usado por</p>
                <p class="text-lg font-bold text-slate-900 dark:text-white">Microsoft, Google, Meta</p>
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
                    ? 'bg-white dark:bg-slate-800 text-[#3178c6] dark:text-blue-400 shadow-md scale-100'
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
                    ? 'bg-[#3178c6] text-white border-[#3178c6] shadow-lg shadow-blue-500/20'
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
            class="group bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-[#3178c6]/30 shadow-sm hover:shadow-2xl"
          >
            <!-- Header -->
            <div class="p-10 border-b border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.01]">
              <div class="flex flex-col md:flex-row items-start gap-8">
                <div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Icon :name="section.icon" class="w-8 h-8 text-[#3178c6] dark:text-blue-400" />
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
                :lang="section.lang || 'typescript'"
                class="shadow-2xl"
              />

              <!-- Tips (optional) -->
              <div 
                v-if="section.tip"
                class="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 rounded-2xl"
              >
                <Icon name="heroicons:light-bulb" class="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <p class="text-blue-800 dark:text-blue-300 text-sm leading-relaxed font-medium">{{ section.tip }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Why TypeScript Section (always visible at bottom) -->
        <div class="mt-20 bg-gradient-to-br from-[#3178c6]/10 to-[#235a9e]/10 dark:from-[#3178c6]/5 dark:to-[#235a9e]/5 border border-[#3178c6]/20 rounded-[2.5rem] p-12">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Por que TypeScript é o <span class="text-[#3178c6]">Melhor do Mercado</span>?
            </h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Empresas líderes e milhões de desenvolvedores escolhem TypeScript. Aqui estão os motivos definitivos.
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="reason in whyTypescript" 
              :key="reason.title"
              class="p-6 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md hover:border-[#3178c6]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon :name="reason.icon" class="w-6 h-6 text-[#3178c6] dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">{{ reason.title }}</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ reason.description }}</p>
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
  { id: 'vue', label: 'Vue + TypeScript', icon: 'vscode-icons:file-type-vue' },
  { id: 'avancado', label: 'Avançado & Config', icon: 'heroicons:wrench-screwdriver' }
]

const tabs = [
  // Conteitos Core
  { id: 'fundamentos', category: 'conceitos', label: 'Fundamentos', icon: 'simple-icons:typescript' },
  { id: 'funcoes', category: 'conceitos', label: 'Funções', icon: 'heroicons:code-bracket' },
  { id: 'interfaces', category: 'conceitos', label: 'Interfaces & Tipos', icon: 'heroicons:square-3-stack-3d' },
  
  // Vue + TypeScript
  { id: 'componentes', category: 'vue', label: 'Componentes', icon: 'heroicons:puzzle-piece' },
  { id: 'reatividade', category: 'vue', label: 'Reatividade', icon: 'heroicons:bolt' },
  { id: 'dom', category: 'vue', label: 'Eventos & DOM', icon: 'heroicons:cursor-arrow-rays' },
  
  // Avançado
  { id: 'generics', category: 'avancado', label: 'Generics', icon: 'heroicons:variable' },
  { id: 'utility', category: 'avancado', label: 'Utility Types', icon: 'heroicons:wrench' },
  { id: 'config', category: 'avancado', label: 'Configuração', icon: 'heroicons:cog-6-tooth' },
]

const filteredTabs = computed(() => tabs.filter(t => t.category === activeCategory.value))

const switchCategory = (catId: string) => {
  activeCategory.value = catId
  // Select first tab of new category
  const firstTab = tabs.find(t => t.category === catId)
  if (firstTab) activeTab.value = firstTab.id
}

const whyTypescript = [
  {
    icon: 'heroicons:shield-check',
    title: 'Segurança de Tipos',
    description: 'Detecte erros em tempo de compilação, não em produção. A tipagem estática elimina toda uma classe de bugs antes mesmo de executar o código.'
  },
  {
    icon: 'heroicons:cpu-chip',
    title: 'IntelliSense Superior',
    description: 'Auto-complete preciso, documentação inline e navegação inteligente. O VS Code + TypeScript é a melhor DX do mercado.'
  },
  {
    icon: 'heroicons:arrow-path',
    title: 'Refatoração Segura',
    description: 'Renomeie funções, mude interfaces, reestruture código com confiança absoluta. O compilador avisa tudo que quebra.'
  },
  {
    icon: 'heroicons:users',
    title: 'Trabalho em Equipe',
    description: 'Interfaces servem como contratos claros entre desenvolvedores. O código se auto-documenta com tipos bem definidos.'
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Escalabilidade',
    description: 'Projetos grandes ficam gerenciáveis. A tipagem impede que a complexidade cresça fora de controle.'
  },
  {
    icon: 'heroicons:globe-alt',
    title: 'Ecossistema Gigante',
    description: 'DefinitelyTyped tem +10.000 pacotes tipados. Praticamente toda biblioteca JS moderna tem suporte a TS.'
  }
]

const docSections = [
  // === CONCEITOS CORE ===
  {
    tabId: 'fundamentos',
    title: '🔷 O que é TypeScript?',
    icon: 'simple-icons:typescript',
    description: 'TypeScript é um superset do JavaScript criado pela Microsoft que adiciona tipagem estática opcional ao JavaScript.',
    content: `TypeScript compila para JavaScript puro, rodando em qualquer ambiente que suporte JS — navegadores, Node.js, Deno, Bun, etc.
    
**Pontos-chave:**
• Toda código JavaScript válido é TypeScript válido
• Adiciona tipos, interfaces, generics e muito mais
• Erros são detectados em tempo de compilação (antes de rodar)
• O output é JavaScript limpo — sem overhead em runtime`,
    code: `// Arquivo TypeScript (.ts)
// Tudo que é JavaScript válido funciona aqui!

// Mas agora você pode tipar suas variáveis:
let nome: string = "TypeScript"
let versao: number = 5.0
let ativo: boolean = true

// Funções tipadas
function saudacao(nome: string): string {
  return \`Olá, \${nome}! Bem-vindo ao TypeScript!\`
}

// O compilador detecta erros antes de rodar:
// saudacao(42) ← ❌ Erro: Argument of type 'number'
//                    is not assignable to parameter of type 'string'

saudacao("Tiago") // ✅ Funciona perfeitamente!`,
    codeLabel: 'intro.ts',
    tip: 'TypeScript não adiciona nenhum custo em runtime — todo o código de tipo é removido durante a compilação. O resultado é JavaScript puro e otimizado.'
  },
  {
    tabId: 'fundamentos',
    title: '📦 Tipos Primitivos',
    icon: 'heroicons:cube',
    description: 'Conheça os tipos básicos do TypeScript — a fundação de todo o sistema de tipos.',
    content: `TypeScript oferece tipos para todos os valores primitivos do JavaScript, além de tipos adicionais exclusivos.
    
**Tipos Básicos:**
• string — texto
• number — números inteiros e decimais
• boolean — true ou false
• null e undefined — ausência de valor
• any — qualquer tipo (evite usar!)
• unknown — tipo seguro para valores desconhecidos`,
    code: `// Tipos primitivos
let texto: string = "Hello World"
let numero: number = 42
let decimal: number = 3.14
let ativo: boolean = true

// Arrays
let numeros: number[] = [1, 2, 3, 4, 5]
let nomes: string[] = ["Ana", "Bruno", "Carlos"]

// Tuplas - arrays com tipos fixos por posição
let coordenada: [number, number] = [10.5, -23.8]

// Enum - conjunto de constantes nomeadas
enum Status {
  Ativo = "ATIVO",
  Inativo = "INATIVO"
}
let meuStatus: Status = Status.Ativo

// Any vs Unknown
let qualquer: any = "perigo" // Evite!
let seguro: unknown = "seguro" // Use este se necessário`,
    codeLabel: 'tipos-primitivos.ts',
    tip: 'Evite usar "any" a todo custo! Use "unknown" quando não souber o tipo, e faça type narrowing com typeof, instanceof ou type guards.'
  },

  {
    tabId: 'funcoes',
    title: '⚡ Funções Poderosas',
    icon: 'heroicons:code-bracket',
    description: 'Controle argumentos opcionais, valores padrão e até sobrecarga de funções (function overloads).',
    content: `Funções são cidadãos de primeira classe no JavaScript e no TypeScript elas ganham superpoderes de validação.

**Recursos:**
• Argumentos Opcionais (?)
• Valores Padrão (=)
• Rest Parameters (...)
• Function Overloads (Múltiplas assinaturas)`,
    code: `// Tipando argumentos e retorno
function somar(a: number, b: number): number {
  return a + b
}

// Argumentos opcionais e padrão
function criarUsuario(nome: string, idade?: number, role: string = "user") {
  // idade é number | undefined
  // role é string (com valor padrão)
  return { nome, idade, role }
}

// Rest Parameters
function somarTudo(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0)
}

// Function Overloads: Uma função, múltiplas formas de chamar
function formatarData(timestamp: number): string;
function formatarData(data: Date): string;
function formatarData(d: number | Date): string {
  if (typeof d === "number") {
    return new Date(d).toISOString()
  }
  return d.toISOString()
}

formatarData(123456789) // ✅ OK
formatarData(new Date()) // ✅ OK
// formatarData("hoje") // ❌ Erro`,
    codeLabel: 'funcoes.ts',
    tip: 'Você pode tipar funções como variáveis também: `const log: (msg: string) => void = console.log`.'
  },

  {
    tabId: 'interfaces',
    title: '🏗️ Interfaces vs Types',
    icon: 'heroicons:square-3-stack-3d',
    description: 'As duas formas principais de definir a estrutura de objetos. Qual usar?',
    content: `Interfaces e Type Aliases são muito parecidos, mas têm sutis diferenças.

**Interface:** Melhor para definir objetos e contratos (OOP). Pode ser estendida (\`extends\`) e sofrer merge.
**Type:** Melhor para uniões (\`|\`), interseções (\`&\`), primitivos e tuplas. Não sofre merge.`,
    code: `// Interface (Preferível para Objetos)
interface Usuario {
  id: number
  nome: string
}

// Extensão (Herança)
interface Admin extends Usuario {
  permissoes: string[]
}

// Type Alias (Preferível para Uniões/Combinações)
type ID = string | number
type Status = "sucesso" | "erro" | "loading"

type RespostaAPI = {
  data: Usuario
  status: Status
}

// Interseção (Merge de Types)
type AdminType = Usuario & {
  permissoes: string[]
}

// Merge Declaration (Só funciona com Interface)
interface Janela {
  title: string
}
interface Janela {
  width: number
}
// Janela agora tem title E width (útil pra estender bibliotecas)`,
    codeLabel: 'interfaces-vs-types.ts',
    tip: 'Comece sempre com `interface` para objetos. Use `type` se precisar de union types (`string | number`) ou tipos complexos.'
  },

  // === VUE + TYPESCRIPT ===
  {
    tabId: 'componentes',
    title: '🧩 Componentes Tipados (Script Setup)',
    icon: 'heroicons:puzzle-piece',
    description: 'Como tipar props, emits e slots usando a sintaxe moderna <script setup lang="ts">.',
    content: `No Vue 3 + TypeScript, usamos macros de compilador genéricos para definir tipos sem importar nada extra.

**Macros Principais:**
• \`defineProps<T>()\`
• \`defineEmits<T>()\`
• \`defineModel<T>()\` (Vue 3.4+)
• \`defineExpose<T>()\``,
    code: `<script setup lang="ts">
// Definindo Props com Interface
interface Props {
  titulo: string
  contador?: number // Opcional
  tags: string[]
}

// const props = defineProps<Props>()

// Com valores padrão (Destructuring Reativo - Vue 3.3+)
const { titulo, contador = 0, tags } = defineProps<Props>()

// Definindo Emits
// Forma simples:
// const emit = defineEmits<{
//   change: [id: number]
//   update: [value: string]
// }>()

// Forma moderna (Vue 3.3+):
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

function handleClick() {
  emit('change', 123)
}
<\/script>

<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="handleClick">Click</button>
  </div>
<\/template>`,
    codeLabel: 'MeuComponente.vue',
    lang: 'vue',
    tip: 'Habilite o "Volar" (agora Vue - Official) no VS Code para ter intellisense perfeito dentro do template, validando props e eventos.'
  },
  
  {
    tabId: 'reatividade',
    title: '⚡ Reatividade Tipada (Ref & Computed)',
    icon: 'heroicons:bolt',
    description: 'Tipando refs, computeds e reactives. Na maioria das vezes o TS infere sozinho, mas às vezes precisamos ajudar.',
    content: `O TypeScript infere o tipo inicial do \`ref\`, mas se o valor inicial for \`null\` ou vazio, precisamos usar Generics.`,
    code: `<script setup lang="ts">
// Inferência automática (number)
const count = ref(0) 

// Inferência de array (string[])
const lista = ref(['a', 'b'])

// ⚠️ Caso complexo: Valor inicial null
interface User {
  id: number
  name: string
}

// const user = ref(null) // Tipo: any ou null (perigoso)
const user = ref<User | null>(null) // ✅ Correto

// Ao usar, precisa verificar null
function logName() {
  if (user.value) {
    console.log(user.value.name)
  }
  // ou Optional Chaining
  console.log(user.value?.name)
}

// Computed Properties
const double = computed(() => count.value * 2) // Inferred: number

// Computed com tipo explícito (raro precisar)
const msg = computed<string>(() => {
  return count.value > 10 ? 'Alto' : 'Baixo'
})

// Reactive
const state = reactive({
  loading: false,
  data: [] as string[] // Type Assertion
})
<\/script>`,
    codeLabel: 'Reatividade.vue',
    lang: 'vue',
    tip: 'Prefira sempre `ref` a `reactive` para evitar perder a reatividade ao desestruturar. `ref` é mais seguro e previsível com TypeScript.'
  },

  {
    tabId: 'dom',
    title: '🖱️ Eventos e Template Refs',
    icon: 'heroicons:cursor-arrow-rays',
    description: 'Como lidar com o DOM, eventos de input e referências a elementos HTML sem usar "any".',
    content: `Tipar eventos corretamente evita o erro clássico \`Property 'value' does not exist on type 'EventTarget'\`.

**Dicas:**
• Use \`Event\` ou \`InputEvent\`
• Faça Type Assertion (\`as HTMLInputElement\`) no target
• Template Refs precisam ser inicializadas com \`null\``,
    code: `<script setup lang="ts">
// 1. Template Refs
// O nome da variável deve bater com o ref="" no template
const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  // O TS sabe que pode ser null, então exige verificação
  inputRef.value?.focus()
})

// 2. Event Handlers
function handleInput(event: Event) {
  // O target é genérico por padrão
  const target = event.target as HTMLInputElement
  console.log(target.value)
}

// Evento de Teclado
function handleKey(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    console.log('Enter pressionado')
  }
}
<\/script>

<template>
  <input 
    ref="inputRef" 
    @input="handleInput" 
    @keydown="handleKey"
    type="text" 
  />
<\/template>`,
    codeLabel: 'DomEvents.vue',
    lang: 'vue',
    tip: 'Não use `any` em eventos! Se não souber o tipo exato do evento, use `Event` e faça o cast do target com `as HTML...Element`.'
  },

  // === AVANÇADO ===
  {
    tabId: 'generics',
    title: '🧬 Generics',
    icon: 'heroicons:variable',
    description: 'Crie componentes e funções reutilizáveis que funcionam com qualquer tipo, mantendo a segurança.',
    content: `Generics são "variáveis para tipos". Eles permitem que você capture o tipo que o usuário passou e o use no retorno.`,
    code: `// Função Genérica Simples
function identity<T>(arg: T): T {
  return arg
}

const num = identity(42)       // T é number
const str = identity("hello")  // T é string

// Interface Genérica (muito comum em API responses)
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

interface User { name: string }
interface Product { title: string; price: number }

// Reutilizando a interface
function fetchUser(): ApiResponse<User> {
  return { 
    data: { name: "Tiago" }, 
    status: 200, 
    message: "OK" 
  }
}

// Generics com Restrições (Constraints)
interface HasId {
  id: number
}

// T DEVE ter a propriedade id
function getId<T extends HasId>(item: T): number {
  return item.id
}

getId({ id: 1, nome: "Test" }) // ✅ OK
// getId({ nome: "Test" })      // ❌ Erro: falta id`,
    codeLabel: 'generics.ts',
    tip: 'No Vue, você pode criar componentes genéricos com `<script setup lang="ts" generic="T">`. Isso é útil para tabelas ou listas reutilizáveis.'
  },

  {
    tabId: 'utility',
    title: '🛠️ Utility Types',
    icon: 'heroicons:wrench',
    description: 'Transforme tipos existentes sem reescrevê-los. O kit de ferramentas essencial do TS.',
    content: `O TypeScript vem com utilitários globais para manipular tipos.

**Essenciais:**
• \`Partial<T>\`: Tudo opcional
• \`Required<T>\`: Tudo obrigatório
• \`Pick<T, K>\`: Escolhe propriedades
• \`Omit<T, K>\`: Remove propriedades
• \`Record<K, V>\`: Cria mapas/dicionários`,
    code: `interface Todo {
  title: string
  description: string
  completed: boolean
}

// Partial: Útil para updates
function updateTodo(todo: Todo, fields: Partial<Todo>) {
  return { ...todo, ...fields }
}

// Pick: Seleciona subset
type TodoPreview = Pick<Todo, "title" | "completed">
// { title: string; completed: boolean }

// Omit: Remove campos sensíveis ou desnecessários
type TodoCreate = Omit<Todo, "id"> 

// Record: Dicionário tipado
type PageConfig = Record<string, { title: string, url: string }>

const pages: PageConfig = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  // 404: { url: "/404" } // ❌ Erro: falta title
}`,
    codeLabel: 'utility-types.ts',
    tip: 'Você pode combinar utilitários! Ex: `Partial<Omit<User, "id">>` cria um tipo onde tudo exceto ID é opcional.'
  },

  {
    tabId: 'config',
    title: '⚙️ Configuração (tsconfig)',
    icon: 'heroicons:cog-6-tooth',
    description: 'Entenda as principais flags do tsconfig.json para deixar seu projeto à prova de balas.',
    content: `O modo estrito (\`strict: true\`) é a configuração mais importante. Ele ativa uma família de verificações de segurança.`,
    code: `{
  "compilerOptions": {
    // A base de tudo
    "strict": true,            // Ativa todas as flags estritas abaixo
    
    // As flags que o strict ativa:
    "noImplicitAny": true,     // Erro se o TS não conseguir inferir tipo
    "strictNullChecks": true,  // null e undefined não são ignorados
    "strictFunctionTypes": true,
    
    // Outras configs úteis
    "target": "ESNext",        // Versão do JS gerado
    "module": "ESNext",        // Sistema de módulos
    "skipLibCheck": true,      // Ignora tipos de node_modules (mais rápido)
    "forceConsistentCasingInFileNames": true // Evita erros em Windows/Mac
  }
}`,
    codeLabel: 'tsconfig.json',
    lang: 'json',
    tip: 'No Nuxt 4, o arquivo `.nuxt/tsconfig.json` já é gerado automaticamente. Você deve estendê-lo no seu `tsconfig.json` raiz.'
  }
]

const filteredSections = computed(() => {
  return docSections.filter(section => section.tabId === activeTab.value)
})

useHead({
  title: 'TypeScript Masterclass - Aprenda Nuxt 4',
  meta: [
    { name: 'description', content: 'Guia definitivo de TypeScript: Fundamentos, Vue 3 + TS, Generics, Interfaces e Melhores Práticas.' }
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
