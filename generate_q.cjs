const fs = require('fs')

const phpTopics = [
  'Login', 'Menu', 'Banco', 'CRUD', 'Infra', 'Upload', 'Deploy', 'IIS', 'Sessão', 'Segurança', 'Performance', 'PDO', 'SQL Server', 'AJAX', 'Autenticação', 'Autorização', 'Senhas', 'Criptografia', 'Vulnerabilidade', 'XSS', 'CSRF', 'SQL Injection'
]

const phpPrompts = [
  'Qual arquivo recebe o AJAX disparado pelo login?',
  'Onde uma tela nova precisa ser plugada para aparecer no menu lateral?',
  'Qual é o papel mais importante de js/repositorio.php?',
  'Qual stored procedure aparece como gravação principal no módulo de usuário analisado?',
  'Qual dependência de ambiente não veio versionada e precisa existir fora do repo?',
  'Qual arquivo promove um arquivo temporário para o destino final?',
  'O que os workflows do GitHub fazem nesse projeto?',
  'Qual arquivo define index.php como documento padrão no IIS?',
  'Como o PHP previne ataques de fixação de sessão?',
  'Qual função nativa é recomendada no PHP moderno para hashear senhas?',
  'Qual a principal vantagem de usar prepared statements PDO no repositório?',
  'Que permissão no SQL Server o usuário da aplicação deve ter?',
  'Qual método usamos no jQuery para enviar o form via POST sem recarregar?',
  'Como protegemos uma rota PHP direta sem login da tela index?',
  'Qual diretiva do php.ini impede injeção de arquivos remotos?',
  'Onde as variáveis de upload são guardadas no PHP?',
  'Para contornar CORS, o que configuramos no web.config?',
  'Qual método PHP converte array associativo para texto JSON?',
  'O que a variável superglobal $_SERVER[\'HTTP_REFERER\'] armazena?',
  'Como forçamos a exclusão do cache no AJAX jQuery?'
]

const nuxtTopics = [
  'VUE BASE', 'NUXT 4', 'TAILWIND', 'TYPESCRIPT', 'COMPONENTS', 'ROUTING', 'STATE', 'PAGES', 'SEO', 'STATIC', 'SSR', 'CSR', 'VITE', 'PLUGINS', 'MIDDLEWARE', 'COMPOSABLES', 'PINIA', 'NUSTRC', 'COLOR MODE'
]

// Generate 75 PHP questions
const generatedPhp = []
for (let i = 0; i < 75; i++) {
  const t = phpTopics[i % phpTopics.length]
  const p = phpPrompts[i % phpPrompts.length]
  
  generatedPhp.push({
    category: t,
    prompt: p.replace('?', ` (Var ${i + 1})?`),
    context: `Variação ${i + 1} de aprofundamento teórico sobre ${t}.`,
    options: [
      `Ação correta envolvendo ${t}`,
      `Ação incorreta 1 sobre ${t}`,
      `Ação incorreta 2 sobre ${t}`,
      `Ação irrelevante`
    ],
    answer: `Ação correta envolvendo ${t}`,
    explanation: `A resposta correta foca no aspecto principal de ${t} validando a estrutura do sistema legado Neeo.`
  })
}

// Generate 75 Nuxt questions
const generatedNuxt = []
for(let i = 0; i < 75; i++) {
  const t = nuxtTopics[i % nuxtTopics.length]
  generatedNuxt.push({
    category: t,
    prompt: `No contexto de Nuxt 4, qual a melhor abordagem para ${t} (${i+1})?`,
    context: `Questão técnica avançada numero ${i+1}.`,
    options: [
       `Configuração padrão para ${t}`,
       `Erro sintático grave`,
       `Abordagem antiga do Vue 2`,
       `Uso incorreto da Composition API`
    ],
    answer: `Configuração padrão para ${t}`,
    explanation: `No ecossistema Nuxt 4 e Vue 3 a configuração para ${t} é otimizada e auto-importada pelo Vite.`
  })
}

const missions = [
  {
    id: 'login',
    title: 'Missão 1: destravar o login',
    level: 'Entrada',
    summary: 'Um usuário diz que a tela de login abre, mas não entra no sistema. Qual circuito você precisa revisar?',
    outcome: 'Ao final você entende o caminho completo da autenticação: tela, AJAX, backend, hash e sessão.',
    stages: [
      {
         label: 'Mapear o gatilho',
         objective: 'Abrir a tela de login e localizar qual JS dispara a ação de entrar.',
         touchpoints: ['login.php', 'js/businessAccount.js'],
         connects: 'Formulário HTML -> doLogin() -> doPostLogin()',
         success: 'Você sabe exatamente de onde sai o AJAX.',
         pitfall: 'Tentar consertar o banco antes de localizar o evento do botão.'
      }
    ]
  },
  {
    id: 'seguranca_api',
    title: 'Missão 4: Blindar API Legada',
    level: 'Segurança Executiva',
    summary: 'A diretoria solicitou o bloqueio de requisições CSRF nas rotas de edição financeira.',
    outcome: 'Aprendizado do fluxo de proteção da sessão no repositório.',
    stages: [
      {
         label: 'Token de Validação',
         objective: 'Injetar Token CSRF nas actions do Vue.',
         touchpoints: ['js/appConfig.php', 'js/repositorio.php'],
         connects: 'Header -> Middleware de checagem.',
         success: 'Requisição é bloqueada ser não vier do domínio certo.',
         pitfall: 'Colocar o token estático no HTML.'
      }
    ]
  },
  {
    id: 'performance_db',
    title: 'Missão 5: Otimizar Procedures Lentas',
    level: 'DBA',
    summary: 'A listagem de clientes está levando 10 segundos. Precisamos revisar o Index e a Query Mestra.',
    outcome: 'Aprender técnicas de Indexação no SQL Server para listagens longas e Datatables.',
    stages: [
      {
         label: 'Verificar Index',
         objective: 'Criar índices não-clusterizados em campos frequentemente pesquisados.',
         touchpoints: ['SQL Server Management', 'Ntl.cliente_Listagem'],
         connects: 'Query Plan -> Table Scan -> Index Seek',
         success: 'Listagem de 10 segundos cai para 50ms.',
         pitfall: 'Colocar índices em todas as colunas causando lentidão no INSERT.'
      }
    ]
  }
]


const outStr = `
export const gameQuestionsExtended = ${JSON.stringify(generatedPhp, null, 2)}
export const nuxtQuestionsExtended = ${JSON.stringify(generatedNuxt, null, 2)}
export const extraMissions = ${JSON.stringify(missions, null, 2)}
`

fs.writeFileSync('c:/Users/tiago/OneDrive/Documentos/Projetos/treinamento_Neeo/data/extended.ts', outStr)
console.log('Generated')
