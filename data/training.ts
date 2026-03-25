import { gameQuestionsExtended, nuxtQuestionsExtended } from './extended'

export type FolderZone = {
  name: string
  count: string
  summary: string
  connect: string
  watch: string
}

export type LearningTrack = {
  title: string
  description: string
  files: string[]
  payoff: string
}

export type FileAtlasEntry = {
  layer: string
  path: string
  purpose: string
  connects: string
  why: string
}

export type MissionStage = {
  label: string
  objective: string
  touchpoints: string[]
  connects: string
  success: string
  pitfall: string
}

export type SimulatorMission = {
  id: string
  title: string
  level: string
  summary: string
  outcome: string
  stages: MissionStage[]
}

export type GameQuestion = {
  category: string
  prompt: string
  context: string
  options: string[]
  answer: string
  explanation: string
}

export const folderZones: FolderZone[] = [
  {
    name: 'Raiz PHP',
    count: '5 telas principais',
    summary: 'Entradas reais do sistema, como login, home e CRUD de usuario.',
    connect: 'Sempre puxa inc/, assets globais e algum backend em js/sqlscope*.php.',
    watch: 'E a camada mais facil para descobrir a jornada do usuario.'
  },
  {
    name: 'inc/',
    count: '8 arquivos',
    summary: 'Bootstrap de layout, sessao, nav, footer, scripts e permissao.',
    connect: 'Liga pagina, SmartUI, repositorio e menu dinamico.',
    watch: 'Quase toda tela valida acesso depois de carregar esse bloco.'
  },
  {
    name: 'js/',
    count: '581 arquivos',
    summary: 'Mistura plugins do template com o nucleo customizado do negocio.',
    connect: 'Business JS chama sqlscope PHP, que chama repositorio e banco.',
    watch: 'Se voce separar plugin de codigo autoral, o projeto fica muito mais legivel.'
  },
  {
    name: 'lib/',
    count: '19 arquivos',
    summary: 'Config base, helpers e classes SmartUI do template administrativo.',
    connect: 'Nutre header, nav e a geracao de componentes.',
    watch: 'Explica porque a interface parece pronta mesmo com paginas PHP simples.'
  },
  {
    name: 'js/services/',
    count: '7 servicos',
    summary: 'UUID, temporario, move, delete e consolidacao de arquivos.',
    connect: 'Apoia FilePond, uploads e o banco Ntl.arquivoTemporario.',
    watch: 'Essencial para qualquer modulo com anexos.'
  },
  {
    name: '.github/workflows/',
    count: '3 pipelines',
    summary: 'Deploy automatico baseado em branch usando FTP.',
    connect: 'Depende de secrets e liga a fonte aos ambientes de publicacao.',
    watch: 'Ajuda a entender como a app sai do GitHub e chega ao servidor.'
  }
]

export const learningTracks: LearningTrack[] = [
  {
    title: 'Track 1: Entrada e sessao',
    description: 'Domine o login e voce entende autenticacao, redirect e uso de sessao.',
    files: ['login.php', 'js/businessAccount.js', 'js/sqlscopeAccount.php'],
    payoff: 'Depois dessa trilha voce consegue rastrear uma acao do clique ate o banco.'
  },
  {
    title: 'Track 2: Moldura da interface',
    description: 'Aprenda como uma pagina nasce pronta com header, nav, scripts e permissao.',
    files: ['inc/init.php', 'lib/config.php', 'inc/config.ui.php', 'inc/header.php'],
    payoff: 'Depois dessa trilha voce sabe plugar uma tela nova sem quebrar a estrutura.'
  },
  {
    title: 'Track 3: CRUD espelhavel',
    description: 'Use o modulo de usuario como molde para criar novas manutencoes.',
    files: ['usuarioFiltro.php', 'usuarioCadastro.php', 'js/businessUsuario.js', 'js/sqlscopeUsuario.php'],
    payoff: 'Depois dessa trilha voce consegue repetir o padrao de filtro, listagem, cadastro e exclusao.'
  },
  {
    title: 'Track 4: Arquivos, integracoes e deploy',
    description: 'Feche a visao do sistema entendendo anexos, Composer, banco e publicacao.',
    files: ['js/sqlscopeUpload.php', 'js/services/GravaArquivoTemporario.php', 'composer.json', '.github/workflows/*.yml'],
    payoff: 'Depois dessa trilha voce sabe o que precisa existir no ambiente para a app funcionar.'
  }
]

