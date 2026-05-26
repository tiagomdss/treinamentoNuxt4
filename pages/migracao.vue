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
                    <CodeBlock 
                       code="// Tipagem automática do Evento
export default defineEventHandler(async (event) => {
  const method = event.method
  const body = await readBody(event)
  
  // Middleware nativo sem .htaccess
  return { status: 'success', data: body }
})"
                       filename="Handler_Architecture.ts"
                       class="text-sm shadow-2xl"
                    />
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
                          <CodeBlock 
                             code="$sql = 'SELECT id, nome FROM usuarios WHERE id = ' . $_GET['id'];
$res = $conn->query($sql);
$data = $res->fetch_assoc();

// Perigo: SQL Injection e Tipagem Manual"
                             lang="php"
                             filename="legacy_code.php"
                             class="text-xs"
                          />
                      </div>
                      <div class="space-y-6">
                         <h4 class="text-xl font-bold dark:text-blue-400 text-blue-600">Era Nuxt 4 (Prisma/DB)</h4>
                          <CodeBlock 
                             code="const user = await db.user.findUnique({
  where: { id: Number(query.id) }
});

// Seguro: Type-Safe, Prepared Statements Automáticos"
                             lang="typescript"
                             filename="modern_db.ts"
                             class="text-xs"
                          />
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

          <!-- Tab: SQLServer > MySQL -->
          <div v-if="activeTab === 'sqlmysql'" class="space-y-10">
             <div class="bg-white/65 dark:bg-white/[0.02] border border-white dark:border-white/10 rounded-[3rem] p-12 backdrop-blur-xl shadow-glass relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] -z-10"></div>
                
                <div class="max-w-6xl mx-auto space-y-12">
                   <div class="text-center space-y-4 mb-12">
                      <div class="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Icon name="heroicons:arrow-right-circle" class="w-12 h-12 text-blue-500" />
                      </div>
                      <h2 class="text-4xl font-bold dark:text-white text-slate-900">Diferenças <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">SQL Server → MySQL</span></h2>
                      <p class="text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">Um guia completo das principais diferenças sintáticas, tipos de dados e funcionalidades entre os dois bancos de dados mais populares do mercado.</p>
                   </div>

                   <!-- Tipos de Dados -->
                   <div class="space-y-6">
                      <h3 class="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-3">
                        <Icon name="heroicons:table-cells" class="w-7 h-7 text-blue-500" />
                        1. Tipos de Dados
                      </h3>
                      <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
                         <table class="w-full text-sm">
                            <thead class="bg-slate-100 dark:bg-white/5">
                               <tr>
                                  <th class="px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300">Categoria</th>
                                  <th class="px-6 py-4 text-left font-bold text-blue-600 dark:text-blue-400">SQL Server</th>
                                  <th class="px-6 py-4 text-left font-bold text-emerald-600 dark:text-emerald-400">MySQL</th>
                                  <th class="px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300">Notas</th>
                               </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 dark:divide-white/5">
                               <tr v-for="row in dataTypesComparison" :key="row.category" class="hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-colors">
                                  <td class="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">{{ row.category }}</td>
                                  <td class="px-6 py-4 font-mono text-xs text-blue-600 dark:text-blue-400">{{ row.sqlserver }}</td>
                                  <td class="px-6 py-4 font-mono text-xs text-emerald-600 dark:text-emerald-400">{{ row.mysql }}</td>
                                  <td class="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">{{ row.notes }}</td>
                               </tr>
                            </tbody>
                         </table>
                      </div>
                   </div>

                   <!-- Funções e Sintaxe -->
                   <div class="space-y-6">
                      <h3 class="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-3">
                        <Icon name="heroicons:code-bracket" class="w-7 h-7 text-emerald-500" />
                        2. Funções e Sintaxe
                      </h3>
                      <div class="grid md:grid-cols-2 gap-6">
                         <div v-for="(func, idx) in functionsComparison" :key="idx" class="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-white/5">
                            <h4 class="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                              <span class="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-xs font-bold text-blue-500">{{ idx + 1 }}</span>
                              {{ func.name }}
                            </h4>
                            <div class="space-y-3">
                               <div>
                                  <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">SQL Server:</span>
                                  <code class="block mt-1 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs font-mono text-blue-700 dark:text-blue-300">{{ func.sqlserver }}</code>
                               </div>
                               <div>
                                  <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">MySQL:</span>
                                  <code class="block mt-1 px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-xs font-mono text-emerald-700 dark:text-emerald-300">{{ func.mysql }}</code>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <!-- Recursos e Limitações -->
                   <div class="space-y-6">
                      <h3 class="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-3">
                        <Icon name="heroicons:light-bulb" class="w-7 h-7 text-yellow-500" />
                        3. Recursos e Comportamentos
                      </h3>
                      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                         <div v-for="feature in featuresComparison" :key="feature.title" class="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-white/[0.02] dark:to-white/[0.01] rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all group">
                            <div class="flex items-start gap-3 mb-3">
                               <Icon :name="feature.icon" class="w-6 h-6 text-blue-500 mt-1" />
                               <h4 class="font-bold text-slate-800 dark:text-white">{{ feature.title }}</h4>
                            </div>
                            <div class="space-y-2">
                               <div class="flex items-start gap-2">
                                  <span class="text-xs font-bold text-red-500 shrink-0">✗ MSSQL:</span>
                                  <p class="text-xs text-slate-600 dark:text-slate-400">{{ feature.sqlserver }}</p>
                               </div>
                               <div class="flex items-start gap-2">
                                  <span class="text-xs font-bold text-green-500 shrink-0">✓ MySQL:</span>
                                  <p class="text-xs text-slate-600 dark:text-slate-400">{{ feature.mysql }}</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <!-- Dicas de Migração -->
                   <div class="p-8 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 border border-blue-500/20 rounded-3xl">
                      <h4 class="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                        <Icon name="heroicons:clipboard-document-check" class="w-6 h-6 text-blue-500" />
                        Checklist de Migração
                      </h4>
                      <div class="grid md:grid-cols-2 gap-4">
                         <div v-for="tip in migrationTips" :key="tip" class="flex items-start gap-3 p-4 bg-white/50 dark:bg-white/[0.02] rounded-xl">
                            <Icon name="heroicons:check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span class="text-sm text-slate-600 dark:text-slate-400">{{ tip }}</span>
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
              <NuxtLink to="/jogos" class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20">
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
  { id: 'sqlmysql', label: 'SQLServer > MySQL', icon: 'heroicons:arrow-right-circle' },
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

