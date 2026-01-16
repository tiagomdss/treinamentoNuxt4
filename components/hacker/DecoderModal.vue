<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 overflow-hidden">
    <!-- Backdrop with Glitch -->
    <div class="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in"></div>

    <!-- Modal Content -->
    <div class="relative w-full max-w-2xl bg-slate-950 border border-emerald-500/40 rounded-3xl shadow-[0_0_100px_rgba(16,185,129,0.2)] flex flex-col overflow-hidden animate-scale-in">
      
      <!-- Top Bar -->
      <div class="p-6 border-b border-emerald-500/20 flex items-center justify-between bg-emerald-500/5">
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <h2 class="text-emerald-400 font-bold tracking-widest uppercase text-sm">DECRYPT_GATEWAY</h2>
        </div>
        <button @click="$emit('close')" class="text-emerald-500/40 hover:text-red-500 transition-colors">
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
      </div>

      <!-- Main Body -->
      <div class="flex-1 p-8 space-y-8">
        <div class="space-y-4">
          <div class="flex items-center justify-between text-[10px] font-bold text-emerald-500/40 uppercase">
             <span>Target_System</span>
             <span>{{ node.name }}</span>
          </div>
          <div class="h-12 w-full bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center px-4 overflow-hidden">
             <div class="flex gap-2 text-emerald-400 font-mono text-xs overflow-hidden whitespace-nowrap">
                <span v-for="i in 20" :key="i" class="animate-pulse">
                  {{ Math.random().toString(36).substring(7).toUpperCase() }}
                </span>
             </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-xs font-bold text-white uppercase tracking-widest">Execute_Command:</h3>
          <div class="relative">
            <input 
              v-model="command"
              @keyup.enter="handleHack"
              :disabled="isProcessing"
              ref="inputRef"
              type="text"
              placeholder="Waiting for input..."
              class="w-full bg-black/60 border-2 border-emerald-500/30 rounded-xl p-6 text-emerald-400 font-mono text-lg focus:border-emerald-500 focus:outline-none focus:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all placeholder:text-emerald-500/10 disabled:opacity-50"
            />
            <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
               <span class="text-[10px] text-emerald-500/40 font-bold mr-2">ENTER_TO_SEND</span>
               <Icon name="heroicons:chevron-right" class="w-5 h-5 text-emerald-500 animate-[bounce-x_1s_infinite]" />
            </div>
          </div>
        </div>

        <!-- Status / Results -->
        <div class="h-32 bg-black/40 border border-emerald-500/10 rounded-xl p-4 overflow-y-auto font-mono text-[11px] leading-relaxed scrollbar-cyberpunk">
          <div v-if="isProcessing" class="flex flex-col gap-2">
             <div class="flex items-center gap-4">
                <Icon name="heroicons:arrow-path" class="w-4 h-4 animate-spin text-emerald-500" />
                <span class="text-emerald-400">ANALYZING_PACKET_STREAMS...</span>
             </div>
             <div class="w-full bg-emerald-500/5 h-1 rounded-full overflow-hidden mt-4">
                <div class="bg-emerald-500 h-full animate-progress-indefinite"></div>
             </div>
          </div>
          <div v-else-if="result" :class="result.success ? 'text-emerald-400' : 'text-red-400'">
             <p class="font-bold mb-2">> {{ result.message }}</p>
             <p v-if="result.intel" class="text-white opacity-80">{{ result.intel }}</p>
             <p v-if="result.hint" class="opacity-60 mt-2">HINT: {{ result.hint }}</p>
          </div>
          <div v-else class="text-emerald-500/20 text-center flex flex-col items-center justify-center h-full">
             <Icon name="heroicons:cpu-chip" class="w-8 h-8 mb-2 opacity-10" />
             <p>SYSTEM_IDLE</p>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="p-6 bg-emerald-500/5 border-t border-emerald-500/20">
         <button 
           @click="handleHack"
           :disabled="isProcessing || !command"
           class="w-full py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
           :class="[
             command && !isProcessing 
              ? 'bg-emerald-500 text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
              : 'bg-emerald-500/10 text-emerald-500/40 border border-emerald-500/20 grayscale'
            ]"
         >
           <template v-if="isProcessing">
             SYNCHRONIZING...
           </template>
           <template v-else>
             <Icon name="heroicons:bolt" class="w-5 h-5" />
             EXECUTE_HACK
           </template>
         </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any
}>()

const emit = defineEmits(['close', 'success'])

const command = ref('')
const isProcessing = ref(false)
const result = ref<any>(null)
const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  inputRef.value?.focus()
})

async function handleHack() {
  if (!command.value || isProcessing.value) return

  isProcessing.value = true
  result.value = null

  try {
    const data = await $fetch<any>('/api/hacker/validate', {
      method: 'POST',
      body: {
        command: command.value,
        node: props.node.name
      }
    })

    result.value = data
    
    if (data.success && data.data) {
      setTimeout(() => {
        emit('success', data.data)
      }, 1500)
    }
  } catch (error: any) {
    result.value = {
      success: false,
      message: 'CONNECTION_ERROR: Node timeout or server overload.',
      hint: error.statusMessage || 'Check your neural link physical layer.'
    }
  } finally {
    isProcessing.value = false
    command.value = ''
  }
}
</script>

<style scoped>
.animate-scale-in {
  animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes progress-indefinite {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-progress-indefinite {
  animation: progress-indefinite 1.5s linear infinite;
}

@keyframes bounce-x {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
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
</style>
