<template>
  <div class="relative min-h-screen bg-[#F8FAFC] dark:bg-[#020420] overflow-hidden transition-colors duration-500 font-sans selection:bg-[#00DC82] selection:text-white dark:selection:text-emerald-900">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden text-slate-100 dark:text-white/[0.02] font-mono select-none">
      <div class="absolute top-[5%] left-[5%] text-[10rem] font-bold rotate-12">DATA</div>
      <div class="absolute bottom-[10%] right-[10%] text-[8rem] font-bold -rotate-12 uppercase">Nuxt_4</div>
    </div>
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[700px] h-[600px] bg-emerald-400/10 dark:bg-emerald-600/5 rounded-full blur-[120px]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-16 animate-fade-in">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/20 backdrop-blur-md mb-8 shadow-sm">
            <span class="text-xl">📚</span>
            <span class="text-blue-700 dark:text-blue-300 font-bold text-xs tracking-widest uppercase">Documentação de Elite</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Enciclopédia de <span class="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Migração</span>
          </h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            O guia definitivo para desenvolvedores PHP que buscam a maestria no ecossistema Nuxt 4. Transforme seu legado em uma obra de arte tecnológica.
          </p>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex items-center justify-center gap-3 flex-wrap mb-16 sticky top-8 z-50">
          <div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-1.5 rounded-[2rem] shadow-glass flex flex-wrap gap-1 justify-center max-w-full overflow-x-auto no-scrollbar">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-6 py-3 rounded-[1.5rem] font-bold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap',
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 -translate-y-0.5'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
              ]"
            >
              <Icon :name="tab.icon" class="w-5 h-5" />
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="relative z-10 space-y-12 animate-fade-in content-area">
          
          <!-- Tab: Backend (PHP to Nitro) - DEEP DIVE -->
          <div v-if="activeTab === 'backend'" class="space-y-10">
            <div class="bg-white/65 dark:bg-white/[0.02] border border-white dark:border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-xl shadow-glass relative overflow-hidden">
               <div class="grid lg:grid-cols-2 gap-16">
                  <div class="space-y-6">
                    <h2 class="text-4xl font-bold text-slate-900 dark:text-white leading-tight">Mergulho no <span class="text-emerald-500">Nitro Engine</span></h2>
                    <p class="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
                      Diferente do PHP que inicia um processo completo a cada requisição (Shared Nothing Architecture), o Nitro mantém a aplicação em memória, resultando em respostas na casa dos **~5ms**.
                    </p>
                    <div class="space-y-4">
                       <div v-for="feature in nitroDeepFeatures" :key="feature.title" class="flex gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                             <Icon :name="feature.icon" class="w-6 h-6 text-emerald-500" />
                          </div>
                          <div>
                             <h4 class="font-bold text-slate-800 dark:text-white text-sm">{{ feature.title }}</h4>
                             <p class="text-xs text-slate-500 font-light">{{ feature.desc }}</p>
                          </div>
                       </div>
                    </div>
                  </div>
                  <div class="space-y-6">
                    <div class="bg-slate-950 rounded-[2rem] p-8 border border-white/5 overflow-hidden group">
                       <div class="flex justify-between items-center mb-6">
                          <span class="text-[10px] font-bold text-emerald-500/40 uppercase tracking-widest">Handler_Architecture.ts</span>
                          <span class="animate-pulse w-2 h-2 rounded-full bg-emerald-500"></span>
                       </div>
                       <pre class="text-sm font-mono text-emerald-400 group-hover:text-white transition-colors"><code><span class="text-slate-600">// Tipagem automática do Evento</span>
