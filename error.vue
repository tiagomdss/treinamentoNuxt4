<template>
  <div class="min-h-screen bg-[#020617] text-cyan-500 font-mono flex flex-col items-center justify-center p-8 relative overflow-hidden">
    <!-- Matrix background effect -->
    <div class="absolute inset-0 opacity-10 pointer-events-none z-0">
      <div v-for="i in 30" :key="i" class="absolute text-[10px] whitespace-pre text-cyan-200" :style="{ left: `${Math.random() * 100}%`, animation: `matrixRain ${5 + Math.random() * 5}s linear infinite`, animationDelay: `-${Math.random() * 5}s` }">
        101001010111010100101001011101010101
      </div>
    </div>
    
    <div class="relative z-10 flex flex-col items-center max-w-2xl text-center">
      <Icon name="lucide:terminal-square" class="w-32 h-32 text-rose-500 mb-6 animate-pulse drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]" />
      
      <h1 class="text-6xl font-black text-rose-500 mb-4 tracking-widest leading-tight">ERRO CRÍTICO<br/><span class="text-white opacity-50 text-4xl">[{{ error.statusCode }}]</span></h1>
      
      <div class="bg-black/50 border border-rose-500/30 p-8 rounded-lg mb-8 backdrop-blur-sm w-full relative">
         <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500/40 to-transparent opacity-50"></div>
         <p class="text-xl md:text-2xl text-cyan-300 font-bold mb-4 leading-relaxed">{{ funnyMessage }}</p>
         <div class="bg-[#0b101a] border border-cyan-900/50 p-4 font-mono text-xs md:text-sm shadow-inner rounded text-left overflow-x-auto text-rose-400">
           > SYS_LOG: {{ error.message }}
         </div>
      </div>

      <button @click="handleError" class="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.4)] flex items-center gap-2">
        <Icon name="heroicons:arrow-path" class="w-5 h-5"/>
        REINICIAR SISTEMA (VOLTAR AO HUB)
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

const funnyMessage = computed(() => {
  const code = props.error?.statusCode
  if (code === 404) return 'Parece que você tentou acessar uma Rota Fantasma. Nem o PHP, nem o Nuxt 4 sabem onde isso fica. 👻'
  if (code === 500) return 'Boom! O servidor tropeçou num ponto e vírgula perdido em um script legado. Nossos ninjas estão atuando na contenção.'
  if (code === 403) return 'Você não tem "clearance" ativo no protocolo NTL para acessar esta área secretamente. Tente Hackear o sistema!'
  return 'Uma anomalia temporal corrompeu sua navegação. Nosso framework interceptou um erro não catalogado!'
})
</script>

<style>
@keyframes matrixRain {
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
</style>