export const fileAtlas: FileAtlasEntry[] = [
  {
    layer: 'Entrada',
    path: 'login.php',
    purpose: 'Tela de autenticacao e o formulario mais curto para estudar a app.',
    connects: 'Carrega inc/header.php, inc/scripts.php e dispara js/businessAccount.js.',
    why: 'Ideal para entender a primeira ponte entre interface, AJAX e sessao.'
  },
  {
    layer: 'Entrada',
    path: 'index.php',
    purpose: 'Home apos o login, com permissoes e dados da sessao.',
    connects: 'Le inc/config.ui.php, consulta usuario e renderiza atalhos conforme permissao.',
    why: 'Mostra como o sistema muda a tela conforme perfil do usuario.'
  },
  {
    layer: 'Layout',
    path: 'inc/config.ui.php',
    purpose: 'Centraliza breadcrumbs, menu lateral e permissoes.',
    connects: 'Usa js/repositorio.php para montar acessos a partir do banco.',
    why: 'Se um modulo novo nao aparece no menu, a investigacao quase sempre passa aqui.'
  },
  {
    layer: 'Layout',
    path: 'inc/header.php',
    purpose: 'Monta o cabecalho, carrega CSS, jQuery e consulta logo da empresa.',
    connects: 'Depende de sessao, APP_URL e ASSETS_URL.',
    why: 'Ajuda a separar o que e global do que e local da pagina.'
  },
  {
    layer: 'Banco',
    path: 'js/repositorio.php',
    purpose: 'Classe central que abre PDO sqlsrv e roda SQL ou stored procedures.',
    connects: 'Puxa vendor/autoload.php e espera constantes de conexao fora do repo.',
    why: 'E o eixo tecnico da aplicacao e o melhor ponto para entender as dependencias do ambiente.'
  },
  {
    layer: 'Banco',
    path: 'js/girComum.php',
    purpose: 'Valida login, senha, CPF, CNPJ e criptografa senha com md5.',
    connects: 'E reutilizado por login, CRUD e outras regras de negocio.',
    why: 'Mostra regras compartilhadas e pontos de reaproveitamento.'
  },
  {
    layer: 'Login',
    path: 'js/businessAccount.js',
    purpose: 'Gatilho do login em AJAX.',
    connects: 'Envia funcao validaSenha para js/sqlscopeAccount.php.',
    why: 'Representa o padrao de front mais simples do projeto.'
  },
  {
    layer: 'Login',
    path: 'js/sqlscopeAccount.php',
    purpose: 'Backend do login.',
    connects: 'Consulta Ntl.usuario, valida senha e grava dados em $_SESSION.',
    why: 'Aqui a autenticacao de fato acontece.'
  },
  {
    layer: 'CRUD',
    path: 'usuarioFiltro.php',
    purpose: 'Tela de filtro do modulo de usuario cliente.',
    connects: 'Carrega usuarioFiltroListagem.php sob demanda.',
    why: 'Ensina o padrao de listagem por load() que pode ser reaproveitado.'
  },
  {
    layer: 'CRUD',
    path: 'usuarioCadastro.php',
    purpose: 'Formulario de cadastro e edicao de usuario cliente.',
    connects: 'Usa js/businessUsuario.js para recuperar, salvar e excluir.',
    why: 'E o melhor molde para um novo modulo administrativo.'
  },
  {
    layer: 'CRUD',
    path: 'js/businessUsuario.js',
    purpose: 'Fluxo front do CRUD de usuario.',
    connects: 'Chama js/sqlscopeUsuario.php com recuperar, gravar, excluir e trocar senha.',
    why: 'Mostra como a tela conversa com funcoes backend especificas.'
  },
  {
    layer: 'CRUD',
    path: 'js/sqlscopeUsuario.php',
    purpose: 'Valida dados, chama Ntl.cliente_Atualiza e Ntl.cliente_Deleta.',
    connects: 'Une formulario, validacao, sessao e banco.',
    why: 'Revela o circuito completo de um CRUD real.'
  },
  {
    layer: 'Upload',
    path: 'js/sqlscopeUpload.php',
    purpose: 'Backend grande de anexos com varios tipos de documentos.',
    connects: 'Cria diretorios, valida extensoes e move arquivos.',
    why: 'Importante para qualquer aprendizagem de fluxo pesado no sistema.'
  },
  {
    layer: 'Upload',
    path: 'js/services/GravaArquivoTemporario.php',
    purpose: 'Promove um arquivo temporario para o destino final.',
    connects: 'Consulta Ntl.arquivoTemporario e usa MoveArquivo.',
    why: 'Mostra a ponte entre banco e disco.'
  },
  {
    layer: 'Infra',
    path: 'composer.json',
    purpose: 'Dependencias de PHP como PhpSpreadsheet, FluidXML e PHPMailer.',
    connects: 'Precisa de vendor/autoload.php para o repositorio funcionar direito.',
    why: 'Aponta recursos que o ambiente precisa ter instalado.'
  },
  {
    layer: 'Infra',
    path: '.github/workflows/atualizador_homologacao.yml',
    purpose: 'Deploy automatico para homologacao via FTP.',
    connects: 'Depende de branch dedicada e secrets do GitHub.',
    why: 'Fecha a visao operacional do sistema.'
  },
  {
    layer: 'Infra',
    path: 'web.config',
    purpose: 'Define index.php como documento padrao no IIS.',
    connects: 'Liga a publicacao Windows ao front controller simples do projeto.',
    why: 'Ponto util para quem vai publicar ou manter o ambiente.'
  }
]