export default defineEventHandler(async (event) => {
  <span class="text-blue-400">const</span> method = event.method
  <span class="text-blue-400">const</span> body = <span class="text-blue-400">await</span> readBody(event)
  
  <span class="text-slate-600">// Middleware nativo sem .htaccess</span>
  <span class="text-blue-400">return</span> { status: <span class="text-emerald-200">'success'</span>, data: body }
})</code></pre>
                    </div>
                    <div class="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                       <h5 class="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                         <Icon name="heroicons:light-bulb" class="w-4 h-4" />
                         Dica de Estudo
                       </h5>
                       <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                         "Toda função exportada em `server/api/` torna-se automaticamente um endpoint HTTP. O nome do arquivo define a rota e o método."
                       </p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <!-- Tab: Logic (TypeScript ADVANCED) -->
          <div v-if="activeTab === 'logic'" class="space-y-10">
            <div class="bg-white/65 dark:bg-black/60 backdrop-blur-3xl border border-white dark:border-white/10 rounded-[3rem] p-12 shadow-2xl">
               <div class="text-center mb-16">
                  <h2 class="text-4xl font-bold dark:text-white text-slate-900 mb-4">A Ciência do <span class="text-blue-500">TypeScript</span></h2>
                  <p class="text-slate-500 font-light max-w-2xl mx-auto">Saia do `string | number` básico e domine padrões arquiteturais que tornam o PHP obsoleto.</p>
               </div>

               <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div v-for="concept in tsConcepts" :key="concept.title" class="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all group">
                     <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon :name="concept.icon" class="w-8 h-8 text-blue-500" />
                     </div>
                     <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{{ concept.title }}</h3>
                     <p class="text-sm text-slate-600 dark:text-slate-400 font-light mb-6 leading-relaxed">{{ concept.desc }}</p>
                     <div class="bg-black/20 p-4 rounded-xl font-mono text-[10px] text-blue-400/60 overflow-x-auto">
                        {{ concept.code }}
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <!-- Tab: Styling (Tailwind DESIGN) -->
          <div v-if="activeTab === 'styling'" class="space-y-10">
             <div class="relative overflow-hidden bg-white/65 dark:bg-white/[0.02] border border-white dark:border-white/10 rounded-[3rem] p-12 shadow-glass">
                <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] -z-10 animate-pulse"></div>
                
                <h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Modern <span class="text-emerald-500">Atomic Styling</span></h2>
                
                <div class="grid lg:grid-cols-2 gap-16 items-start">
                   <div class="space-y-12">
                      <div v-for="section in stylingDocs" :key="section.title" class="space-y-4">
                         <h4 class="text-xl font-bold text-emerald-600 flex items-center gap-2">
                           <Icon name="heroicons:hashtag" class="w-5 h-5 opacity-40" />
                           {{ section.title }}
                         </h4>
                         <p class="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{{ section.content }}</p>
                      </div>
                   </div>

                   <div class="space-y-8 sticky top-32">
                      <div class="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 space-y-6">
                         <h5 class="text-emerald-700 dark:text-emerald-400 font-bold uppercase text-[10px] tracking-widest">Visual_Sandbox</h5>
                         <div class="flex flex-wrap gap-4">
                            <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-white/10 hover:skew-y-3 transition-transform cursor-pointer">
                               <div class="w-12 h-2 bg-emerald-500 rounded-full mb-3"></div>
                               <div class="w-8 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                            </div>
                            <div class="p-6 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl shadow-lg border border-white/20 hover:-skew-y-3 transition-transform cursor-pointer">
                               <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                  <Icon name="heroicons:star" class="w-4 h-4 text-white" />
                               </div>
                            </div>
                         </div>
                         <p class="text-xs text-slate-500 font-mono leading-relaxed">
                           Tailwind permite criar esses elementos acima em segundos usando apenas classes como `rounded-2xl shadow-lg skew-y-3`.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <!-- Tab: Database (SQL to Prisma/Kysely) - NEW SECTION -->
          <div v-if="activeTab === 'database'" class="space-y-10">
             <div class="bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 rounded-[3rem] p-12 backdrop-blur-xl shadow-glass">
                <div class="max-w-4xl mx-auto space-y-12">
                   <div class="text-center space-y-4">
                      <div class="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Icon name="heroicons:circle-stack" class="w-12 h-12 text-emerald-500" />
                      </div>
                      <h2 class="text-4xl font-bold dark:text-white text-slate-900">Evolução do <span class="bg-emerald-500 text-white px-4 py-1 rounded-xl">Banco de Dados</span></h2>
                      <p class="text-slate-600 dark:text-slate-400 font-light">Abandone o `mysql_query` e domine consultas tipadas e seguras.</p>
                   </div>

                   <div class="grid md:grid-cols-2 gap-12">
                      <div class="space-y-6">
                         <h4 class="text-xl font-bold dark:text-emerald-400 text-emerald-600">Era Legada (PHP)</h4>
                         <div class="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl font-mono text-xs text-red-400 leading-relaxed">
                            $sql = "SELECT id, nome FROM usuarios WHERE id = " . $_GET['id'];<br/>
                            $res = $conn->query($sql);<br/>
                            $data = $res->fetch_assoc();
                            <p class="mt-4 text-[9px] dark:text-red-500/40 text-red-600/40">// Perigo: SQL Injection e Tipagem Manual</p>
                         </div>
                      </div>
                      <div class="space-y-6">
                         <h4 class="text-xl font-bold dark:text-blue-400 text-blue-600">Era Nuxt 4 (Prisma/DB)</h4>
                         <div class="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl font-mono text-xs text-blue-400 leading-relaxed">
                            const user = await db.user.findUnique({<br/>
                            &nbsp;&nbsp;where: { id: Number(query.id) }<br/>
                            });
                            <p class="mt-4 text-[9px] dark:text-blue-500/40 text-blue-600/40">// Seguro: Type-Safe, Prepared Statements Automáticos</p>
                         </div>
                      </div>
                   </div>

                   <div class="p-8 bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-3xl">
                      <h4 class="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                        <Icon name="heroicons:book-open" class="w-5 h-5 text-emerald-500" />
                        Conceitos Chave para Estudo:
                      </h4>
                      <div class="grid md:grid-cols-2 gap-4">
                         <div v-for="item in dbConcepts" :key="item" class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 p-2 border-b border-slate-100 dark:border-white/5">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {{ item }}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <!-- Tab: Architecture (Nuxt 4 Ecosystem) -->
          <div v-if="activeTab === 'architecture'" class="space-y-12">
             <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="card in archCards" :key="card.title" class="group relative bg-white/65 dark:bg-white/[0.03] border border-white dark:border-white/10 p-8 rounded-[2rem] backdrop-blur-xl hover:-translate-y-2 transition-all cursor-default overflow-hidden">
                   <div class="absolute -right-2 -bottom-2 opacity-5 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
                      <Icon :name="card.icon" class="w-24 h-24" />
                   </div>
                   <Icon :name="card.icon" class="w-10 h-10 text-blue-500 mb-6" />
                   <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tighter">{{ card.title }}</h3>
                   <p class="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">{{ card.desc }}</p>
                </div>
             </div>

             <div class="bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#3b82f6_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
                <h3 class="text-4xl font-bold text-white mb-12 relative z-10">O Fluxo de Trabalho Moderno</h3>
                <div class="flex flex-col md:flex-row gap-8 items-center justify-between relative max-w-5xl mx-auto z-10">
                   <div v-for="(step, i) in stepsDetailed" :key="i" class="flex-1 flex flex-col items-center gap-6 group">
                      <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center text-2xl font-bold text-white shadow-2xl group-hover:rotate-6 transition-transform">
                        {{ i + 1 }}
                      </div>
                      <div class="text-center">
                         <span class="text-sm font-bold uppercase text-white mb-2 block tracking-widest">{{ step.label }}</span>
                         <p class="text-[10px] text-slate-400 font-mono uppercase">{{ step.sub }}</p>
                      </div>
                   </div>
                   <!-- Progress line -->
                   <div class="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-white/20 to-emerald-500/0 -z-0"></div>
                </div>
             </div>
          </div>

        </div>

        <!-- Footer Call to Action -->
        <div class="mt-20 p-12 bg-white/60 dark:bg-white/[0.03] border border-white dark:border-white/10 rounded-[3rem] text-center backdrop-blur-xl shadow-glass animate-fade-in">
           <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pronto para o Próximo Nível?</h3>
           <p class="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto font-light">
             A migração é apenas o começo. Domine os conceitos acima e você estará pronto para construir as interfaces do futuro.
           </p>
           <div class="flex flex-wrap gap-4 justify-center">
              <NuxtLink to="/quiz" class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20">
                Testar Meus Conhecimentos
              </NuxtLink>
              <NuxtLink to="/" class="px-8 py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-white/10 hover:bg-white transition-all">
                Voltar ao Início
              </NuxtLink>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeTab = ref('backend')