// SQL Server > MySQL Comparison Data
const dataTypesComparison = [
  { category: 'String (tamanho fixo)', sqlserver: 'CHAR(n)', mysql: 'CHAR(n)', notes: 'Ambos armazenam exatamente n caracteres' },
  { category: 'String (variável)', sqlserver: 'VARCHAR(n)', mysql: 'VARCHAR(n)', notes: 'MySQL 5.0.3+ suporta até 65,535 bytes' },
  { category: 'String (grande)', sqlserver: 'VARCHAR(MAX)', mysql: 'TEXT / MEDIUMTEXT / LONGTEXT', notes: 'MySQL tem 3 níveis de texto' },
  { category: 'Unicode', sqlserver: 'NVARCHAR(n)', mysql: 'VARCHAR(n) com utf8mb4', notes: 'SQL Server usa UTF-16, MySQL usa UTF-8' },
  { category: 'Inteiro pequeno', sqlserver: 'TINYINT (0-255)', mysql: 'TINYINT (-128 a 127)', notes: 'SQL Server é unsigned por padrão' },
  { category: 'Inteiro médio', sqlserver: 'SMALLINT', mysql: 'SMALLINT', notes: 'Ambos: -32,768 a 32,767' },
  { category: 'Inteiro grande', sqlserver: 'INT', mysql: 'INT / INTEGER', notes: 'Idênticos: -2B a +2B' },
  { category: 'Inteiro muito grande', sqlserver: 'BIGINT', mysql: 'BIGINT', notes: 'Idênticos: ±9 quintilhões' },
  { category: 'Decimal exato', sqlserver: 'DECIMAL(p,s) / NUMERIC(p,s)', mysql: 'DECIMAL(p,s)', notes: 'NUMERIC é alias no SQL Server' },
  { category: 'Ponto flutuante', sqlserver: 'FLOAT(n) / REAL', mysql: 'FLOAT / DOUBLE', notes: 'SQL Server: FLOAT(53) = DOUBLE' },
  { category: 'Moeda', sqlserver: 'MONEY / SMALLMONEY', mysql: 'DECIMAL(19,4)', notes: 'MySQL não tem tipo MONEY nativo' },
  { category: 'Data e Hora', sqlserver: 'DATETIME', mysql: 'DATETIME', notes: 'SQL Server: 1/300s, MySQL: 1s' },
  { category: 'Data e Hora (precisão)', sqlserver: 'DATETIME2(n)', mysql: 'DATETIME(n)', notes: 'MySQL 5.6.4+ suporta frações' },
  { category: 'Apenas data', sqlserver: 'DATE', mysql: 'DATE', notes: 'Idênticos: YYYY-MM-DD' },
  { category: 'Apenas hora', sqlserver: 'TIME(n)', mysql: 'TIME(n)', notes: 'MySQL TIME pode armazenar horas negativas' },
  { category: 'Timestamp UTC', sqlserver: 'DATETIMEOFFSET', mysql: 'TIMESTAMP', notes: 'MySQL TIMESTAMP é sempre UTC' },
  { category: 'Booleano', sqlserver: 'BIT', mysql: 'BOOLEAN / TINYINT(1)', notes: 'BOOLEAN é alias para TINYINT(1)' },
  { category: 'Binário (fixo)', sqlserver: 'BINARY(n)', mysql: 'BINARY(n)', notes: 'Idênticos' },
  { category: 'Binário (variável)', sqlserver: 'VARBINARY(n)', mysql: 'VARBINARY(n)', notes: 'Idênticos' },
  { category: 'Binário (grande)', sqlserver: 'VARBINARY(MAX)', mysql: 'BLOB / MEDIUMBLOB / LONGBLOB', notes: 'MySQL tem 3 níveis BLOB' },
  { category: 'GUID/UUID', sqlserver: 'UNIQUEIDENTIFIER', mysql: 'CHAR(36) / BINARY(16)', notes: 'MySQL não tem tipo UUID nativo' },
  { category: 'JSON', sqlserver: 'NVARCHAR(MAX) com validação', mysql: 'JSON', notes: 'MySQL 5.7+ tem tipo JSON nativo' },
  { category: 'XML', sqlserver: 'XML', mysql: 'TEXT / VARCHAR', notes: 'MySQL não tem suporte XML nativo' },
  { category: 'Espacial', sqlserver: 'GEOMETRY / GEOGRAPHY', mysql: 'POINT / LINESTRING / POLYGON', notes: 'MySQL tem tipos espaciais limitados' }
]

