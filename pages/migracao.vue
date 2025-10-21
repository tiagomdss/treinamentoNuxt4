<template>
  <div>
    <!-- Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-2 bg-blue-600/80 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            🔄 Processo de Migração
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">Migração PHP → Nuxt 4</h1>
          <p class="text-xl text-purple-200 mb-8">
            Documentação completa do processo de migração do sistema legado para arquitetura moderna
          </p>
        </div>

        <!-- Progress Overview -->
        <div class="bg-black/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Icon name="heroicons:chart-bar" class="w-8 h-8 text-blue-400" />
            Status Geral da Migração
          </h2>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-white mb-2">68%</div>
              <div class="text-sm text-purple-300 mb-2">APIs Backend</div>
              <div class="text-xs text-purple-400">43 de ~63 migradas</div>
            </div>
            
            <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-white mb-2">77%</div>
              <div class="text-sm text-purple-300 mb-2">Páginas Frontend</div>
              <div class="text-xs text-purple-400">49 de ~64 migradas</div>
            </div>
            
            <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-white mb-2">33%</div>
              <div class="text-sm text-purple-300 mb-2">Componentes</div>
              <div class="text-xs text-purple-400">5 de ~15 criados</div>
            </div>
            
            <div class="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
              <div class="text-4xl font-bold text-white mb-2">60%</div>
              <div class="text-sm text-purple-300 mb-2">Funcionalidades Core</div>
              <div class="text-xs text-purple-400">Em desenvolvimento</div>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex items-center justify-center gap-3 flex-wrap mb-12">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2',
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/50'
            ]"
          >
            <Icon :name="tab.icon" class="w-4 h-4" />
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="space-y-6">
          <!-- O que foi feito -->
          <div v-if="activeTab === 'feito'" class="space-y-6">
            <div class="bg-black/40 backdrop-blur-sm border-2 border-green-500/30 rounded-xl overflow-hidden">
              <div class="bg-green-900/50 p-6 border-b border-green-500/30">
                <h2 class="text-3xl font-bold text-white flex items-center gap-3">
                  <Icon name="heroicons:check-circle" class="w-8 h-8 text-green-400" />
                  O que já foi migrado
                </h2>
              </div>
              
              <div class="p-6 space-y-6">
                <div>
                  <h3 class="text-xl font-bold text-white mb-4">✅ Backend (APIs)</h3>
                  <div class="space-y-3 text-purple-200">
                    <p><strong class="text-green-400">43 APIs de Listagem</strong> - Eventos, Funcionários, Fornecedores, Cadastros Auxiliares</p>
                    <p><strong class="text-green-400">Arquivos de Suporte</strong> - repositorio.php, girComum.php, sqlscope_*.php (2542 arquivos)</p>
                    <p><strong class="text-green-400">Bibliotecas</strong> - FPDF, PHPMailer, PHPQRCode, Composer vendors</p>
                  </div>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-white mb-4">✅ Frontend (Páginas Vue)</h3>
                  <div class="space-y-3 text-purple-200">
                    <p><strong class="text-green-400">49 Páginas</strong> - Dashboard, Login, Eventos, Funcionários, Fornecedores, Configurações</p>
                    <p><strong class="text-green-400">5 Componentes</strong> - Modais de edição, LoadingSpinner, Layout principal</p>
                    <p><strong class="text-green-400">Navegação</strong> - Rotas automáticas, Menu lateral, Breadcrumbs</p>
                  </div>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-white mb-4">✅ Funcionalidades</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-purple-900/30 p-4 rounded-lg">
                      <Icon name="heroicons:list-bullet" class="w-6 h-6 text-green-400 mb-2" />
                      <p class="text-white font-semibold">Listagens Completas</p>
                      <p class="text-sm text-purple-300">Todas as listagens funcionando com banco</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg">
                      <Icon name="heroicons:eye" class="w-6 h-6 text-green-400 mb-2" />
                      <p class="text-white font-semibold">Visualização</p>
                      <p class="text-sm text-purple-300">Detalhes de todos os registros</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg">
                      <Icon name="heroicons:magnifying-glass" class="w-6 h-6 text-green-400 mb-2" />
                      <p class="text-white font-semibold">Busca e Filtros</p>
                      <p class="text-sm text-purple-300">Filtros avançados implementados</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg">
                      <Icon name="heroicons:device-phone-mobile" class="w-6 h-6 text-green-400 mb-2" />
                      <p class="text-white font-semibold">Responsivo</p>
                      <p class="text-sm text-purple-300">Interface adaptada para mobile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- O que falta -->
          <div v-if="activeTab === 'falta'" class="space-y-6">
            <div class="bg-black/40 backdrop-blur-sm border-2 border-yellow-500/30 rounded-xl overflow-hidden">
              <div class="bg-yellow-900/50 p-6 border-b border-yellow-500/30">
                <h2 class="text-3xl font-bold text-white flex items-center gap-3">
                  <Icon name="heroicons:clock" class="w-8 h-8 text-yellow-400" />
                  O que falta migrar
                </h2>
              </div>
              
              <div class="p-6 space-y-6">
                <div>
                  <h3 class="text-xl font-bold text-white mb-4">❌ Backend Pendente</h3>
                  <div class="space-y-3 text-purple-200">
                    <p><strong class="text-yellow-400">~20 APIs de CRUD</strong> - Criar/Editar/Excluir (eventoCadastro.php, funcionarioCadastro.php, etc)</p>
                    <p><strong class="text-yellow-400">APIs de Filtros Avançados</strong> - Filtros complexos com múltiplos parâmetros</p>
                    <p><strong class="text-yellow-400">Tabelas Básicas</strong> - CRUD de 20+ tabelas auxiliares</p>
                    <p><strong class="text-yellow-400">Gestão de Usuários</strong> - Sistema completo de permissões</p>
                  </div>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-white mb-4">❌ Frontend Pendente</h3>
                  <div class="space-y-3 text-purple-200">
                    <p><strong class="text-yellow-400">~10 Modais</strong> - Modais de edição para todas as entidades</p>
                    <p><strong class="text-yellow-400">Componentes UI</strong> - DataTable, FormInputs, DatePicker, FileUpload</p>
                    <p><strong class="text-yellow-400">~15 Páginas</strong> - Páginas de configuração e relatórios</p>
                  </div>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-white mb-4">❌ Funcionalidades Pendentes</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <Icon name="heroicons:lock-closed" class="w-6 h-6 text-yellow-400 mb-2" />
                      <p class="text-white font-semibold">Autenticação Real</p>
                      <p class="text-sm text-purple-300">Login com banco, JWT, hash seguro</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <Icon name="heroicons:shield-check" class="w-6 h-6 text-yellow-400 mb-2" />
                      <p class="text-white font-semibold">Permissões</p>
                      <p class="text-sm text-purple-300">Sistema de roles e permissões</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <Icon name="heroicons:arrow-up-tray" class="w-6 h-6 text-yellow-400 mb-2" />
                      <p class="text-white font-semibold">Upload de Arquivos</p>
                      <p class="text-sm text-purple-300">Fotos, documentos, anexos</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <Icon name="heroicons:document-text" class="w-6 h-6 text-yellow-400 mb-2" />
                      <p class="text-white font-semibold">Relatórios</p>
                      <p class="text-sm text-purple-300">PDF, Excel, gráficos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Prioridades -->
          <div v-if="activeTab === 'prioridades'" class="space-y-6">
            <div class="bg-black/40 backdrop-blur-sm border-2 border-red-500/30 rounded-xl overflow-hidden">
              <div class="bg-red-900/50 p-6 border-b border-red-500/30">
                <h2 class="text-3xl font-bold text-white flex items-center gap-3">
                  <Icon name="heroicons:fire" class="w-8 h-8 text-red-400" />
                  Prioridades
                </h2>
              </div>
              
              <div class="p-6 space-y-8">
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <span class="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">ALTA</span>
                    <h3 class="text-xl font-bold text-white">Essencial</h3>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-red-500">
                      <p class="text-white font-semibold mb-2">1. Salvar dados dos modais (POST/PUT)</p>
                      <p class="text-sm text-purple-300">Implementar função grava() nos modais, validação, feedback</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-red-500">
                      <p class="text-white font-semibold mb-2">2. Autenticação com banco</p>
                      <p class="text-sm text-purple-300">Migrar de hardcoded para tabela Ntl.usuario, hash seguro</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-red-500">
                      <p class="text-white font-semibold mb-2">3. CRUD completo de Eventos</p>
                      <p class="text-sm text-purple-300">Criar, editar, excluir, pré-seleção, confirmação</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <span class="px-3 py-1 bg-yellow-600 text-white text-sm font-bold rounded-full">MÉDIA</span>
                    <h3 class="text-xl font-bold text-white">Importante</h3>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p class="text-white font-semibold mb-2">4. CRUD de Funcionários e Fornecedores</p>
                      <p class="text-sm text-purple-300">Cadastro completo com upload de fotos</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p class="text-white font-semibold mb-2">5. Gestão de Cargos e Centro de Custo</p>
                      <p class="text-sm text-purple-300">CRUD completo, especializações, orçamentos</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <span class="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">BAIXA</span>
                    <h3 class="text-xl font-bold text-white">Desejável</h3>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                      <p class="text-white font-semibold mb-2">6. Escalas, Avaliações, Benefícios</p>
                      <p class="text-sm text-purple-300">Funcionalidades complementares</p>
                    </div>
                    <div class="bg-purple-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                      <p class="text-white font-semibold mb-2">7. Sistema de Atendimento</p>
                      <p class="text-sm text-purple-300">Tickets, categorias, histórico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Roadmap -->
          <div v-if="activeTab === 'roadmap'" class="space-y-6">
            <div class="bg-black/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl overflow-hidden">
              <div class="bg-purple-900/50 p-6 border-b border-purple-500/30">
                <h2 class="text-3xl font-bold text-white flex items-center gap-3">
                  <Icon name="heroicons:calendar" class="w-8 h-8 text-purple-400" />
                  Roadmap de Desenvolvimento
                </h2>
              </div>
              
              <div class="p-6 space-y-6">
                <div class="relative pl-8 border-l-2 border-purple-500/30">
                  <div class="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <Icon name="heroicons:check" class="w-4 h-4 text-white" />
                  </div>
                  <div class="bg-purple-900/30 p-4 rounded-lg mb-6">
                    <p class="text-sm text-purple-400 mb-2">✅ Concluído</p>
                    <p class="text-white font-semibold mb-2">Fase 1: Estrutura Base</p>
                    <p class="text-sm text-purple-300">Frontend moderno, listagens, navegação, APIs de consulta</p>
                  </div>
                </div>

                <div class="relative pl-8 border-l-2 border-purple-500/30">
                  <div class="absolute -left-3 top-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Icon name="heroicons:clock" class="w-4 h-4 text-white" />
                  </div>
                  <div class="bg-purple-900/30 p-4 rounded-lg mb-6">
                    <p class="text-sm text-yellow-400 mb-2">🔄 Semanas 1-2</p>
                    <p class="text-white font-semibold mb-2">Fase 2: CRUD Básico</p>
                    <p class="text-sm text-purple-300">Salvamento nos modais, validação, exclusão, feedback</p>
                  </div>
                </div>

                <div class="relative pl-8 border-l-2 border-purple-500/30">
                  <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="heroicons:ellipsis-horizontal" class="w-4 h-4 text-white" />
                  </div>
                  <div class="bg-purple-900/30 p-4 rounded-lg mb-6">
                    <p class="text-sm text-purple-400 mb-2">📅 Semanas 3-4</p>
                    <p class="text-white font-semibold mb-2">Fase 3: Autenticação</p>
                    <p class="text-sm text-purple-300">Login com banco, JWT, sessões, middleware</p>
                  </div>
                </div>

                <div class="relative pl-8 border-l-2 border-purple-500/30">
                  <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="heroicons:ellipsis-horizontal" class="w-4 h-4 text-white" />
                  </div>
                  <div class="bg-purple-900/30 p-4 rounded-lg mb-6">
                    <p class="text-sm text-purple-400 mb-2">📅 Semanas 5-8</p>
                    <p class="text-white font-semibold mb-2">Fase 4: Funcionalidades Core</p>
                    <p class="text-sm text-purple-300">Eventos, Funcionários, Fornecedores completos</p>
                  </div>
                </div>

                <div class="relative pl-8">
                  <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="heroicons:ellipsis-horizontal" class="w-4 h-4 text-white" />
                  </div>
                  <div class="bg-purple-900/30 p-4 rounded-lg">
                    <p class="text-sm text-purple-400 mb-2">📅 Semanas 9-12</p>
                    <p class="text-white font-semibold mb-2">Fase 5: Finalização</p>
                    <p class="text-sm text-purple-300">Relatórios, testes, otimizações, deploy</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Estimativa -->
            <div class="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8">
              <h3 class="text-2xl font-bold text-white mb-6 text-center">⏱️ Estimativa de Conclusão</h3>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="text-center">
                  <div class="text-4xl font-bold text-white mb-2">4-6</div>
                  <div class="text-purple-200">semanas</div>
                  <div class="text-sm text-purple-400 mt-2">MVP (Essencial)</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-white mb-2">10-12</div>
                  <div class="text-purple-200">semanas</div>
                  <div class="text-sm text-purple-400 mt-2">Sistema Completo</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-white mb-2">14-16</div>
                  <div class="text-purple-200">semanas</div>
                  <div class="text-sm text-purple-400 mt-2">Produção (com testes)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeTab = ref('feito')

const tabs = [
  { id: 'feito', label: 'O que foi feito', icon: 'heroicons:check-circle' },
  { id: 'falta', label: 'O que falta', icon: 'heroicons:clock' },
  { id: 'prioridades', label: 'Prioridades', icon: 'heroicons:fire' },
  { id: 'roadmap', label: 'Roadmap', icon: 'heroicons:calendar' }
]

useHead({
  title: 'Migração - Aprenda Nuxt 4',
  meta: [
    { name: 'description', content: 'Documentação do processo de migração PHP para Nuxt 4' }
  ]
})
</script>