const tabs = [
  { id: 'backend', label: 'Backend (Nitro Engine)', icon: 'heroicons:server-stack' },
  { id: 'logic', label: 'Lógica (TypeScript)', icon: 'heroicons:command-line' },
  { id: 'styling', label: 'Estilo (Tailwind UI)', icon: 'heroicons:pencil-square' },
  { id: 'database', label: 'Dados (Modern DB)', icon: 'heroicons:circle-stack' },
  { id: 'architecture', label: 'Arquitetura (Nuxt 4)', icon: 'heroicons:finger-print' }
]

const nitroDeepFeatures = [
  { title: 'Zero Cold Starts', icon: 'heroicons:bolt', desc: 'Deploy instantâneo e performance brutal em Serverless.' },
  { title: 'Multi-Runtime', icon: 'heroicons:globe-americas', desc: 'Roda em Node.js, Bun, Cloudflare Workers e Deno sem mudar 1 linha.' },
  { title: 'Storage Layer', icon: 'heroicons:archive-box', desc: 'Abstração unificada para File System, Redis, S3 e bancos.' }
]

const tsConcepts = [
  { title: 'Generics', icon: 'heroicons:cube', desc: 'Crie componentes e funções reutilizáveis que se adaptam a qualquer tipo de dado.', code: 'interface Res<T> { data: T }' },
  { title: 'Type Narrowing', icon: 'heroicons:funnel', desc: 'Garanta que uma variável é de um tipo específico antes de acessá-la.', code: 'if (typeof val === "string")' },
  { title: 'Discriminated Unions', icon: 'heroicons:swatch', desc: 'Padrão perfeito para gerenciar estados complexos de UI ou API.', code: 'type State = "loading" | "error"' }
]

