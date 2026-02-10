<template>
  <div class="relative group rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5 bg-[#1e1e1e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]">
    <!-- VS Code-like Header -->
    <div class="flex items-center justify-between px-4 py-2.5 bg-[#252526] border-b border-[#1e1e1e]">
      <div class="flex items-center gap-3">
        <!-- Window Controls -->
        <div class="flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
          <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <!-- Filename -->
        <div class="flex items-center gap-2 ml-2">
          <Icon :name="iconName" class="w-4 h-4 text-blue-400" />
          <span class="text-xs text-slate-400 font-mono">{{ filename || 'snippet.ts' }}</span>
        </div>
      </div>
      
      <!-- Copy Button -->
      <button 
        @click="copy"
        class="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs font-medium"
      >
        <div class="relative">
          <Icon 
            :name="copied ? 'heroicons:check' : 'heroicons:clipboard-document'" 
            class="w-4 h-4 transition-all duration-300"
            :class="copied ? 'text-green-400 scale-110' : ''"
          />
        </div>
        <span>{{ copied ? 'Copiado!' : 'Copiar' }}</span>
      </button>
    </div>

    <!-- Code Content -->
    <div class="relative">
      <div 
        v-if="pending" 
        class="p-6 text-slate-500 font-mono text-sm animate-pulse flex items-center gap-2"
      >
        <Icon name="svg-spinners:90-ring-with-bg" class="w-4 h-4" />
        Carregando highlight...
      </div>
      <div 
        v-else
        v-html="highlightedCode" 
        class="p-6 overflow-x-auto text-sm font-mono leading-relaxed custom-scrollbar"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createHighlighter } from 'shiki'

const props = defineProps<{
  code: string
  lang?: string
  filename?: string
}>()

const highlightedCode = ref('')
const pending = ref(true)
const copied = ref(false)

const iconName = computed(() => {
  if (props.filename?.endsWith('.vue')) return 'vscode-icons:file-type-vue'
  if (props.filename?.endsWith('.js')) return 'vscode-icons:file-type-js-official'
  if (props.filename?.endsWith('.json')) return 'vscode-icons:file-type-json'
  if (props.filename?.endsWith('.css')) return 'vscode-icons:file-type-css'
  return 'vscode-icons:file-type-typescript-official'
})

// Initialize highlighter
// We use a singleton promise to avoid creating multiple highlighters
const highlighterPromise = createHighlighter({
  themes: ['vitesse-dark'],
  langs: ['typescript', 'javascript', 'vue', 'json', 'bash', 'css', 'html', 'php', 'scss']
})

watch(() => props.code, async () => {
  pending.value = true
  try {
    const highlighter = await highlighterPromise
    highlightedCode.value = highlighter.codeToHtml(props.code, {
      lang: props.lang || 'typescript',
      theme: 'vitesse-dark'
    })
  } catch (e) {
    console.error('Highlight error:', e)
    // Fallback basic display
    highlightedCode.value = `<pre><code>${props.code}</code></pre>`
  } finally {
    pending.value = false
  }
}, { immediate: true })

const copy = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style>
/* Shiki output styling overrides */
.shiki {
  background-color: transparent !important;
  margin: 0 !important;
}

code {
  font-family: 'Fira Code', 'Cascadia Code', Consolas, Monaco, monospace;
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #424242;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #4f4f4f;
}
</style>
