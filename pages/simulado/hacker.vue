<template>
  <div class="min-h-screen bg-[#020420] text-emerald-500 font-mono selection:bg-emerald-500 selection:text-black overflow-hidden relative">
    <!-- Matrix Background Effect (Subtle) -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_#10b981_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
    </div>

    <!-- Header / Top Bar -->
    <header class="relative z-20 border-b border-emerald-500/20 bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 bg-emerald-500/10 rounded border border-emerald-500/30 flex items-center justify-center animate-pulse">
          <Icon name="heroicons:shield-check" class="w-6 h-6" />
        </div>
        <div>
          <h1 class="text-xl font-bold tracking-tighter text-emerald-400">NEURAL_LINK_v4.0</h1>
          <p class="text-[10px] text-emerald-500/60 uppercase tracking-widest">Secure Connection Established</p>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-8 text-[12px]">
        <div class="flex flex-col items-end">
          <span class="text-emerald-500/40 font-bold">NODE_ID</span>
          <span class="text-white">SHX-994-ALPHA</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-emerald-500/40 font-bold">IP_ADDR</span>
          <span class="text-white">192.168.44.X</span>
        </div>
        <div class="px-4 py-1 bg-red-500/10 border border-red-500/50 rounded text-red-500 animate-pulse">
          PROXY_CHAIN_ACTIVE
        </div>
      </div>

      <button 
        @click="confirmExit"
        class="p-2 hover:bg-white/5 rounded transition-colors group"
      >
        <Icon name="heroicons:power" class="w-6 h-6 group-hover:text-red-500 transition-colors" />
      </button>
    </header>

    <!-- Main Grid -->
    <main class="relative z-10 p-6 grid grid-cols-12 gap-6 h-[calc(100vh-80px)]">
      
      <!-- Left Sidebar: System Resources -->
      <aside class="col-span-12 lg:col-span-3 space-y-6 overflow-y-auto pr-2">
        <div class="bg-slate-900/50 border border-emerald-500/10 rounded-2xl p-6 backdrop-blur-xl">
          <div class="flex items-center gap-4 mb-8">
            <div class="relative">
              <div class="w-16 h-16 rounded-full border-2 border-emerald-500/30 p-1">
                <div class="w-full h-full rounded-full bg-emerald-500/20 flex items-center justify-center overflow-hidden">
                   <Icon name="heroicons:user" class="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 animate-ping"></div>
            </div>
            <div>
              <h2 class="text-white font-bold text-lg">ZeroCool</h2>
              <p class="text-xs text-emerald-500/60">Rank: Elite Ghost</p>
            </div>
          </div>

          <div class="space-y-6">
             <!-- Resource Bar -->
             <div v-for="res in resources" :key="res.label" class="space-y-2">
                <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>{{ res.label }}</span>
                  <span :class="res.colorCls">{{ res.value }}{{ res.unit }}</span>
                </div>
                <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-emerald-500/5">
                  <div 
                    class="h-full transition-all duration-1000" 
                    :class="res.bgCls"
                    :style="{ width: `${res.value}%` }"
                  ></div>
                </div>
             </div>
          </div>
        </div>

        <div class="bg-slate-900/50 border border-emerald-500/10 rounded-2xl p-6 backdrop-blur-xl">
           <h3 class="text-xs font-bold text-emerald-500/40 uppercase mb-4 tracking-tighter">Hardware_Upgrades</h3>
           <div class="grid grid-cols-4 gap-2">
             <div v-for="i in 8" :key="i" class="aspect-square border border-emerald-500/20 rounded-lg flex items-center justify-center opacity-40 hover:opacity-100 hover:border-emerald-500 transition-all cursor-pointer bg-emerald-500/5">
                <Icon :name="i % 2 === 0 ? 'heroicons:cpu-chip' : 'heroicons:bolt'" class="w-5 h-5" />
             </div>
           </div>
        </div>
      </aside>

      <!-- Center: Network Map -->
      <section class="col-span-12 lg:col-span-6 flex flex-col gap-6">
        <div class="flex-1 bg-slate-900/50 border border-emerald-500/10 rounded-2xl relative overflow-hidden group">
          <!-- Scanline Effect -->
          <div class="absolute inset-0 scanline-effect opacity-5 pointer-events-none"></div>
          
          <div class="absolute top-4 left-4 flex items-center gap-2 text-[10px] text-emerald-400/80 font-bold uppercase py-2 px-3 bg-emerald-500/10 border border-emerald-500/20 rounded backdrop-blur">
             <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             Scanning Region: Sector 7G
          </div>

          <!-- Network Nodes Grid (Placeholder for interactivity) -->
          <div class="absolute inset-0 flex items-center justify-center p-12">
            <div class="grid grid-cols-4 grid-rows-4 w-full h-full gap-4 relative">
              <template v-for="(node, idx) in nodes" :key="idx">
                <button 
                  @click="selectNode(node)"
                  class="relative group/node flex items-center justify-center"
                >
                   <div :class="[
                     'w-10 h-10 rounded-full border-2 transition-all duration-500 flex items-center justify-center',
                     node.status === 'locked' ? 'border-red-500/40 bg-red-500/5' : 'border-emerald-500/40 bg-emerald-500/5',
                     selectedNode === node ? 'scale-150 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : ''
                   ]">
                      <div :class="['w-2 h-2 rounded-full', node.status === 'locked' ? 'bg-red-500' : 'bg-emerald-400 animate-ping']"></div>
                   </div>
                   <!-- Connector lines (visual only) -->
                   <div v-if="idx < nodes.length - 1" class="absolute left-full w-4 h-0.5 bg-emerald-500/10 -ml-2 pointer-events-none"></div>
                </button>
              </template>
            </div>
          </div>

          <div v-if="selectedNode" class="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md animate-fade-in">
             <div class="bg-black/80 border border-emerald-500/40 p-6 rounded-xl backdrop-blur-xl shadow-2xl">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3 class="text-white text-xl font-bold tracking-widest uppercase">{{ selectedNode.name }}</h3>
                    <p class="text-[10px] text-red-500 font-bold mt-1">SECURITY_RATING: {{ selectedNode.security }}</p>
                  </div>
                  <div class="text-[10px] text-emerald-500/60 font-mono text-right">
                    TARGET_LOCK_STABLE<br/>EST_SUCCESS: 64%
                  </div>
                </div>
                <button 
                  @click="initializeHack"
                  class="w-full py-4 bg-emerald-500 text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95"
                >
                  Execute_Protocol.exe
                </button>
             </div>
          </div>
        </div>
      </section>

      <!-- Right Sidebar: Terminal Output -->
      <section class="col-span-12 lg:col-span-3 flex flex-col gap-6 overflow-hidden">
        <div class="flex-1 bg-black/60 border border-emerald-500/20 rounded-2xl flex flex-col backdrop-blur-md">
           <div class="p-4 border-b border-emerald-500/20 flex items-center justify-between text-[11px] font-bold text-emerald-400 uppercase">
             <div class="flex items-center gap-2">
               <Icon name="heroicons:command-line" class="w-4 h-4" />
               Root@SYS-DAEMON:~
             </div>
             <div class="flex gap-1.5">
               <div class="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
               <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
               <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></div>
             </div>
           </div>
           
           <div ref="terminalRef" class="flex-1 overflow-y-auto p-4 space-y-2 text-[11px] leading-relaxed scrollbar-cyberpunk">
             <div v-for="(log, idx) in terminalLogs" :key="idx" :class="log.typeCls">
                <span class="opacity-40 mr-2">></span>
                <span v-html="log.text"></span>
             </div>
             <div class="flex items-center gap-2 animate-pulse mt-4">
                <span class="w-2 h-4 bg-emerald-500"></span>
                <span class="text-[9px] opacity-40">WAITING_FOR_INPUT_</span>
             </div>
           </div>
        </div>

        <div class="h-32 bg-slate-900/50 border border-emerald-500/10 rounded-2xl p-4 backdrop-blur-xl">
           <h3 class="text-xs font-bold text-emerald-500/40 uppercase mb-3 tracking-tighter">Decryption_Queue</h3>
           <div class="space-y-2">
              <div class="flex justify-between text-[9px] font-bold">
                 <span>MD5_HASH_BRUTEFORCE</span>
                 <span>84%</span>
              </div>
              <div class="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div class="h-full bg-emerald-500 w-[84%] animate-shimmer-fast"></div>
              </div>
           </div>
        </div>
      </section>
    </main>

    <!-- Navigation Guard Logic -->
    <client-only>
      <div v-if="showExitModal" class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
        <div class="max-w-md w-full bg-slate-900 border border-red-500/40 p-10 rounded-3xl text-center shadow-[0_0_50px_rgba(239,68,68,0.2)] animate-scale-in">
           <Icon name="heroicons:exclamation-triangle" class="w-20 h-20 text-red-500 mb-8 mx-auto animate-bounce" />
           <h2 class="text-3xl font-bold text-white mb-4 tracking-tighter">ABORT_SEQUENCE?</h2>
           <p class="text-slate-400 font-mono text-sm leading-relaxed mb-10">
             AVISO: Sair do Neural Link agora causará perda total de sincronia. Todos os dados descriptografados serão destruídos.
           </p>
           <div class="grid grid-cols-2 gap-4">
              <button 
                @click="showExitModal = false"
                class="py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors"
              >
                STAY_IN
              </button>
              <button 
                @click="finalExit"
                class="py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20"
              >
                DISCONNECT
              </button>
           </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const gameStarted = ref(false)
