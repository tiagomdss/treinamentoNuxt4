export const hackerMissionsData = [
  {
    id: 'html',
    type: 'html_drag',
    tech: 'HTML',
    codename: 'HTML_SKELETON.exe',
    desc: 'Montar o Esqueleto: O aluno recebe blocos de tags embaralhadas e precisa arrastar para construir a estrutura.',
    instruction: 'CLIQUE NAS TAGS PARA CONSTRUIR O ESQUELETO SEMÂNTICO DO FORMULÁRIO (PAI -> FILHO)',
    icon: 'vscode-icons:file-type-html',
    xp: 50,
    firstBlood: true,
    completed: false,
    locked: false,
    targetDesc: 'Protocolo de Estruturação DOM',
    timer: false,
    puzzles: [
      {
        skeletonPre: '<form class="cyber-form">\n  <!-- Autenticação Requerida -->',
        skeletonPost: '</form>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<label for="code">Acesso Root</label>', order: 0 },
          { id: 'p2', content: '<input type="password" id="code" required>', order: 1 },
          { id: 'p3', content: '<button type="submit">INFILTRAR</button>', order: 2 },
          { id: 'p4', content: '<div>Fake Bypass</div>', order: -1 }
        ]
      },
      {
        skeletonPre: '<article>\n  <!-- Cabeçalho do Artigo -->',
        skeletonPost: '</article>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<header>', order: 0 },
          { id: 'p2', content: '<h1>Título Secreto</h1>', order: 1 },
          { id: 'p3', content: '</header>', order: 2 },
          { id: 'p4', content: '<footer>', order: -1 }
        ]
      },
      {
        skeletonPre: '<nav id="main-nav">\n  <!-- Lista de Navegação -->',
        skeletonPost: '</nav>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<ul>', order: 0 },
          { id: 'p2', content: '<li><a href="/sys">Sys</a></li>', order: 1 },
          { id: 'p3', content: '</ul>', order: 2 },
          { id: 'p4', content: '<ol>', order: -1 }
        ]
      },
      {
        skeletonPre: '<section class="data-grid">\n  <!-- Estrutura Tabela -->',
        skeletonPost: '</section>',
        slots: 4,
        pieces: [
          { id: 'p1', content: '<table>', order: 0 },
          { id: 'p2', content: '<thead><tr><th>ID</th></tr></thead>', order: 1 },
          { id: 'p3', content: '<tbody><tr><td>001</td></tr></tbody>', order: 2 },
          { id: 'p4', content: '</table>', order: 3 },
          { id: 'p5', content: '<div>', order: -1 }
        ]
      },
      {
        skeletonPre: '<main>\n <!-- Semântica de Rodapé de Página -->',
        skeletonPost: '</main>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<footer class="site-footer">', order: 0 },
          { id: 'p2', content: '<p>&copy; Ghost Protocol</p>', order: 1 },
          { id: 'p3', content: '</footer>', order: 2 },
          { id: 'p4', content: '<header>', order: -1 }
        ]
      },
      {
        skeletonPre: '<div class="media-container">\n <!-- Elemento de Áudio Acessível -->',
        skeletonPost: '</div>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<audio controls>', order: 0 },
          { id: 'p2', content: '<source src="intercept.mp3" type="audio/mpeg">', order: 1 },
          { id: 'p3', content: '</audio>', order: 2 },
          { id: 'p4', content: '<video>', order: -1 }
        ]
      },
      {
        skeletonPre: '<form>\n <!-- Seleção de Servidor -->',
        skeletonPost: '</form>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<select name="server">', order: 0 },
          { id: 'p2', content: '<option value="omega">Omega</option>', order: 1 },
          { id: 'p3', content: '</select>', order: 2 },
          { id: 'p4', content: '<input type="radio">', order: -1 }
        ]
      },
      {
        skeletonPre: '<div class="details-panel">\n <!-- Acordeão Nativo -->',
        skeletonPost: '</div>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<details>', order: 0 },
          { id: 'p2', content: '<summary>Logs Críticos</summary>', order: 1 },
          { id: 'p3', content: '</details>', order: 2 },
          { id: 'p4', content: '<span>Logs Críticos</span>', order: -1 }
        ]
      },
      {
        skeletonPre: '<div class="user-card">\n <!-- Imagem com Fallback Acessível -->',
        skeletonPost: '</div>',
        slots: 3,
        pieces: [
          { id: 'p1', content: '<picture>', order: 0 },
          { id: 'p2', content: '<img src="avatar.jpg" alt="Ghost">', order: 1 },
          { id: 'p3', content: '</picture>', order: 2 },
          { id: 'p4', content: '<canvas>', order: -1 }
        ]
      },
      {
        skeletonPre: '<div class="progress-tracker">\n <!-- Progresso Semântico -->',
        skeletonPost: '</div>',
        slots: 2,
        pieces: [
          { id: 'p1', content: '<label for="hack">Hack:</label>', order: 0 },
          { id: 'p2', content: '<progress id="hack" value="50" max="100">50%</progress>', order: 1 },
          { id: 'p3', content: '<div class="bar">50%</div>', order: -1 }
        ]
      }
    ]
  },
  {
    id: 'css_vanilla',
    type: 'css_dark_mode',
    tech: 'CSS VANILLA',
    codename: 'DARK_MODE.css',
    desc: 'O servidor central colapsou para 100% de escuridão. Restaure a interface digitando as propriedades CSS puras exatas na Folha de Estilos.',
    instruction: 'DIGITE AS PROPRIEDADES NATIVAS DO CSS PARA ACENDER A ILUMINAÇÃO DO SERVIDOR',
    targetDesc: 'Protocolo de Restauração Luminosa',
    icon: 'vscode-icons:file-type-css',
    xp: 250,
    timer: true,
    puzzles: [
      { targetProperties: ['color: white;', 'background-color: transparent;'], targetsHelp: 'Cor do texto branca e Fundo transparente' },
      { targetProperties: ['display: flex;', 'justify-content: center;', 'align-items: center;'], targetsHelp: 'Flexbox centralizado total nos dois eixos' },
      { targetProperties: ['position: absolute;', 'top: 0;', 'left: 0;'], targetsHelp: 'Posicionamento absoluto rente ao canto superior esquerdo' },
      { targetProperties: ['opacity: 1;', 'filter: brightness(100%);'], targetsHelp: 'Visibilidade translúcida 100% (Opacidade) e Filtro de brilho total' },
      { targetProperties: ['box-shadow: 0 0 10px cyan;', 'border: 1px solid cyan;'], targetsHelp: 'Sombra da caixa de 10px ciano (sem offsets) e Borda sólida ciano de 1 pixel' },
      { targetProperties: ['display: grid;', 'grid-template-columns: 1fr 1fr;', 'gap: 20px;'], targetsHelp: 'Display em Grid, Duas colunas fracionais iguais e Lacuna (espaçamento) de 20px' },
      { targetProperties: ['font-weight: bold;', 'font-size: 24px;', 'text-align: center;'], targetsHelp: 'Peso da fonte em negrito, Tamanho 24px e Alinhamento de texto isolado ao centro' },
      { targetProperties: ['transform: scale(1.5);', 'transition: all 0.3s;'], targetsHelp: 'Transformação de escala em 1.5x e Transição global de 0.3s' },
      { targetProperties: ['z-index: 999;', 'visibility: visible;'], targetsHelp: 'Índice Z de prioridade 999 e Estado de Visibilidade visível' },
      { targetProperties: ['border-radius: 50%;', 'overflow: hidden;'], targetsHelp: 'Raio de borda de circunferência perfeita (50%) e Transbordamento oculto' }
    ]
  },
  {
    id: 'css',
    type: 'css_inject',
    tech: 'Tailwind CSS',
    codename: 'STYLE_BREACH.css',
    desc: 'Camuflagem Visual: Uma interface quebrada aparece. Aplique classes Tailwind para "restaurar o disfarce" centralizando-a sobre um fundo preto absoluto.',
    instruction: 'SELECIONE AS CLASSES TAILWIND CORRETAS PARA REPARAR A TELA',
    icon: 'vscode-icons:file-type-tailwind',
    xp: 80,
    firstBlood: true,
    completed: false,
    locked: true,
    targetDesc: 'Camuflagem Visual (UI/UX)',
    timer: false,
    puzzles: [
      {
        targetClasses: ['absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black'],
        options: ['absolute', 'relative', 'inset-0', 'w-full', 'h-full', 'flex', 'grid', 'block', 'items-center', 'justify-center', 'text-center', 'bg-black', 'bg-white', 'text-white']
      },
      {
        targetClasses: ['grid', 'grid-cols-2', 'gap-4', 'p-4'],
        options: ['grid', 'flex', 'grid-cols-2', 'grid-cols-4', 'gap-4', 'space-y-4', 'p-4', 'm-4', 'items-center', 'bg-black']
      },
      {
        targetClasses: ['absolute', 'top-0', 'right-0', 'p-2', 'bg-red-500'],
        options: ['absolute', 'relative', 'top-0', 'bottom-0', 'right-0', 'left-0', 'p-2', 'bg-red-500', 'text-red-500', 'flex']
      },
      {
        targetClasses: ['w-full', 'max-w-md', 'mx-auto', 'mt-10'],
        options: ['w-full', 'max-w-md', 'mx-auto', 'my-auto', 'mt-10', 'mb-10', 'p-4', 'flex', 'text-center']
      },
      {
        targetClasses: ['flex', 'flex-col', 'items-start', 'space-y-2'],
        options: ['flex', 'grid', 'flex-col', 'flex-row', 'items-start', 'items-end', 'space-y-2', 'gap-2', 'p-2', 'm-2']
      },
      {
        targetClasses: ['hidden', 'md:flex', 'lg:grid'],
        options: ['hidden', 'block', 'invisible', 'md:flex', 'md:block', 'lg:grid', 'lg:flex', 'flex', 'grid']
      },
      {
        targetClasses: ['bg-gradient-to-r', 'from-cyan-500', 'to-blue-500'],
        options: ['bg-gradient-to-r', 'bg-gradient-to-b', 'from-cyan-500', 'to-blue-500', 'via-purple-500', 'bg-cyan-500', 'bg-blue-500']
      },
      {
        targetClasses: ['rounded-full', 'w-16', 'h-16', 'shadow-lg'],
        options: ['rounded-full', 'rounded-xl', 'rounded-md', 'w-16', 'h-16', 'w-full', 'h-full', 'shadow-lg', 'shadow-sm', 'border']
      },
      {
        targetClasses: ['text-transparent', 'bg-clip-text', 'bg-white'],
        options: ['text-transparent', 'text-white', 'text-black', 'bg-clip-text', 'bg-white', 'bg-black', 'truncate']
      },
      {
        targetClasses: ['hover:bg-cyan-600', 'transition-colors', 'duration-300'],
        options: ['hover:bg-cyan-600', 'bg-cyan-600', 'hover:text-cyan-600', 'transition-colors', 'transition-all', 'duration-300', 'ease-in-out']
      }
    ]
  },
  {
    id: 'js',
    type: 'js_gaps',
    tech: 'JavaScript',
    codename: 'JS_CORE.js',
    desc: 'Desativar a Bomba: Completar funções JS com lacunas para "desativar o sistema". Erra a sintaxe? ERRO: DETONAÇÃO.',
    instruction: 'PREENCHA AS LACUNAS NO CÓDIGO CORRETAMENTE.',
    icon: 'vscode-icons:file-type-js-official',
    xp: 120,
    firstBlood: true,
    completed: false,
    locked: true,
    timer: true,
    targetDesc: 'Bypass de Autenticação Funcional',
    puzzles: [
      {
        codePre: 'function defuse(payload) {\n  if (!payload) return false;\n  const safe = payload.',
        codeMid: '(item => item.threat ',
        codePost: ' 50);\n  return safe.length === 0;\n}',
        gapOptions: [['map', 'filter', 'reduce', 'forEach'], ['===', '<', '>', '!==']],
        correctOptions: ['filter', '<']
      },
      {
        codePre: 'function getKeys(obj) {\n  return Object.',
        codeMid: '(obj).',
        codePost: '(key => key.startsWith("sec_"));\n}',
        gapOptions: [['keys', 'values', 'entries', 'assign'], ['filter', 'map', 'reduce', 'slice']],
        correctOptions: ['keys', 'filter']
      },
      {
        codePre: 'const findTarget = (arr, id) => {\n  return arr.',
        codeMid: '(x => x.id ',
        codePost: ' id);\n}',
        gapOptions: [['find', 'findIndex', 'includes', 'some'], ['===', '==', '=', '!=']],
        correctOptions: ['find', '===']
      },
      {
        codePre: 'const totalXP = (missions) => {\n  return missions.',
        codeMid: '((acc, m) => acc + m.xp, ',
        codePost: ');\n}',
        gapOptions: [['reduce', 'map', 'filter', 'forEach'], ['0', '1', '[]', '{}']],
        correctOptions: ['reduce', '0']
      },
      {
        codePre: 'function cloneSecure(data) {\n  return JSON.',
        codeMid: '(JSON.',
        codePost: '(data));\n}',
        gapOptions: [['parse', 'stringify', 'clone', 'copy'], ['stringify', 'parse', 'toString', 'object']],
        correctOptions: ['parse', 'stringify']
      },
      {
        codePre: 'const isArray = (data) => {\n  return Array.',
        codeMid: '(data) ',
        codePost: ' true;\n}',
        gapOptions: [['isArray', 'from', 'of', 'prototype'], ['===', '==', '?', '||']],
        correctOptions: ['isArray', '===']
      },
      {
        codePre: 'function blockEvent(e) {\n  e.',
        codeMid: '();\n  e.',
        codePost: '();\n}',
        gapOptions: [['preventDefault', 'stop', 'halt', 'cancel'], ['stopPropagation', 'end', 'close', 'kill']],
        correctOptions: ['preventDefault', 'stopPropagation']
      },
      {
        codePre: 'async function fetchBio(url) {\n  const res = ',
        codeMid: ' fetch(url);\n  return ',
        codePost: ' res.json();\n}',
        gapOptions: [['await', 'async', 'yield', 'return'], ['await', 'new', 'return', 'yield']],
        correctOptions: ['await', 'await']
      },
      {
        codePre: 'const hasPermission = (roles) => {\n  return roles.',
        codeMid: '("ADMIN") ',
        codePost: ' roles.includes("ROOT");\n}',
        gapOptions: [['includes', 'has', 'contains', 'find'], ['||', '&&', '??', '|']],
        correctOptions: ['includes', '||']
      },
      {
        codePre: 'function cleanString(str) {\n  return str.',
        codeMid: '()',
        codePost: '(" ");\n}',
        gapOptions: [['trim', 'slice', 'substr', 'split'], ['.toLowerCase', '.trimLeft', '.replace', '.concat']],
        correctOptions: ['trim', '.toLowerCase']
      }
    ]
  },
  {
    id: 'ts',
    type: 'ts_types',
    tech: 'TypeScript',
    codename: 'TYPED_AGENT.ts',
    desc: 'Decifrar o Código Tipado: Código corrompido com "any" em todo lugar. Substitua pelos tipos corretos.',
    instruction: 'CLIQUE NOS "ANY" PARA DECIFRAR OS TIPOS E COMPILAR O SCRIPT EM STRICT MODE.',
    icon: 'vscode-icons:file-type-typescript-official',
    xp: 150,
    firstBlood: true,
    completed: false,
    locked: true,
    timer: false,
    targetDesc: 'Criptografia Estática',
    puzzles: [
      {
        codePre: 'interface Agent {\n  id: [0];\n  codename: [1];\n  clearance: [2];\n}\n\nasync function getAgents(): Promise<[3]> {\n  const res = await fetch("/api");\n  return res.json();\n}',
        options: [
          ['any', 'number', 'string', 'boolean'],
          ['any', 'string', 'number', 'Date'],
          ['any', 'number', 'boolean', 'string'],
          ['any', 'Agent', 'Agent[]', 'string[]']
        ],
        correct: ['number', 'string', 'number', 'Agent[]'],
        gapCount: 4
      },
      {
        codePre: 'function calculateHash(data: [0], salt: [1]): [2] {\n  const hash: [3] = crypto.hash(data + salt);\n  return hash;\n}',
        options: [
          ['any', 'string', 'number', 'object'],
          ['any', 'string', 'number', 'boolean'],
          ['any', 'string', 'void', 'number'],
          ['any', 'string', 'number', 'Buffer']
        ],
        correct: ['string', 'string', 'string', 'string'],
        gapCount: 4
      },
      {
        codePre: 'type AuthHeaders = Record<[0], [1]>;\nfunction setHeader(headers: [2], val: [3]) {\n  //...\n}',
        options: [
          ['any', 'string', 'number', 'symbol'],
          ['any', 'string', 'void', 'unknown'],
          ['any', 'AuthHeaders', 'object', 'Array'],
          ['any', 'string', 'boolean', 'number']
        ],
        correct: ['string', 'string', 'AuthHeaders', 'string'],
        gapCount: 4
      },
      {
        codePre: 'interface Weapon {\n  ammo: [0];\n  isLoaded: [1];\n}\nconst fire = (w: [2]): [3] => {\n  if(w.isLoaded) w.ammo--;\n}',
        options: [
          ['any', 'number', 'string', 'boolean'],
          ['any', 'boolean', 'number', 'string'],
          ['any', 'Weapon', 'object', 'string'],
          ['any', 'void', 'boolean', 'Weapon']
        ],
        correct: ['number', 'boolean', 'Weapon', 'void'],
        gapCount: 4
      },
      {
        codePre: 'function parseTuple(data: [0][]): [[1], [2]] {\n  return [data[0], Number(data[1])];\n}',
        options: [
          ['any', 'string', 'number', 'unknown'],
          ['any', 'string', 'number', 'boolean'],
          ['any', 'number', 'string', 'boolean']
        ],
        correct: ['string', 'string', 'number'],
        gapCount: 3
      },
      {
         codePre: 'type Point = {\n  x: [0];\n  y: [1];\n};\nconst center: [2] = { x: 0, y: 0 };',
         options: [
            ['any', 'number', 'string', 'boolean'],
            ['any', 'number', 'string', 'boolean'],
            ['any', 'Point', 'object', 'Array']
         ],
         correct: ['number', 'number', 'Point'],
         gapCount: 3
      },
      {
         codePre: 'const flags: [0] = [true, false];\nfunction toggle(f: [1]): [2] {\n  return !f;\n}',
         options: [
            ['any', 'boolean[]', 'Array', 'string[]'],
            ['any', 'boolean', 'number', 'string'],
            ['any', 'boolean', 'void', 'unknown']
         ],
         correct: ['boolean[]', 'boolean', 'boolean'],
         gapCount: 3
      },
      {
         codePre: 'interface Node {\n  val: [0];\n  next: [1] | null;\n}\nlet head: [2] | null = null;',
         options: [
            ['any', 'number', 'string', 'Node'],
            ['any', 'Node', 'object', 'number'],
            ['any', 'Node', 'string', 'number']
         ],
         correct: ['number', 'Node', 'Node'],
         gapCount: 3
      },
      {
         codePre: 'function assertIsString(val: [0]): asserts val is [1] {\n  if(typeof val !== [2]) throw new Error();\n}',
         options: [
            ['any', 'unknown', 'string', 'object'],
            ['any', 'string', 'number', 'boolean'],
            ['any', '"string"', '"number"', 'string']
         ],
         correct: ['unknown', 'string', '"string"'],
         gapCount: 3
      },
      {
         codePre: 'type Status = [0] | "offline";\nlet s: [1] = "online";\nfunction setStatus(x: [2]) {}',
         options: [
            ['any', '"online"', 'string', 'number'],
            ['any', 'Status', 'string', 'object'],
            ['any', 'Status', 'string', 'boolean']
         ],
         correct: ['"online"', 'Status', 'Status'],
         gapCount: 3
      }
    ]
  },
  {
    id: 'php',
    type: 'php_terminal',
    tech: 'PHP Back-end',
    codename: 'SHADOW_SERVER.php',
    desc: 'Invadir o Servidor: Receba um endpoint vulnerável e aplique o código PDO ou cURL seguro.',
    instruction: 'SELECIONE O CÓDIGO FONTE CORRETO PARA RESOLVER A VULNERABILIDADE / PROBLEMA E RETORNAR 200.',
    icon: 'vscode-icons:file-type-php',
    xp: 200,
    firstBlood: true,
    completed: false,
    locked: true,
    timer: false,
    targetDesc: 'Quebra de Endpoint Legado',
    puzzles: [
      {
        prompt: 'root@shadow-server:~# cat login.php\nWARNING: SQL INJECTION VULNERABILITY FOUND AT LINE 12',
        options: [
          '$db->query("SELECT * FROM users WHERE user = " . $_POST["u"]);',
          '$stmt = $db->prepare("SELECT * FROM users WHERE user = ?"); $stmt->execute([$_POST["u"]]);',
          'mysqli_query($conn, "SELECT * FROM users WHERE user = " . addslashes($_POST["u"]));'
        ],
        correct: 1
      },
      {
        prompt: 'root@shadow-server:~# cat config.php\nWARNING: PASSWORD HASHING IS DEPRECATED (MD5)',
        options: [
          '$hash = hash("sha256", $password);',
          '$hash = password_hash($password, PASSWORD_DEFAULT);',
          '$hash = crypt($password, "salt");'
        ],
        correct: 1
      },
      {
        prompt: 'root@shadow-server:~# cat api_curl.php\nERROR: cURL request not capturing response as string.',
        options: [
          'curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);',
          'curl_setopt($ch, CURLOPT_HEADER, false);',
          'curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);'
        ],
        correct: 0
      },
      {
        prompt: 'root@shadow-server:~# cat auth.php\nERROR: Session fixation vulnerability detected.',
        options: [
          'session_start(); $_SESSION["user"] = $user;',
          'session_start(); session_regenerate_id(true);',
          'setcookie("session_id", session_id(), time() + 3600);'
        ],
        correct: 1
      },
      {
        prompt: 'root@shadow-server:~# cat upload.php\nWARNING: Unrestricted File Upload allows execution.',
        options: [
          'move_uploaded_file($file, "uploads/" . $_FILES["file"]["name"]);',
          'if(in_array($ext, ["jpg", "png"])) move_uploaded_file($tmp, $path);',
          'copy($_FILES["file"]["tmp_name"], "uploads/img.jpg");'
        ],
        correct: 1
      },
      {
        prompt: 'root@shadow-server:~# cat logs.php\nERROR: XSS found when displaying user comments.',
        options: [
          'echo $comment;',
          'echo strip_tags($comment);',
          'echo htmlspecialchars($comment, ENT_QUOTES, "UTF-8");'
        ],
        correct: 2
      },
      {
        prompt: 'root@shadow-server:~# cat api.php\nERROR: API returns text instead of proper JSON headers.',
        options: [
          'header("Content-Type: application/json"); echo json_encode($data);',
          'echo json_encode($data);',
          'header("Accept: application/json"); echo json_encode($data);'
        ],
        correct: 0
      },
      {
        prompt: 'root@shadow-server:~# cat route.php\nERROR: Output buffering is breaking the download file stream.',
        options: [
          'ob_end_clean(); readfile($file);',
          'ob_start(); readfile($file);',
          'flush(); readfile($file);'
        ],
        correct: 0
      },
      {
        prompt: 'root@shadow-server:~# cat db_conn.php\nERROR: PDO Error mode is silent.',
        options: [
          '$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);',
          '$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);',
          '$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);'
        ],
        correct: 1
      },
      {
        prompt: 'root@shadow-server:~# cat cors.php\nERROR: Local Nuxt app cannot fetch from this API due to CORS.',
        options: [
          'header("Access-Control-Allow-Origin: *");',
          'header("Access-Control-Allow-Origin: http://localhost:3000");',
          'ini_set("cors", "true");'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 'nuxt',
    type: 'nuxt_boss',
    tech: 'Nuxt 4',
    codename: 'QUANTUM_UI.vue',
    desc: 'Missão Final - Projeto Fantasma: Responda as perguntas arquiteturais complexas do Nuxt 4 para dominar o deploy.',
    instruction: 'SELECIONE A CLÁUSULA CORRETA DE ARQUITETURA NUXT PARA RESOLVER O PROBLEMA DO SISTEMA',
    icon: 'vscode-icons:file-type-nuxt',
    xp: 500,
    firstBlood: true,
    completed: false,
    locked: true,
    timer: false,
    targetDesc: 'Deploy Fantasma Estrutural',
    puzzles: [
      {
        promptTitle: 'ROOT_DIRECTORY',
        files: ['nuxt.config.ts', 'app.vue', '[ LOCAL_SECRETO ]'],
        question: 'COMO DECLARAR CORRETAMENTE UM SERVER ENDPOINT NO NUXT UTILIZANDO NITRO PARA RETORNAR DADOS EM /api/ghost?',
        options: [
          'Criar arquivo em pages/api/ghost.vue com <script setup>',
          'Criar arquivo em server/api/ghost.ts usando defineEventHandler()',
          'Criar função estática dentro do nuxt.config.ts em routeRules'
        ],
        correct: 1
      },
      {
        promptTitle: 'PERFORMANCE_TUNING',
        files: ['nuxt.config.ts'],
        question: 'Como forçar uma página pesada a ser renderizada APENAS no servidor (SSG) no Nuxt 4?',
        options: [
          'Adicionar definePageMeta({ ssr: true })',
          'Adicionar a rota no routeRules com prerender: true no nuxt.config.ts',
          'Exportar const prerender = true;'
        ],
        correct: 1
      },
      {
        promptTitle: 'STATE_MANAGEMENT',
        files: ['composables/useAuth.ts'],
        question: 'Qual a forma recomendada pelo Nuxt 4 para compartilhar estado global seguro entre SSR e Client?',
        options: [
          'Utilizar useState("auth", () => result) para garantir hidratação correta.',
          'Importar import { ref } from "vue" e exportar globalmente.',
          'Usar localStorage diretamente no script setup.'
        ],
        correct: 0
      },
      {
        promptTitle: 'SEO_OPTIMIZATION',
        files: ['pages/index.vue'],
        question: 'Como declarar meta tags dinâmicas dependentes de uma API para SEO no Server Side?',
        options: [
          'usar onMounted() e document.title = data.title',
          'usar o composable useSeoMeta() logo após a chamada await useAsyncData()',
          'Colocar <style> no template com content'
        ],
        correct: 1
      },
      {
        promptTitle: 'MIDDLEWARE_AUTH',
        files: ['middleware/auth.global.ts'],
        question: 'Como interceptar a rota globalmente e redirecionar se o usuário não logou?',
        options: [
          'export default defineNuxtRouteMiddleware((to, from) => { if(!auth) return navigateTo("/login") })',
          'window.location.href = "/login" no onBeforeMount()',
          'router.push("/login") no app.vue'
        ],
        correct: 0
      },
      {
        promptTitle: 'DATA_FETCHING',
        files: ['pages/dashboard.vue'],
        question: 'Qual método previne duplicação de fetch entre Servidor e Cliente durante a navegação inicial?',
        options: [
          'fetch("/api/data")',
          '$fetch("/api/data") em onMounted()',
          'await useFetch("/api/data") no nível superior do script setup'
        ],
        correct: 2
      },
      {
        promptTitle: 'MODULES_INTEGRATION',
        files: ['nuxt.config.ts'],
        question: 'Como habilitar o Tailwind CSS corretamente na configuração do Nuxt 4?',
        options: [
          'modules: ["@nuxtjs/tailwindcss"]',
          'buildModules: ["tailwindcss"] no package.json',
          'import "tailwindcss" no app.vue'
        ],
        correct: 0
      },
      {
        promptTitle: 'ASSETS_HANDLING',
        files: ['public/', 'assets/'],
        question: 'Onde deve ser colocada uma imagem gigante "banner.jpg" que não deve passar pelo empacotador Webpack/Vite?',
        options: [
          'Na pasta /assets',
          'Na pasta /public e acessada via /banner.jpg',
          'Direto na raiz do projeto.'
        ],
        correct: 1
      },
      {
        promptTitle: 'COMPOSABLES_AUTOIMPORT',
        files: ['composables/utils.ts'],
        question: 'Composables são auto-importados nativamente no Nuxt 4. Como exportá-los para que isso ocorra?',
        options: [
          'usando const = export default',
          'Apenas usar "export const useX = () => {}"',
          'Eles precisam ser registrados no nuxt.config.ts em "autoImports"'
        ],
        correct: 1
      },
      {
        promptTitle: 'ERROR_HANDLING',
        files: ['error.vue'],
        question: 'Como limpar um erro fatal e retornar o usuário para a Home Page (recovery mode)?',
        options: [
          'window.location = "/"',
          'usar handleError() passando { redirect: "/" }',
          'usar clearError({ redirect: "/" }) no evento de clique de um botão'
        ],
        correct: 2
      }
    ]
  }
]