const functionsComparison = [
  { name: 'Último ID inserido', sqlserver: 'SCOPE_IDENTITY()', mysql: 'LAST_INSERT_ID()' },
  { name: 'Concatenação', sqlserver: 'col1 + col2 ou CONCAT(col1, col2)', mysql: 'CONCAT(col1, col2)' },
  { name: 'Substring', sqlserver: 'SUBSTRING(str, start, len)', mysql: 'SUBSTRING(str, start, len)' },
  { name: 'Length', sqlserver: 'LEN(str)', mysql: 'LENGTH(str) / CHAR_LENGTH(str)' },
  { name: 'Upper/Lower', sqlserver: 'UPPER() / LOWER()', mysql: 'UPPER() / LOWER()' },
  { name: 'Trim', sqlserver: 'LTRIM() / RTRIM()', mysql: 'TRIM() / LTRIM() / RTRIM()' },
  { name: 'Replace', sqlserver: 'REPLACE(str, old, new)', mysql: 'REPLACE(str, old, new)' },
  { name: 'Data atual', sqlserver: 'GETDATE()', mysql: 'NOW() / CURRENT_TIMESTAMP' },
  { name: 'Data UTC', sqlserver: 'SYSUTCDATETIME()', mysql: 'UTC_TIMESTAMP()' },
  { name: 'Extrair ano/mês/dia', sqlserver: 'YEAR() / MONTH() / DAY()', mysql: 'YEAR() / MONTH() / DAY()' },
  { name: 'DATEDIFF', sqlserver: 'DATEDIFF(day, date1, date2)', mysql: 'DATEDIFF(date1, date2)' },
  { name: 'DATEADD', sqlserver: 'DATEADD(day, 5, date)', mysql: 'DATE_ADD(date, INTERVAL 5 DAY)' },
  { name: 'ISNULL', sqlserver: 'ISNULL(col, valor)', mysql: 'IFNULL(col, valor) / COALESCE()' },
  { name: 'CASE', sqlserver: 'CASE WHEN x THEN y ELSE z END', mysql: 'CASE WHEN x THEN y ELSE z END' },
  { name: 'CAST/CONVERT', sqlserver: 'CAST(val AS INT) / CONVERT(INT, val)', mysql: 'CAST(val AS UNSIGNED)' },
  { name: 'Formatar data', sqlserver: 'FORMAT(date, ''dd/MM/yyyy'')', mysql: 'DATE_FORMAT(date, ''%d/%m/%Y'')' },
  { name: 'Row Number', sqlserver: 'ROW_NUMBER() OVER()', mysql: 'ROW_NUMBER() OVER() (v8.0+)' },
  { name: 'Limit results', sqlserver: 'SELECT TOP 10 * FROM t', mysql: 'SELECT * FROM t LIMIT 10' },
  { name: 'Auto-increment', sqlserver: 'IDENTITY(1,1)', mysql: 'AUTO_INCREMENT' }
]