const showExitModal = ref(false)
const terminalLogs = ref([
  { text: 'Initializing neural handshake...', typeCls: '' },
  { text: '[SUCCESS] Connected to node 884-Alpha', typeCls: 'text-emerald-400' },
  { text: 'Scanning ports...', typeCls: '' },
  { text: '21/tcp open (ftp)', typeCls: '' },
  { text: '80/tcp open (http)', typeCls: '' },
  { text: '443/tcp open (https)', typeCls: '' },
])

const resources = ref([
  { label: 'Hacker Level', value: 55, unit: '', colorCls: 'text-emerald-400', bgCls: 'bg-emerald-500' },
  { label: 'CPU Heat', value: 75, unit: '°C', colorCls: 'text-red-400', bgCls: 'bg-red-500' },
  { label: 'RAM Usage', value: 42, unit: 'GB', colorCls: 'text-blue-400', bgCls: 'bg-blue-500' },
  { label: 'Detection Risk', value: 12, unit: '%', colorCls: 'text-yellow-400', bgCls: 'bg-yellow-500' }
])

const nodes = ref([
  { name: 'Corp_Mainframe', security: 'MAX', status: 'locked' },
  { name: 'Sub_Router_01', security: 'LOW', status: 'unlocked' },
  { name: 'Database_Entry', security: 'MED', status: 'locked' },
  { name: 'Security_Gateway', security: 'HIGH', status: 'locked' },
  { name: 'Backup_Node', security: 'LOW', status: 'locked' },
  { name: 'Firewall_Bypass', security: 'MED', status: 'locked' },
  { name: 'Admin_Portal', security: 'HIGH', status: 'locked' },
  { name: 'Power_Control', security: 'HIGH', status: 'locked' },
])