export const connectionLoop = [
  {
    title: '1. Pagina raiz',
    detail: 'A tela em PHP monta a interface, inclui os blocos globais e define o ponto de entrada do usuario.'
  },
  {
    title: '2. Business JS',
    detail: 'O JavaScript do modulo captura eventos, valida a experiencia e envia a acao certa por AJAX.'
  },
  {
    title: '3. Sqlscope PHP',
    detail: 'O backend do modulo recebe a funcao, trata os dados e decide qual SQL ou procedure chamar.'
  },
  {
    title: '4. Repositorio',
    detail: 'A classe reposit abre PDO sqlsrv, executa a consulta e entrega arrays para a camada de negocio.'
  },
  {
    title: '5. Banco e ambiente',
    detail: 'Tabelas, procedures, sessao, uploads, vendor e configuracao externa fecham o circuito.'
  }
]

export const simulatorMissions: SimulatorMission[] = [
  {
    id: 'login',
    title: 'Missao 1: destravar o login',
    level: 'Entrada',
    summary: 'Um usuario diz que a tela de login abre, mas nao entra no sistema. Qual circuito voce precisa revisar?',
    outcome: 'Ao final voce entende o caminho completo da autenticacao: tela, AJAX, backend, hash e sessao.',
    stages: [
      {
        label: 'Mapear o gatilho',
        objective: 'Abrir a tela de login e localizar qual JS dispara a acao de entrar.',
        touchpoints: ['login.php', 'js/businessAccount.js'],
        connects: 'Formulario HTML -> doLogin() -> doPostLogin()',
        success: 'Voce sabe exatamente de onde sai o AJAX.',
        pitfall: 'Tentar consertar o banco antes de localizar o evento do botao.'
      },
      {
        label: 'Ler o backend da acao',
        objective: 'Seguir o POST ate a funcao validaSenha.',
        touchpoints: ['js/sqlscopeAccount.php'],
        connects: 'funcao=validaSenha -> consulta Ntl.usuario -> sessao',
        success: 'Voce identifica quais campos do banco precisam existir.',
        pitfall: 'Ignorar a criptografia e comparar senha em texto puro.'
      },
      {
        label: 'Validar utilitarios e banco',
        objective: 'Entender hash, conexao e dependencia externa.',
        touchpoints: ['js/girComum.php', 'js/repositorio.php'],
        connects: 'md5 da senha -> PDO sqlsrv -> constantes de ambiente',
        success: 'Voce sabe o que verificar no ambiente quando o login falha.',
        pitfall: 'Esquecer que o repo nao trouxe a configuracao do banco nem vendor.'
      },
      {
        label: 'Fechar o loop de sessao',
        objective: 'Confirmar o redirect para a home e o uso de $_SESSION.',
        touchpoints: ['js/sqlscopeAccount.php', 'index.php'],
        connects: 'sessao gravada -> index.php -> permissao e home',
        success: 'Voce enxerga a autenticacao como uma trilha completa.',
        pitfall: 'Olhar so o formulario e nao validar o pos-login.'
      }
    ]
  },
  {
    id: 'crud',
    title: 'Missao 2: criar um modulo no padrao do usuario',
    level: 'CRUD',
    summary: 'Voce precisa abrir um novo cadastro administrativo e quer copiar o padrao certo do sistema.',
    outcome: 'Ao final voce domina o esqueleto de filtro, listagem, formulario, backend e menu.',
    stages: [
      {
        label: 'Escolher o molde',
        objective: 'Usar o modulo de usuario como referencia principal.',
        touchpoints: ['usuarioFiltro.php', 'usuarioFiltroListagem.php', 'usuarioCadastro.php'],
        connects: 'Filtro -> listagem -> cadastro/edicao',
        success: 'Voce encontra um modulo que representa bem o padrao da aplicacao.',
        pitfall: 'Copiar um arquivo de plugin em vez de um modulo de negocio.'
      },
      {
        label: 'Conectar a tela ao menu',
        objective: 'Entender onde uma nova pagina precisa entrar para aparecer na navegacao.',
        touchpoints: ['inc/config.ui.php', 'inc/nav.php'],
        connects: '$page_nav -> SmartUI -> menu lateral',
        success: 'Voce sabe onde ativar e marcar a tela atual.',
        pitfall: 'Criar a pagina e esquecer de plugar o acesso.'
      },
      {
        label: 'Fechar o circuito do formulario',
        objective: 'Ligar os botoes do cadastro ao JS de negocio.',
        touchpoints: ['usuarioCadastro.php', 'js/businessUsuario.js'],
        connects: 'acao da tela -> AJAX -> backend',
        success: 'Voce entende como gravar, recuperar e excluir usando o padrao existente.',
        pitfall: 'Colocar regra pesada direto na pagina PHP.'
      },
      {
        label: 'Persistir no banco',
        objective: 'Rastrear onde a gravacao realmente acontece.',
        touchpoints: ['js/sqlscopeUsuario.php', 'js/repositorio.php'],
        connects: 'validacao -> stored procedure Ntl.cliente_Atualiza -> banco',
        success: 'Voce sabe onde adaptar query, procedure e validacao.',
        pitfall: 'Alterar so o JS e esquecer do backend do modulo.'
      }
    ]
  },
  {
    id: 'upload',
    title: 'Missao 3: subir anexos sem perder o fio',
    level: 'Upload',
    summary: 'Seu novo fluxo precisa aceitar documentos e salvar tudo no lugar certo.',
    outcome: 'Ao final voce sabe como a app trata uploads pesados com pasta, banco e arquivos temporarios.',
    stages: [
      {
        label: 'Mapear os campos',
        objective: 'Ler o backend de upload para entender os nomes esperados nos formularios.',
        touchpoints: ['js/sqlscopeUpload.php'],
        connects: 'campo HTML -> $_FILES -> arrays de trabalho',
        success: 'Voce sabe como nomear e organizar anexos no front.',
        pitfall: 'Criar um campo novo sem refletir o nome dentro do sqlscope.'
      },
      {
        label: 'Preparar o armazenamento',
        objective: 'Entender a estrutura de diretorios e tipos aceitos.',
        touchpoints: ['js/sqlscopeUpload.php'],
        connects: '../uploads/* -> whitelist de extensoes',
        success: 'Voce sabe o que precisa existir fisicamente no servidor.',
        pitfall: 'Subir o codigo sem permissao de escrita nas pastas.'
      },
      {
        label: 'Aprender o temporario',
        objective: 'Ver como arquivo temporario e promovido ao destino final.',
        touchpoints: ['js/services/GravaArquivoTemporario.php', 'js/services/MoveArquivo.php'],
        connects: 'Ntl.arquivoTemporario -> MoveArquivo',
        success: 'Voce entende o elo entre banco e arquivo fisico.',
        pitfall: 'Ignorar o temporario e tentar salvar tudo em um unico passo.'
      },
      {
        label: 'Fechar a integracao',
        objective: 'Ligar front, banco e servidor para o fluxo novo funcionar.',
        touchpoints: ['js/sqlscopeUpload.php', 'js/repositorio.php'],
        connects: 'formulario -> backend -> banco -> disco',
        success: 'Voce consegue desenhar um fluxo de anexos novo com menos risco.',
        pitfall: 'Pensar no upload so como UI e esquecer infraestrutura.'
      }
    ]
  },
  {
    id: "seguranca_api",
    title: "Missão 4: Blindar API Legada",
    level: "Segurança Executiva",
    summary: "A diretoria solicitou o bloqueio de requisições CSRF nas rotas de edição financeira.",
    outcome: "Aprendizado do fluxo de proteção da sessão no repositório.",
    stages: [
      {
        label: "Token de Validação",
        objective: "Injetar Token CSRF nas actions do Vue.",
        touchpoints: [
          "js/appConfig.php",
          "js/repositorio.php"
        ],
        connects: "Header -> Middleware de checagem.",
        success: "Requisição é bloqueada ser não vier do domínio certo.",
        pitfall: "Colocar o token estático no HTML."
      }
    ]
  },
  {
    id: "performance_db",
    title: "Missão 5: Otimizar Procedures Lentas",
    level: "DBA",
    summary: "A listagem de clientes está levando 10 segundos. Precisamos revisar o Index e a Query Mestra.",
    outcome: "Aprender técnicas de Indexação no SQL Server para listagens longas e Datatables.",
    stages: [
      {
        label: "Verificar Index",
        objective: "Criar índices não-clusterizados em campos frequentemente pesquisados.",
        touchpoints: [
          "SQL Server Management",
          "Ntl.cliente_Listagem"
        ],
        connects: "Query Plan -> Table Scan -> Index Seek",
        success: "Listagem de 10 segundos cai para 50ms.",
        pitfall: "Colocar índices em todas as colunas causando lentidão no INSERT."
      }
    ]
  }
]