const featuresComparison = [
  { title: 'Stored Procedures', icon: 'heroicons:folder', sqlserver: 'Suporte completo com T-SQL', mysql: 'Suporte básico, sintaxe diferente' },
  { title: 'Triggers', icon: 'heroicons:bolt', sqlserver: 'INSTEAD OF e AFTER triggers', mysql: 'Apenas AFTER triggers (limitado)' },
  { title: 'Views Materializadas', icon: 'heroicons:table-cells', sqlserver: 'Indexed Views', mysql: 'Não suportado nativamente' },
  { title: 'CTEs (Common Table Expressions)', icon: 'heroicons:share', sqlserver: 'Completo suporte', mysql: 'Suportado desde 8.0+' },
  { title: 'Window Functions', icon: 'heroicons:chart-bar', sqlserver: 'Completo (ROW_NUMBER, RANK, etc)', mysql: 'Suportado desde 8.0+' },
  { title: 'Full-Text Search', icon: 'heroicons:magnifying-glass', sqlserver: 'CONTAINS / FREETEXT', mysql: 'MATCH() AGAINST()' },
  { title: 'Partitioning', icon: 'heroicons:rectangle-group', sqlserver: 'Table/Index partitioning', mysql: 'Suporte limitado (RANGE, LIST, HASH)' },
  { title: 'Compression', icon: 'heroicons:arrow-down-on-square', sqlserver: 'Row/Page compression', mysql: 'InnoDB compression básica' },
  { title: 'Encryption', icon: 'heroicons:lock-closed', sqlserver: 'TDE, Always Encrypted', mysql: 'InnoDB tablespace encryption' },
  { title: 'Backup', icon: 'heroicons:cloud-arrow-up', sqlserver: 'BACKUP DATABASE nativo', mysql: 'mysqldump / mysqlbackup externo' },
  { title: 'Transaction Log', icon: 'heroicons:document-text', sqlserver: 'Transaction Log separado', mysql: 'Redo Log no tablespace' },
  { title: 'Locking Hints', icon: 'heroicons:key', sqlserver: 'WITH (NOLOCK), WITH (HOLDLOCK)', mysql: 'FOR UPDATE / LOCK IN SHARE MODE' },
  { title: 'Dynamic SQL', icon: 'heroicons:code-bracket-square', sqlserver: 'EXEC / sp_executesql', mysql: 'PREPARE / EXECUTE statements' },
  { title: 'Error Handling', icon: 'heroicons:exclamation-triangle', sqlserver: 'TRY...CATCH', mysql: 'DECLARE HANDLER' },
  { title: 'Temporary Tables', icon: 'heroicons:archive-box', sqlserver: '#temp (local) / ##temp (global)', mysql: 'CREATE TEMPORARY TABLE' },
  { title: 'Table Variables', icon: 'heroicons:variable', sqlserver: '@table variables', mysql: 'Não suportado' },
  { title: 'Sequences', icon: 'heroicons:numbers', sqlserver: 'CREATE SEQUENCE', mysql: 'Não suportado (usa AUTO_INCREMENT)' },
  { title: 'MERGE Statement', icon: 'heroicons:arrows-right-left', sqlserver: 'MERGE INTO', mysql: 'INSERT ... ON DUPLICATE KEY UPDATE' },
  { title: 'PIVOT/UNPIVOT', icon: 'heroicons:arrows-up-down', sqlserver: 'PIVOT / UNPIVOT nativo', mysql: 'Requires CASE ou JOIN manual' },
  { title: 'Collation', icon: 'heroicons:language', sqlserver: 'Case-insensitive por padrão', mysql: 'Case-sensitive depende da collation' }
]

const migrationTips = [
  'Substitua todos os ISNULL() por IFNULL() ou COALESCE()',
  'Converta DATETIME para DATETIME ou TIMESTAMP conforme necessidade de timezone',
  'Mude UNIQUEIDENTIFIER para CHAR(36) ou BINARY(16) para UUIDs',
  'Ajuste VARCHAR(MAX) para TEXT ou LONGTEXT dependendo do tamanho esperado',
  'Reescreva DATEADD() usando DATE_ADD() com sintaxe INTERVAL',
  'Troque GETDATE() por NOW() ou CURRENT_TIMESTAMP',
  'Converta SCOPE_IDENTITY() para LAST_INSERT_ID()',
  'Adapte stored procedures: sintaxe T-SQL ≠ MySQL',
  'Verifique collations: SQL Server é case-insensitive, MySQL depende da configuração',
  'Teste queries com window functions se usar MySQL < 8.0',
  'Substitua MERGE por INSERT ... ON DUPLICATE KEY UPDATE',
  'Converta tipos MONEY para DECIMAL(19,4)',
  'Ajuste queries que usam TOP para usar LIMIT',
  'Revise triggers: MySQL só suporta AFTER triggers',
  'Valide expressões regulares: sintaxe diferente entre os bancos'
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