const stylingDocs = [
  { title: 'Design Determinístico', content: 'No CSS tradicional, você cria cores e tamanhos "ad-hoc". No Tailwind, você usa uma escala harmônica pré-definida de 100 a 950 que garante consistência total.' },
  { title: 'JIT Engine', content: 'O "Just-In-Time" compila o CSS sob demanda. Se você usar `text-[#00DC82]`, o Tailwind gera apenas aquela cor específica, mantendo o arquivo final minúsculo.' },
  { title: 'Group Hover & States', content: 'Animações complexas que dependem do pai (`group-hover:translate-x-2`) são feitas sem JavaScript, direto nas classes.' }
]

const dbConcepts = [
  'Prisma ORM (O padrão da indústria)',
  'Kysely (Typescript Query Builder)',
  'Migrations Automáticas',
  'Input Validation (Zod)',
  'Edge Database Proxies',
  'Postgres / PlanetScale Integration'
]

const archCards = [
  { title: 'Auto-Imports', icon: 'heroicons:sparkles', desc: 'O Nuxt monitora as pastas componentes/, composables/ e utils/ importando tudo no momento certo.' },
  { title: 'Island Engine', icon: 'heroicons:sun', desc: 'Renderize componentes cliente apenas onde a interatividade for estritamente necessária.' },
  { title: 'SEO Engine', icon: 'heroicons:magnifying-glass', desc: 'Controle total de Meta Tags e Open Graph com useHead e useSeoMeta nativos.' },
  { title: 'Middleware', icon: 'heroicons:shield-check', desc: 'Proteja rotas e manipule sessões globalmente antes de qualquer renderização.' }
]

const stepsDetailed = [
  { label: 'Setup Environment', sub: 'npx nuxi init' },
  { label: 'Modeling DB', sub: 'Prisma Schema' },
  { label: 'Nitro Backend', sub: 'API Endpoints' },
  { label: 'Vue Architecture', sub: 'Pages & Layouts' },
  { label: 'Atomic Styling', sub: 'Tailwind UI' }
]

useHead({
  title: 'Documentação Técnica - Nuxt 4 Mastery',
  meta: [
    { name: 'description', content: 'Guia completo e enciclopédia técnica para migração de stacks legadas para Nuxt 4.' }
  ]
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.shadow-glass {
  box-shadow: 
    0 4px 20px 0 rgba(31, 38, 135, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.content-area {
  min-height: 500px;
}
</style>