export const gameQuestions: GameQuestion[] = [
  ...gameQuestionsExtended,
  {
    category: 'Login',
    prompt: 'Qual arquivo recebe o AJAX disparado pelo login?',
    context: 'Voce clicou em Entrar e quer seguir a requisicao.',
    options: ['login.php', 'js/businessAccount.js', 'js/sqlscopeAccount.php', 'js/repositorio.php'],
    answer: 'js/sqlscopeAccount.php',
    explanation: 'O business JS envia a acao para js/sqlscopeAccount.php, que valida senha, consulta usuario e grava sessao.'
  },
  {
    category: 'Menu',
    prompt: 'Onde uma tela nova precisa ser plugada para aparecer no menu lateral?',
    context: 'O modulo existe, mas nao entrou na navegacao.',
    options: ['inc/config.ui.php', 'web.config', 'composer.json', 'usuarioFiltroListagem.php'],
    answer: 'inc/config.ui.php',
    explanation: 'O array $page_nav nasce em inc/config.ui.php e depois e renderizado por inc/nav.php.'
  },
  {
    category: 'Banco',
    prompt: 'Qual e o papel mais importante de js/repositorio.php?',
    context: 'Voce precisa explicar a camada de dados para o time.',
    options: [
      'Renderizar os botoes do SmartAdmin',
      'Abrir PDO sqlsrv e executar SQL ou procedures',
      'Gerar o menu lateral com permissoes',
      'Montar os cards da home'
    ],
    answer: 'Abrir PDO sqlsrv e executar SQL ou procedures',
    explanation: 'Essa classe concentra a conexao com SQL Server e vira o eixo entre os modulos backend e o banco.'
  },
  {
    category: 'CRUD',
    prompt: 'Qual stored procedure aparece como gravacao principal no modulo de usuario analisado?',
    context: 'Voce quer localizar o ponto de persistencia do cadastro.',
    options: ['Ntl.usuario_Atualiza', 'Ntl.cliente_Atualiza', 'Ntl.login_Atualiza', 'Ntl.parametro_Atualiza'],
    answer: 'Ntl.cliente_Atualiza',
    explanation: 'js/sqlscopeUsuario.php monta a chamada para Ntl.cliente_Atualiza quando grava o cadastro.'
  },
  {
    category: 'Infra',
    prompt: 'Qual dependencia de ambiente nao veio versionada e precisa existir fora do repo?',
    context: 'Voce esta preparando a aplicacao para subir localmente.',
    options: [
      'Somente imagens da pasta img/',
      'Somente os audios da pasta sound/',
      'Configuracao do banco e vendor/autoload.php',
      'Apenas o web.config'
    ],
    answer: 'Configuracao do banco e vendor/autoload.php',
    explanation: 'O repositorio indica dependencias Composer e usa constantes de conexao que nao apareceram no clone.'
  },
  {
    category: 'Upload',
    prompt: 'Qual arquivo promove um arquivo temporario para o destino final?',
    context: 'Voce esta rastreando o caminho de um anexo.',
    options: [
      'js/services/GravaArquivoTemporario.php',
      'js/businessUsuario.js',
      'inc/header.php',
      'docs/smartui/widget.md'
    ],
    answer: 'js/services/GravaArquivoTemporario.php',
    explanation: 'Ele consulta Ntl.arquivoTemporario e depois usa MoveArquivo para consolidar o arquivo.'
  },
  {
    category: 'Deploy',
    prompt: 'O que os workflows do GitHub fazem nesse projeto?',
    context: 'Voce esta explicando a publicacao para outra pessoa.',
    options: [
      'Geram PDFs para a area financeira',
      'Executam deploy via FTP para ambientes dedicados',
      'Trocam a senha de usuarios automaticamente',
      'Criam o schema do banco toda vez'
    ],
    answer: 'Executam deploy via FTP para ambientes dedicados',
    explanation: 'Os YAMLs encontrados fazem checkout do codigo e sincronizam arquivos por FTP com base em branches especificas.'
  },
  {
    category: 'IIS',
    prompt: 'Qual arquivo define index.php como documento padrao no IIS?',
    context: 'Voce quer conferir o ponto de entrada do servidor Windows.',
    options: ['README.md', 'web.config', 'nuxt.config.ts', 'app.vue'],
    answer: 'web.config',
    explanation: 'O web.config limpa a lista padrao e recoloca index.php como documento inicial.'
  }
]