const selectedNode = ref<any>(null)
const terminalRef = ref<HTMLElement | null>(null)

function selectNode(node: any) {
  selectedNode.value = node
  addLog(`Targeting node: ${node.name}...`, '')
}

function addLog(text: string, typeCls: string) {
  terminalLogs.value.push({ text, typeCls })
  nextTick(() => {
    if (terminalRef.value) {
      terminalRef.value.scrollTop = terminalRef.value.scrollHeight
    }
  })
}

function initializeHack() {
  gameStarted.value = true
  addLog(`Initializing Nuxt 4 Server Action for: ${selectedNode.value.name}`, 'text-blue-400')
  addLog(`Bypassing Nitro firewall...`, 'animate-pulse')
  
  // Simulation of successful bypass
  setTimeout(() => {
    addLog(`[WARNING] System Trace detected!`, 'text-red-500 font-bold')
    addLog(`Server Route: components/hacker/DecoderModal.vue requested`, 'text-white')
  }, 1500)
}

function confirmExit() {
  if (gameStarted.value) {
    showExitModal.value = true
  } else {
    router.push('/quiz')
  }
}

function finalExit() {
  gameStarted.value = false
  showExitModal.value = false
  router.push('/quiz')
}

// Navigation Guards
const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  if (gameStarted.value) {
    e.preventDefault()
    e.returnValue = ''
  }
}

onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onUnmounted(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload)
})

onBeforeRouteLeave((to, from, next) => {
  if (gameStarted.value && !showExitModal.value) {
    showExitModal.value = true
    next(false)
  } else {
    next()
  }
})

useHead({
  title: 'Hacker Simulation - Nuxt 4 Training',
  meta: [
    { name: 'theme-color', content: '#020420' }
  ]
})
</script>

<style scoped>
.scanline-effect {
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.25) 50%
  ),
  linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 3px 100%;
}

.scrollbar-cyberpunk::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-cyberpunk::-webkit-scrollbar-track {
  background: rgba(16, 185, 129, 0.05);
}

.scrollbar-cyberpunk::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.3);
  border-radius: 10px;
}

.scrollbar-cyberpunk::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.5);
}

@keyframes shimmer-fast {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

.animate-shimmer-fast {
  animation: shimmer-fast 0.5s infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, 20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