export const nuxtQuestions: GameQuestion[] = [
  ...nuxtQuestionsExtended,
  {
    category: 'VUE BASE',
    prompt: 'Qual o papel da funcao ref() na Composition API?',
    context: 'Voce quer que um paragrafo da tela atualize quando a variavel mudar.',
    options: ['Injeta estilos no template', 'Cria um estado reativo que avisa o Vue quando muda', 'Compensa falhas do Virtual DOM', 'Requisita dados de uma API'],
    answer: 'Cria um estado reativo que avisa o Vue quando muda',
    explanation: 'Ao usar ref(), o valor interage com a reatividade do Vue, atualizando a DOM automaticamente nas mutacoes.'
  },
  {
    category: 'NUXT 4',
    prompt: 'Por que voce nao precisou importar componentes no setup do arquivo?',
    context: 'Existem diversos componentes nativos, mas nenhum import foi declarado.',
    options: ['Eles vem via CDN', 'Vite apaga os componentes', 'Nuxt faz Auto-Import da pasta components', 'Todo codigo esta no mesmo arquivo compilar'],
    answer: 'Nuxt faz Auto-Import da pasta components',
    explanation: 'Uma das grandes vantagens estruturais e que composables, icones e componentes na pasta oficial sao auto-importados magica e eficientemente on-demand.'
  },
  {
    category: 'TAILWIND',
    prompt: 'Caso voce precise de estilo escuro (Dark Mode) numa div usando Tailwind, o que usar?',
    context: 'A tela precisa ficar agradavel durante a noite.',
    options: ['class="bg-dark"', 'class="dark:bg-slate-900"', 'style="dark-mode: on"', 'class="moon"'],
    answer: 'class="dark:bg-slate-900"',
    explanation: 'Usamos a diretiva `dark:` antes de qualquer utility class atômica do Tailwind para determinar sua aparência noturna.'
  },
  {
    category: 'TYPESCRIPT',
    prompt: 'No trecho `defineProps<{ count: number }>()`, o que o TypeScript barra/evita?',
    context: 'Voce esta definindo contratos do componente filho.',
    options: ['A compilação do HTML', 'Um ataque de XSS', 'Passar uma string ou objeto na props count no Vue de destino', 'Garante o design'],
    answer: 'Passar uma string ou objeto na props count no Vue de destino',
    explanation: 'O TS garante que na hora da construção, a tipagem estrita invalida codigo que fuja da estrutura esperada, parando acidentes no build.'
  }
]
