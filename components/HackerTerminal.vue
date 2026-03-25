<template>
  <div class="h-[800px] w-full bg-[#030914] rounded-[2rem] border border-cyan-500/30 overflow-hidden relative shadow-[0_0_50px_rgba(0,255,255,0.05)] font-mono text-cyan-400 selection:bg-cyan-500/30">
    <!-- Matrix Rain Background (Cyan Edition) -->
    <div class="absolute inset-0 opacity-10 pointer-events-none overflow-hidden mix-blend-screen">
      <div v-for="i in 20" :key="i" class="absolute text-[10px] whitespace-pre text-cyan-200" :style="{ left: `${Math.random() * 100}%`, animation: `matrixRain ${5 + Math.random() * 5}s linear infinite`, animationDelay: `-${Math.random() * 5}s` }">
        101001010111010100101001011101010101
      </div>
    </div>

    <!-- Scanline Overlay -->
    <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,255,0.02),rgba(0,100,255,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20 block"></div>

    <!-- Glitch Intro Phase -->
    <transition name="glitch-fade">
      <div v-if="phase === 'booting'" class="absolute inset-0 flex flex-col items-center justify-center z-40 bg-[#02060d]">
        <div class="text-3xl md:text-5xl font-bold tracking-[0.5em] mb-4 text-cyan-500 animate-pulse">{{ bootText }}</div>
        <div class="w-64 h-1 bg-cyan-900 overflow-hidden rounded-full">
          <div class="h-full bg-cyan-400 transition-all duration-300" :style="{ width: `${bootProgress}%` }"></div>
        </div>
        <div class="mt-4 text-xs opacity-50">{{ logs[logs.length - 1] || 'Iniciando sub-rotinas...' }}</div>
      </div>
    </transition>

      <!-- Main Interface -->
    <div v-if="phase === 'ready' || phase === 'mission'" class="relative z-10 h-full flex flex-col p-6 animate-fade-in">
      
      <!-- Top Header / StatusBar -->
      <header class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-cyan-500/30 pb-4 mb-6 shrink-0">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-cyan-500 text-black flex items-center justify-center font-bold text-2xl rounded-sm">
            <Icon name="mdi:incognito" class="w-8 h-8" />
          </div>
          <div>
             <h1 class="text-xl font-bold tracking-widest uppercase md:text-base text-sm text-cyan-300">GHOST_PROTOCOL_V4.2</h1>
            <div class="text-xs text-cyan-600">SESSÃO CRIPTOGRAFADA // USUÁRIO ROOT</div>
          </div>
        </div>
        <div class="mt-4 sm:mt-0 text-right flex items-center gap-6">
          <button @click="$emit('exit')" class="text-rose-500 hover:text-rose-400 text-xs flex items-center gap-2 border border-rose-500/30 px-2 py-1 bg-rose-900/10 transition-colors hover:bg-rose-900/30">
            <Icon name="heroicons:power" class="w-3 h-3" /> VOLTAR AO HUB
          </button>
          <div class="text-left">
            <div class="text-[10px] text-cyan-600">RANK ATUAL</div>
            <div class="font-bold text-cyan-200 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">[{{ currentRank }}]</div>
          </div>
          <div class="text-left">
            <div class="text-xs text-cyan-600">XP GLOBAL</div>
            <div class="font-bold text-lg text-cyan-400">{{ xp }} <span class="text-xs opacity-50">XP</span></div>
          </div>
          <div class="text-right">
            <div class="text-[10px] text-rose-500 uppercase font-black tracking-widest drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]">SISTEMA VITAL [{{ 5 - errorStrikes }}]</div>
            <div class="flex gap-1 justify-end mt-1">
               <div v-for="i in 5" :key="i" class="w-3 h-3 sm:w-4 sm:h-4 border border-rose-500/50 rounded-sm flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(244,63,94,0)]" :class="i <= errorStrikes ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]' : 'bg-rose-950/40'"></div>
            </div>
          </div>
        </div>
      </header>

      <!-- Missions Grid (Dashboard) -->
      <div v-if="phase === 'ready'" class="flex-1 overflow-y-auto no-scrollbar pr-2 pb-4">
        <div class="mb-6 flex justify-between items-end">
          <div>
             <h2 class="text-2xl font-bold text-cyan-100 mb-1">&gt; DIRETÓRIO DE OPERAÇÕES</h2>
             <p class="text-sm text-cyan-600">Selecione um alvo para infiltração de sistemas. (Desafios Aleatórios)</p>
          </div>
          <div class="text-xs border border-cyan-500 text-cyan-400 px-3 py-1 bg-cyan-500/10">
            {{ missionsCompleted }}/6 CONCLUÍDAS
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            v-for="mission in missions" 
            :key="mission.id"
            @click="bootMission(mission)"
            :disabled="mission.locked"
            class="relative text-left p-6 border transition-all duration-300 group overflow-hidden flex flex-col min-h-[160px]"
            :class="[
               mission.completed ? 'border-indigo-500 bg-indigo-500/5 hover:border-indigo-400 cursor-pointer' : 
               mission.locked ? 'border-rose-900/30 bg-rose-900/5 cursor-not-allowed opacity-40 grayscale' : 
               'border-cyan-500/40 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400 cursor-pointer shadow-[inset_0_0_20px_rgba(0,255,255,0)] hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.05)]'
            ]"
          >
            <!-- Background Grid effect on hover -->
            <div v-if="!mission.locked" class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            
            <div class="flex justify-between items-start mb-4 relative z-10 w-full">
              <div class="text-xs font-bold tracking-widest mb-1 opacity-70 flex items-center gap-2 text-cyan-300">
                <Icon :name="mission.icon" class="w-4 h-4" />
                {{ mission.tech }}
              </div>
              <div 
                v-if="mission.completed" 
                class="px-2 font-bold text-[10px] border border-indigo-500 text-indigo-400 uppercase"
              >REJOGAR DISPONÍVEL</div>
              <div 
                v-else-if="mission.locked" 
                class="px-2 font-bold text-[10px] bg-rose-900 text-white uppercase"
              >LOCKED</div>
              <div 
                v-else 
                class="px-2 font-bold text-[10px] border border-cyan-500 text-cyan-400 uppercase animate-pulse"
              >ACTIVE</div>
            </div>
            
            <h3 class="text-xl font-bold mb-2 text-white relative z-10 group-hover:text-cyan-200 transition-colors">
              {{ mission.codename }}
            </h3>
            
            <p class="text-sm text-cyan-500 leading-relaxed mb-4 relative z-10 flex-1 line-clamp-2">
               {{ mission.desc }}
            </p>
            
            <div class="flex gap-2 relative z-10 mt-auto">
               <span class="text-[10px] border border-cyan-500/30 px-2 py-0.5 bg-black/50 text-cyan-300">REWARD: {{ mission.xp }}XP</span>
               <span v-if="!mission.completed" class="text-[10px] border border-amber-500/50 text-amber-400 px-2 py-0.5 bg-black/50">+XP FIRST BLOOD</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Active Mission Terminal -->
      <div v-if="phase === 'mission' && activeMission" class="flex-1 flex flex-col relative animate-fade-in h-full overflow-hidden">
        <div class="mb-4 shrink-0">
          <button @click="abortMission" class="text-rose-500 hover:text-rose-400 text-sm flex items-center gap-2 mb-2 transition-colors">
            <Icon name="heroicons:arrow-left-on-rectangle" class="w-4 h-4" /> ABORTAR_INFILTRAÇÃO
          </button>
          <div class="flex justify-between items-end">
             <div>
                <h2 class="text-3xl font-bold text-white mb-1 tracking-widest uppercase"><span class="text-cyan-500">&gt; EXEC:</span> {{ activeMission.codename }}</h2>
                <div class="text-sm text-cyan-600 mb-2">OBJETIVO: {{ activeMission.targetDesc }}</div>
             </div>
             <div v-if="activeMission.timer" class="text-rose-500 font-bold text-2xl flex items-center gap-2 animate-pulse bg-rose-950/30 px-4 py-2 border border-rose-500/50">
               <Icon name="lucide:bomb" class="w-6 h-6" /> 00:{{ timerCount.toString().padStart(2, '0') }}
             </div>
          </div>
        </div>

        <!-- Terminal Editor Output -->
        <div class="flex-1 bg-black/60 border border-cyan-500/30 p-4 md:p-6 rounded-xl flex flex-col relative shadow-[inset_0_0_50px_rgba(0,255,255,0.02)] min-h-0">
           <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-50 animate-[scanline_4s_linear_infinite] z-50 pointer-events-none"></div>
           
           <div class="text-indigo-300 mb-4 text-xs md:text-sm flex items-start gap-2 max-w-2xl bg-indigo-950/30 p-3 rounded border border-indigo-500/20 shrink-0">
              <Icon name="heroicons:information-circle" class="w-5 h-5 flex-shrink-0 mt-0.5"/>
              <span>{{ activeMission.instruction }}</span>
           </div>

           <!-- ============================================== -->
           <!-- GAME MODE 1: PUZZLE SEQUENCE (HTML)            -->
           <!-- ============================================== -->
           <div v-if="activeMission.type === 'html_drag'" class="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar pb-10">
              <div class="bg-[#0b101a] border border-[#162235] p-4 rounded-lg font-mono text-xs md:text-sm shadow-inner relative">
                 <div class="text-slate-500 mb-2 whitespace-pre">{{ activeMission.puzzle.skeletonPre }}</div>
                 <div class="flex flex-col gap-2 pl-4">
                    <div 
                      v-for="(slot, idx) in activeMission.puzzle.slots" 
                      :key="'slot'+idx"
                      @click="removePiece(idx)"
                      class="min-h-10 py-2 border-2 border-dashed flex items-center px-4 cursor-pointer w-full max-w-lg transition-all"
                      :class="filledSlots[idx] ? 'border-cyan-500 bg-cyan-950/50 text-cyan-200' : 'border-slate-700 hover:border-cyan-700'"
                    >
                      <span v-if="!filledSlots[idx]" class="opacity-30">&lt; INSIRA O COMPONENTE AQUI /&gt;</span>
                      <span v-else class="font-bold whitespace-pre-wrap">{{ filledSlots[idx].content }}</span>
                    </div>
                 </div>
                 <div class="text-slate-500 mt-2 whitespace-pre">{{ activeMission.puzzle.skeletonPost }}</div>
              </div>

              <!-- Available Pieces -->
              <div class="mt-auto pt-4">
                 <div class="text-xs text-cyan-700 mb-2 font-bold uppercase tracking-widest">Fragmentos Encontrados (Clique para inserir)</div>
                 <div class="flex flex-wrap gap-2 md:gap-3 max-h-40 overflow-y-auto no-scrollbar px-1 py-1">
                    <button 
                      v-for="piece in availablePieces" 
                      :key="piece.id"
                      @click="insertPiece(piece)"
                      class="px-4 py-2 bg-[#0b101a] border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all font-mono text-xs md:text-sm shadow-[0_4px_0_rgba(0,255,255,0.1)] hover:translate-y-1 hover:shadow-[0_0px_0_rgba(0,255,255,0.0)] active:bg-cyan-900 text-left"
                    >
                      {{ piece.content }}
                    </button>
                 </div>
              </div>

              <div class="flex justify-end mt-4 shrink-0">
                 <button 
                  @click="validateHtmlDrag"
                  :disabled="filledSlots.includes(null)"
                  class="px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto"
                  :class="filledSlots.includes(null) ? 'bg-slate-900 text-slate-500 cursor-not-allowed border border-slate-800' : 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:-translate-y-1 hover:bg-cyan-400'"
                 >COMPILAR E INJETAR</button>
              </div>
           </div>

           <!-- ============================================== -->
           <!-- GAME MODE 2: CSS INJECT (TAILWIND)             -->
           <!-- ============================================== -->
           <div v-else-if="activeMission.type === 'css_inject'" class="flex-1 flex flex-col gap-4 overflow-hidden">
              <div class="border border-cyan-500/30 rounded-lg p-1 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] min-h-[160px] max-h-48 relative overflow-hidden flex flex-col shrink-0">
                 <div class="bg-black/90 px-4 py-1.5 text-[10px] border-b border-cyan-500/30 text-cyan-500 flex justify-between uppercase">
                    <span>LIVE_PREVIEW.exe</span>
                    <span class="animate-pulse flex gap-2">RENDERING <span v-if="activeMission.puzzle.targetClasses.length === injectedClasses.length" class="text-green-400">READY TO APPLY</span></span>
                 </div>
                 <div class="flex-1 w-full relative bg-[#02060d] overflow-hidden">
                    <div class="absolute inset-0 border border-dashed border-rose-500/20 m-4 pointer-events-none"></div>
                    <!-- Target element that receives the injected classes -->
                    <div :class="['text-white p-2 md:p-4 font-bold border border-white/10 transition-all duration-300', ...injectedClasses]">
                       <Icon name="heroicons:shield-check" class="w-6 h-6 md:w-8 md:h-8 text-cyan-500" :class="{'mx-auto mb-1 md:mb-2': injectedClasses.includes('text-center')}" />
                       <span :class="{'ml-2': !injectedClasses.includes('text-center')}">SERVER_CORE</span>
                    </div>
                 </div>
              </div>

              <div class="bg-[#0b101a] border border-[#162235] p-3 md:p-4 rounded-lg font-mono text-xs shadow-inner shrink-0">
                 <div class="text-indigo-400 mb-2">/* INJETAR PAYLOAD NO NÓ DE ESTILO */</div>
                 <div class="text-gray-300 break-all leading-loose">
                    &lt;div class="<span class="text-cyan-300 font-bold bg-cyan-900/30 px-2 py-1 mx-1 border border-cyan-500/20 leading-normal">{{ injectedClasses.length ? injectedClasses.join(' ') : '...' }}</span>"&gt;
                 </div>
              </div>

              <div class="mt-auto flex flex-col min-h-0">
                 <div class="text-xs text-cyan-700 mb-2 font-bold flex justify-between uppercase tracking-widest shrink-0">
                    <span>Arsenal CSS</span>
                    <span :class="correctCssHits === activeMission.puzzle.targetClasses.length && wrongCssHits === 0 ? 'text-green-400' : 'text-rose-400'">
                       ACERTOS: {{ correctCssHits }} / {{ activeMission.puzzle.targetClasses.length }}
                       <span v-if="wrongCssHits > 0" class="ml-2 text-rose-500">| {{ wrongCssHits }} ERRADAS</span>
                    </span>
                 </div>
                 <div class="flex flex-wrap gap-2 overflow-y-auto pr-2 pb-2 min-h-[80px]">
                    <button 
                      v-for="cls in activeMission.puzzle.options" 
                      :key="cls"
                      @click="toggleCssClass(cls)"
                      :class="[
                        'px-2 md:px-3 py-1 border text-[10px] md:text-xs font-mono transition-colors shadow-sm rounded-sm',
                        injectedClasses.includes(cls) ? 'bg-cyan-600 border-cyan-400 text-black font-bold' : 'bg-[#0b101a] border-cyan-500/30 text-cyan-500 hover:bg-cyan-900/40'
                      ]"
                    >
                      {{ cls }}
                    </button>
                 </div>
              </div>

              <div class="flex justify-end pt-2 shrink-0 border-t border-cyan-900/30 w-full">
                 <button 
                  @click="validateCssInject"
                  class="px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:-translate-y-1 hover:bg-cyan-400"
                 >APLICAR CAMUFLAGEM</button>
              </div>
           </div>

           <!-- ============================================== -->
           <!-- GAME MODE NEW: CSS VANILLA (DARK_MODE)         -->
           <!-- ============================================== -->
           <div v-else-if="activeMission.type === 'css_dark_mode'" class="flex-1 flex flex-col gap-4 overflow-y-auto">
             <div class="flex-1 relative flex flex-col md:flex-row gap-6 shrink-0 min-h-[300px]">
               <!-- Animated Display -->
               <div class="flex-1 md:w-1/2 bg-[#020617] border border-cyan-500/30 p-8 rounded-sm relative overflow-hidden flex items-center justify-center min-h-[160px]">
                  <!-- Dark overlay fading based on progress -->
                  <div class="absolute inset-0 bg-black z-20 pointer-events-none transition-opacity duration-1000" :style="{ opacity: 1 - (correctCssVanillaHits / activeMission.puzzle.targetProperties.length) }"></div>
                  
                  <!-- The glowing object -->
                  <div class="relative z-10 w-32 h-32 rounded-full blur-xl animate-[pulse_2s_infinite] flex items-center justify-center transition-all duration-1000" :class="[
                     correctCssVanillaHits >= activeMission.puzzle.targetProperties.length ? 'scale-150 bg-green-500 shadow-[0_0_80px_rgba(34,197,94,0.8)]' : 'bg-cyan-500 shadow-[0_0_50px_rgba(0,255,255,0.8)]'
                  ]">
                     <Icon name="lucide:database" class="w-12 h-12 text-white drop-shadow-md" />
                  </div>
               </div>
               
               <!-- Input Area -->
               <div class="flex-1 md:w-1/2 flex flex-col shrink-0 min-h-[180px]">
                  <div class="text-xs text-cyan-700 mb-2 font-bold flex justify-between uppercase tracking-widest shrink-0">
                     <span>Terminal Vanilla</span>
                     <span :class="correctCssVanillaHits === activeMission.puzzle.targetProperties.length ? 'text-green-400' : 'text-cyan-400'">
                        {{ correctCssVanillaHits }} / {{ activeMission.puzzle.targetProperties.length }} LUZES ACESAS
                     </span>
                  </div>
                  
                  <div class="relative flex-1 bg-[#121a2f] border border-cyan-900/50 p-4 font-mono text-sm leading-relaxed overflow-y-auto no-scrollbar shadow-inner text-cyan-300 rounded-md">
                     <div class="text-indigo-400 mb-2">/* ACENDA AS LÂMPADAS DO SERVIDOR GERAL */</div>
                     <div>.servidor-central {</div>
                     <textarea 
                       v-model="vanillaCssInput"
                       class="w-full bg-transparent border-none outline-none resize-none text-cyan-400 min-h-[120px] pl-4 mt-2"
                       placeholder="/* ex: display: flex; color: white; */"
                       spellcheck="false"
                     ></textarea>
                     <div>}</div>
                     
                     <!-- Hints / Targets -->
                     <div class="mt-4 border-t border-cyan-900/30 pt-2 opacity-60 text-xs">
                       &gt; Targets Requeridos: <span class="text-cyan-500 font-bold ml-1">{{ activeMission.puzzle.targetsHelp }}</span>
                     </div>
                  </div>
               </div>
             </div>

             <div class="flex justify-end mt-4 shrink-0 w-full relative z-[100]">
                <button 
                 @click="validateCssVanilla"
                 class="px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:-translate-y-1 hover:bg-cyan-400"
                >EXECUTAR ILUMINAÇÃO</button>
             </div>
           </div>
           <!-- ============================================== -->
           <div v-else-if="activeMission.type === 'js_gaps'" class="flex-1 flex flex-col gap-4 overflow-y-auto">
              <div class="flex-1 bg-[#0b101a] border border-[#162235] p-4 md:p-6 font-mono text-xs md:text-sm relative rounded-lg">
                <div class="text-cyan-600 mb-4">> Analyzing target script behavior...</div>
                
                <div class="text-gray-300 leading-loose whitespace-pre-wrap">
                  <span class="text-indigo-400">{{ activeMission.puzzle.codePre }}</span>
                  <button @click="cycleGap(0)" class="px-2 py-0.5 mx-1 border-b-2 border-dashed bg-slate-900 transition-colors" :class="jsGaps[0] ? 'text-cyan-300 border-cyan-500' : 'text-gray-600 border-gray-600'">{{ jsGaps[0] || '[GAP_1]' }}</button>
                  <span class="text-indigo-400">{{ activeMission.puzzle.codeMid }}</span>
                  <button @click="cycleGap(1)" class="px-2 py-0.5 mx-1 border-b-2 border-dashed bg-slate-900 transition-colors" :class="jsGaps[1] ? 'text-cyan-300 border-cyan-500' : 'text-gray-600 border-gray-600'">{{ jsGaps[1] || '[GAP_2]' }}</button>
                  <span class="text-indigo-400">{{ activeMission.puzzle.codePost }}</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4 shrink-0">
                 <div class="text-xs text-rose-500 bg-rose-950/20 px-4 py-2 border border-rose-900/50 rounded flex items-center gap-2">
                    <Icon name="heroicons:exclamation-triangle" class="w-4 h-4 inline" /> SINTAXE INCORRETA ACIONARÁ A BOMBA.
                 </div>
                 <button 
                  @click="validateJsGaps"
                  class="px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:-translate-y-1 hover:bg-cyan-400"
                 >RODAR SCRIPT</button>
              </div>
           </div>

           <!-- ============================================== -->
           <!-- GAME MODE 4: TS TYPES (REPAIR ANY)             -->
           <!-- ============================================== -->
           <div v-else-if="activeMission.type === 'ts_types'" class="flex-1 flex flex-col gap-4 overflow-y-auto">
              <div class="flex-1 bg-[#0b101a] border border-amber-500/20 p-4 md:p-6 font-mono text-xs md:text-sm relative rounded-lg">
                <div class="text-amber-500/80 mb-4 animate-pulse">> STRICT_MODE: ENFORCE. CORRUPTED TYPES DETECTED.</div>
                
                <div class="text-gray-300 leading-loose flex flex-col gap-1">
                  <!-- The code chunks with gap insertion. Using a robust parsing logic: we replace [0], [1] with buttons in template -->
                  <template v-for="(part, idx) in tsCodeParts" :key="'part'+idx">
                     <span class="whitespace-pre-wrap">{{ part.text }}</span>
                     <button v-if="part.hasBtn" @click="cycleTs(part.btnIdx)" class="px-2 py-0.5 mx-1 border border-amber-600/50 bg-amber-900/20 text-amber-500 hover:bg-amber-900/40 inline-flex justify-center min-w-[80px] rounded-sm transition-colors">{{ tsTypes[part.btnIdx] }}</button>
                  </template>
                </div>
              </div>

              <div class="flex justify-end mt-4 shrink-0 w-full">
                 <button 
                  @click="validateTsTypes"
                  class="px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:-translate-y-1 hover:bg-cyan-400"
                 >INJETAR TIPAGEM</button>
              </div>
           </div>

           <!-- ============================================== -->
           <!-- GAME MODE 5: PHP TERMINAL (PAYLOAD SELECT)     -->
           <!-- ============================================== -->
           <div v-else-if="activeMission.type === 'php_terminal'" class="flex-1 flex flex-col gap-4 min-h-0">
              <div class="bg-black border-2 border-slate-800 p-4 font-mono text-xs md:text-sm shadow-inner rounded-md shrink-0">
                 <div class="text-slate-500 mb-2 whitespace-pre-wrap">{{ activeMission.puzzle.prompt }}</div>
              </div>
                 
              <div class="flex flex-col gap-2 md:gap-3 overflow-y-auto no-scrollbar pb-10 flex-1">
                 <div 
                   v-for="(payload, idx) in activeMission.puzzle.options" 
                   :key="idx"
                   @click="selectedPhpOption = idx"
                   class="group p-3 md:p-4 border transition-all cursor-pointer relative overflow-hidden"
                   :class="selectedPhpOption === idx ? 'border-cyan-500 bg-cyan-950/30' : 'border-slate-800 bg-[#060a12] hover:border-slate-600'"
                 >
                   <div class="flex items-center gap-3 relative z-10">
                      <div class="w-4 h-4 shrink-0 rounded-full border border-cyan-500 flex items-center justify-center p-0.5">
                         <div v-if="selectedPhpOption === idx" class="w-full h-full bg-cyan-400 rounded-full"></div>
                      </div>
                      <code class="break-words" :class="selectedPhpOption === idx ? 'text-cyan-300' : 'text-slate-400 group-hover:text-slate-300'">{{ payload }}</code>
                   </div>
                 </div>
              </div>

              <div class="flex justify-end mt-2 shrink-0 border-t border-cyan-900/30 pt-4 w-full">
                 <button 
                  @click="validatePhpTerminal"
                  :disabled="selectedPhpOption === null"
                  class="px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto"
                  :class="selectedPhpOption === null ? 'bg-slate-900 text-slate-500 cursor-not-allowed border border-slate-800' : 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:-translate-y-1 hover:bg-cyan-400'"
                 >EXECUTAR SCRIPT</button>
              </div>
           </div>

           <!-- ============================================== -->
           <!-- GAME MODE 6: NUXT BOSS                         -->
           <!-- ============================================== -->
           <div v-else-if="activeMission.type === 'nuxt_boss'" class="flex-1 flex flex-col gap-4 min-h-0">
              <div class="flex-1 flex flex-col md:flex-row gap-4 overflow-hidden">
                 <div class="bg-[#040812] border border-cyan-500/20 p-4 rounded text-xs md:text-sm relative md:w-1/3 overflow-y-auto">
                    <div class="text-cyan-500 border-b border-cyan-900 pb-2 mb-4 font-bold flex items-center gap-2 uppercase tracking-widest">
                       <Icon name="heroicons:folder-open" class="w-5 h-5"/> {{ activeMission.puzzle.promptTitle }}
                    </div>
                    <ul class="text-slate-400 space-y-2 font-mono">
                       <li v-for="file in activeMission.puzzle.files" :key="file" class="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap" :class="file.includes('[') ? 'text-rose-400 bg-rose-950/20 p-1 border border-dashed border-rose-900' : ''">
                          <Icon :name="file.includes('.') ? 'heroicons:document' : 'heroicons:folder'" class="w-4 h-4 shrink-0"/> {{ file }}
                       </li>
                    </ul>
                 </div>
                 
                 <div class="bg-[#0b101a] border border-[#162235] p-3 md:p-4 rounded text-xs md:text-sm md:w-2/3 flex flex-col min-h-0">
                    <div class="text-indigo-400 mb-4 font-bold text-xs md:text-sm border-b border-indigo-900 pb-2">
                       >> {{ activeMission.puzzle.question }}
                    </div>
                    <div class="flex flex-col gap-2 overflow-y-auto pb-4 no-scrollbar">
                       <button 
                         v-for="(opt, idx) in activeMission.puzzle.options" 
                         :key="'nuxt'+idx"
                         @click="selectedNuxtOption = idx"
                         class="text-left p-3 border font-mono text-[10px] md:text-xs transition-colors rounded-sm shadow-sm"
                         :class="selectedNuxtOption === idx ? 'border-cyan-500 bg-cyan-900/40 text-cyan-200' : 'border-slate-800 text-slate-400 hover:border-cyan-800'"
                       >
                         {{ opt }}
                       </button>
                    </div>
                 </div>
              </div>

              <div class="flex justify-between items-center mt-2 border-t border-cyan-900/50 pt-4 shrink-0">
                 <div class="text-xs text-rose-500 italic hidden sm:block">"Conhecimento de arquitetura é o poder final."</div>
                 <button 
                  @click="validateNuxtBoss"
                  :disabled="selectedNuxtOption === null"
                  class="px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto"
                  :class="selectedNuxtOption === null ? 'bg-slate-900 text-slate-500 cursor-not-allowed border border-slate-800' : 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:-translate-y-1 hover:bg-cyan-400'"
                 >DEPLOY GHOST APP</button>
              </div>
           </div>

           
           <!-- Generic Feedback Overlay -->
           <div v-if="feedback" :class="[
              'absolute inset-0 flex items-center justify-center z-[100] backdrop-blur-md animate-fade-in',
              feedbackType === 'error' ? 'bg-rose-950/80' : 'bg-cyan-950/80'
             ]">
             <div :class="[
               'p-8 shadow-2xl text-center max-w-md w-full mx-4 border-y-4 rounded-lg',
               feedbackType === 'error' ? 'border-rose-500 bg-[#120404]' : 'border-cyan-500 bg-[#020a0d]'
             ]">
                <Icon :name="feedbackType === 'error' ? 'heroicons:exclamation-triangle' : 'heroicons:check-badge'" 
                      class="w-20 h-20 mx-auto mb-4" :class="feedbackType === 'error' ? 'text-rose-500 animate-shake' : 'text-cyan-400 animate-pulse'" />
                <h3 class="text-2xl font-bold mb-2 tracking-widest uppercase" :class="feedbackType === 'error' ? 'text-rose-400' : 'text-cyan-300'">
                  {{ feedbackType === 'error' ? 'FALHA DE SISTEMA' : 'ACESSO CONCEDIDO' }}
                </h3>
                <p class="text-sm font-mono text-white/70">{{ feedback }}</p>
              </div>
           </div>

        </div>
      </div>
    
    </div>
    
    <!-- EXPLOSION SCREEN (Phase: exploded) -->
    <transition name="explode">
      <div v-if="phase === 'exploded'" class="absolute inset-0 z-[200] bg-[#120404] flex flex-col items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-rose-500/10 animate-[ping_1.5s_infinite]"></div>
        <div class="relative z-10 flex flex-col items-center">
            <div class="bg-rose-950/40 p-12 rounded-full border-[10px] border-rose-600/30 animate-pulse mb-8 drop-shadow-[0_0_80px_rgba(244,63,94,0.8)] shadow-[inset_0_0_50px_rgba(244,63,94,1)]">
               <Icon name="lucide:bomb" class="w-24 h-24 md:w-40 md:h-40 text-rose-500 animate-[bounce_1s_infinite]" />
            </div>
            <h1 class="text-4xl md:text-6xl font-black text-rose-500 tracking-[0.2em] uppercase animate-shake text-center mb-2">DETONAÇÃO SISTÊMICA</h1>
            <p class="text-white md:text-xl font-mono text-center px-4 bg-black/50 py-2 border border-rose-900/50">LIMITE DE FALHAS EXCEDIDO (5/5). FIREWALL BLOQUEOU ACESSO LOGADO.</p>
            <button @click="$emit('exit')" class="mt-12 px-8 py-3 bg-rose-600 hover:bg-rose-500 text-black font-bold tracking-widest uppercase transition-colors shadow-[0_0_30px_rgba(244,63,94,0.5)]">
               ABANDONAR SISTEMA DE IMEDIATO
            </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { hackerMissionsData } from '~/data/hackerMissions'

const emit = defineEmits(['exit'])

const phase = ref<'booting' | 'ready' | 'mission' | 'exploded'>('booting')
const bootText = ref('CONNECTING...')
const bootProgress = ref(0)
const logs = ref<string[]>([])

// Player Stats
const xp = ref(0)
const errorStrikes = ref(0)
const maxStrikes = 5

const currentRank = computed(() => {
  if (xp.value <= 100) return 'RECRUTA'
  if (xp.value <= 300) return 'AGENTE'
  if (xp.value <= 600) return 'ESPECIALISTA'
  if (xp.value <= 900) return 'PHANTOM'
  return 'GHOST ZERO'
})

// Hits Counter
const correctCssHits = computed(() => {
  if (!activeMission.value || activeMission.value.type !== 'css_inject') return 0
  const target = activeMission.value.puzzle.targetClasses
  return injectedClasses.value.filter(c => target.includes(c)).length
})
const wrongCssHits = computed(() => {
  if (!activeMission.value || activeMission.value.type !== 'css_inject') return 0
  const target = activeMission.value.puzzle.targetClasses
  return injectedClasses.value.filter(c => !target.includes(c)).length
})
const correctCssVanillaHits = computed(() => {
  if (!activeMission.value || activeMission.value.type !== 'css_dark_mode') return 0
  const typed = vanillaCssInput.value.toLowerCase().replace(/\s+/g, '')
  let hits = 0
  activeMission.value.puzzle.targetProperties.forEach((prop: string) => {
    const cleanProp = prop.toLowerCase().replace(/\s+/g, '')
    if (typed.includes(cleanProp)) hits++
  })
  return hits
})
// Load from hackerMissions.ts, reset lock/completion for session
const missions = ref(hackerMissionsData.map(m => ({
   ...m,
   locked: false, // Make them all unlocked by default so we can test random ones, or we can restore sequence logic. Let's make first unlocked:
   completed: false,
})))
// Lock all except first
/* missions.value.forEach((m, i) => { if(i>0) m.locked = true }) */

const missionsCompleted = computed(() => missions.value.filter(m => m.completed).length)
const activeMission = ref<any>(null)

// Feedback Global
const feedback = ref('')
const feedbackType = ref<'success'|'error'>('success')
const timerCount = ref(30)
let bombInterval: any = null

// === STATE FOR HTML PUZZLE ===
const availablePieces = ref<any[]>([])
const filledSlots = ref<any[]>([])

// === STATE FOR CSS INJECT & VANILLA ===
const injectedClasses = ref<string[]>([])
const localStrikes = ref(0)
const vanillaCssInput = ref('')

// === STATE FOR JS GAPS ===
const jsGaps = ref<string[]>(['any', 'any'])
const jsGapIndices = ref<number[]>([0, 0])

// === STATE FOR TS TYPES ===
const tsTypes = ref<string[]>([])
const tsIndices = ref<number[]>([])
const tsCodeParts = ref<{text: string, hasBtn: boolean, btnIdx: number}[]>([])

// === STATE FOR PHP & NUXT ===
const selectedPhpOption = ref<number | null>(null)
const selectedNuxtOption = ref<number | null>(null)

function bootSystem() {
  const messages = [
     'ESTABELECENDO TÚNEL SSH 127.0.0.1...',
     'BYPASS NO FIREWALL OMEGA...',
     'CARREGANDO VUE COMPILER...',
     'INICIANDO GHOST PROTOCOL...'
  ]
  let mIdx = 0
  
  const ival = setInterval(() => {
    bootProgress.value += Math.random() * 20
    if (messages[mIdx]) {
       logs.value.push(messages[mIdx])
       mIdx++
    }
    
    if (bootProgress.value >= 100) {
       clearInterval(ival)
       bootText.value = 'ACCESS GRANTED'
       setTimeout(() => { phase.value = 'ready' }, 1000)
    }
  }, 400)
}

function bootMission(mission: any) {
  if (mission.locked) return
  
  // Randomize a puzzle from the mission bank
  const pzBank = mission.puzzles
  const selectedPuzzle = pzBank[Math.floor(Math.random() * pzBank.length)]
  
  // Create an active session object
  activeMission.value = { ...mission, puzzle: selectedPuzzle }
  phase.value = 'mission'
  feedback.value = ''
  
  // Reset mechanics for all mission types
  filledSlots.value = new Array(selectedPuzzle.slots || 0).fill(null)
  availablePieces.value = [...(selectedPuzzle.pieces || [])].sort(() => Math.random() - 0.5)
  injectedClasses.value = []
  localStrikes.value = 0
  vanillaCssInput.value = ''
  selectedPhpOption.value = null
  selectedNuxtOption.value = null
  
  if (mission.type === 'js_gaps') {
     jsGaps.value = ['...', '...']
     jsGapIndices.value = [-1, -1]
  } else if (mission.type === 'ts_types') {
     const count = selectedPuzzle.gapCount
     tsTypes.value = Array(count).fill('any')
     tsIndices.value = Array(count).fill(0)
     
     // Parse the codePre to logic chunks
     // codePre looks like "interface Agent { id: [0]; codename: [1]; }"
     const parts = selectedPuzzle.codePre.split(/(\[\d+\])/g)
     tsCodeParts.value = parts.map((p: string) => {
        const match = p.match(/\[(\d+)\]/)
        if (match) {
           return { text: '', hasBtn: true, btnIdx: parseInt(match[1]) }
        }
        return { text: p, hasBtn: false, btnIdx: -1 }
     })
  } else if (mission.type === 'php_terminal') {
     selectedPhpOption.value = null
  } else if (mission.type === 'nuxt_boss') {
     selectedNuxtOption.value = null
  }
  
  if (mission.timer) {
    timerCount.value = 45
    bombInterval = setInterval(() => {
      timerCount.value--
      if (timerCount.value <= 0) {
        clearInterval(bombInterval)
        handleFailure('ERRO: DETONAÇÃO! RASTREAMENTO INICIADO.')
      }
    }, 1000)
  }
}

function abortMission() {
  if (bombInterval) clearInterval(bombInterval)
  activeMission.value = null
  phase.value = 'ready'
}

function handleFailure(msg: string) {
   if (bombInterval) clearInterval(bombInterval)
   
   errorStrikes.value++
   
   if (errorStrikes.value >= maxStrikes) {
      phase.value = 'exploded'
      return
   }

   feedbackType.value = 'error'
   feedback.value = msg || 'CÓDIGO INVÁLIDO. FIREWALL DETECTOU A INTRUSÃO.'
   
   // Apply penalty?
   const baseM = missions.value.find(m => m.id === activeMission.value.id)
   if (baseM) baseM.firstBlood = false
   
   setTimeout(() => {
     feedback.value = ''
     if (activeMission.value?.timer && timerCount.value <= 0) {
       abortMission() // kicked out if bomb exploded
     }
   }, 2500)
}

function handleSuccess(xpReward: number) {
   if (bombInterval) clearInterval(bombInterval)
   feedbackType.value = 'success'
   feedback.value = 'ACESSOS VALIDADOS. RETORNO HTTP 200 OK.'
   
   const baseM = missions.value.find(m => m.id === activeMission.value.id)
   if (!baseM) return;
   
   let earned = xpReward
   if (baseM.firstBlood) earned += 20
   xp.value += earned
   
   baseM.completed = true
   
   // A cada 4 missões ganha uma vida (Limites: -1 errorStrikes = 6 vidas)
   const compCount = missions.value.filter(m => m.completed).length
   if (compCount > 0 && compCount % 4 === 0 && errorStrikes.value > -1) {
     errorStrikes.value--
     // Alert user?
     feedbackType.value = 'success'
     feedback.value = 'SISTEMA RESTAURADO! +1 VIDA (SISTEMA VITAL REANEXADO).'
   }
   
   // Unlock next mission
   const currentIdx = missions.value.indexOf(baseM)
   if (missions.value[currentIdx + 1]) {
      missions.value[currentIdx + 1].locked = false
   }
   
   setTimeout(() => {
      abortMission()
   }, 2500)
}

// === HTML PUZZLE LOGIC ===
function insertPiece(piece: any) {
  const emptyIndex = filledSlots.value.findIndex(s => s === null)
  if (emptyIndex !== -1) {
    filledSlots.value[emptyIndex] = piece
    availablePieces.value = availablePieces.value.filter(p => p.id !== piece.id)
  }
}
function removePiece(idx: number) {
  if (filledSlots.value[idx]) {
    availablePieces.value.push(filledSlots.value[idx])
    filledSlots.value[idx] = null
  }
}
function validateHtmlDrag() {
  let isValid = true
  for (let i = 0; i < filledSlots.value.length; i++) {
    if (!filledSlots.value[i] || filledSlots.value[i].order !== i) {
      isValid = false; break;
    }
  }
  if (isValid) handleSuccess(activeMission.value.xp)
  else {
    handleFailure('SEQÜÊNCIA DOM INCORRETA. SKELETO REJEITADO.')
    availablePieces.value = [...availablePieces.value, ...filledSlots.value.filter(s => s !== null)]
    filledSlots.value = Array(activeMission.value.puzzle.slots).fill(null)
  }
}

// === CSS INJECT LOGIC ===
function toggleCssClass(cls: string) {
  const idx = injectedClasses.value.indexOf(cls)
  if (idx > -1) injectedClasses.value.splice(idx, 1)
  else injectedClasses.value.push(cls)

  if (wrongCssHits.value >= 3) {
    handleFailure('MUITOS PARÂMETROS DE ESTILO INVÁLIDOS. INTENÇÃO SUSPEITA (3/3).')
  }
}
function validateCssInject() {
  const target = activeMission.value.puzzle.targetClasses
  const current = injectedClasses.value
  
  const correctCount = current.filter(c => target.includes(c)).length
  const wrongCount = current.filter(c => !target.includes(c)).length
  
  if (correctCount === target.length && wrongCount === 0) {
    handleSuccess(activeMission.value.xp)
  } else {
    localStrikes.value++
    if (localStrikes.value >= 3) {
      handleFailure(`TENTATIVAS LOCAIS ESGOTADAS. SISTEMA DETECTOU A INTRUSÃO.`)
      localStrikes.value = 0
    } else {
      feedbackType.value = 'error'
      feedback.value = `SINTAXE IMPRECISA: ${correctCount}/${target.length} Corretas. ${3 - localStrikes.value} TENTATIVAS RESTANTES.`
      setTimeout(() => feedback.value = '', 2000)
    }
  }
}

function validateCssVanilla() {
  const targetLen = activeMission.value.puzzle.targetProperties.length
  if (correctCssVanillaHits.value === targetLen) {
    handleSuccess(activeMission.value.xp)
  } else {
    localStrikes.value++
    if (localStrikes.value >= 3) {
      handleFailure(`ILUMINAÇÃO FALHOU E SISTEMA EXPULSOU O USUÁRIO (3/3 TENTATIVAS).`)
      localStrikes.value = 0
    } else {
      feedbackType.value = 'error'
      feedback.value = `INSUFICIENTE: ${correctCssVanillaHits.value}/${targetLen} LUMINOSIDADES. ${3 - localStrikes.value} TENTATIVAS RESTANTES.`
      setTimeout(() => feedback.value = '', 2000)
    }
  }
}

// === JS GAPS LOGIC ===
function cycleGap(gapIndex: 0 | 1) {
   const options = activeMission.value.puzzle.gapOptions[gapIndex]
   let currentIdx = jsGapIndices.value[gapIndex]
   currentIdx = (currentIdx + 1) % options.length
   jsGapIndices.value[gapIndex] = currentIdx
   jsGaps.value[gapIndex] = options[currentIdx]
}
function validateJsGaps() {
   const c1 = jsGaps.value[0] === activeMission.value.puzzle.correctOptions[0]
   const c2 = jsGaps.value[1] === activeMission.value.puzzle.correctOptions[1]
   if (c1 && c2) handleSuccess(activeMission.value.xp)
   else handleFailure('ERRO DE SINTAXE. DETONAÇÃO IMINENTE.')
}

// === TS TYPES LOGIC ===
function cycleTs(tsIndex: number) {
   const options = activeMission.value.puzzle.options[tsIndex]
   let currentIdx = tsIndices.value[tsIndex]
   currentIdx = (currentIdx + 1) % options.length
   tsIndices.value[tsIndex] = currentIdx
   tsTypes.value[tsIndex] = options[currentIdx]
}
function validateTsTypes() {
  const correct = activeMission.value.puzzle.correct
  const isCorrect = tsTypes.value.every((val, i) => val === correct[i])
  if (isCorrect) handleSuccess(activeMission.value.xp)
  else handleFailure('ERRO DE COMPILAÇÃO. TIPOS INCOMPATÍVEIS VAZADOS.')
}

// === PHP & NUXT LOGIC ===
function validatePhpTerminal() {
  if (selectedPhpOption.value === activeMission.value.puzzle.correct) handleSuccess(activeMission.value.xp)
  else handleFailure('ERRO: VULNERABILIDADE CRÍTICA MANTIDA NO SERVIDOR.')
}
function validateNuxtBoss() {
  if (selectedNuxtOption.value === activeMission.value.puzzle.correct) handleSuccess(activeMission.value.xp)
  else handleFailure('DEPLOY FALHOU. ERRO ARQUITETURAL NO GHOST PROJECT.')
}

onMounted(() => bootSystem())
onUnmounted(() => { if (bombInterval) clearInterval(bombInterval) })
</script>

<style scoped>
@keyframes matrixRain {
  0% { transform: translateY(-100vh); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(800px); }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

.glitch-fade-enter-active, .glitch-fade-leave-active {
  transition: all 0.3s ease;
}
.glitch-fade-enter-from, .glitch-fade-leave-to {
  opacity: 0;
  filter: blur(10px) contrast(200%);
  transform: scale(1.05);
}

.explode-enter-active {
  animation: explosion 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
@keyframes explosion {
  0% { transform: scale(0); opacity: 0; filter: brightness(100); }
  50% { transform: scale(1.1); opacity: 1; filter: brightness(5); }
  100% { transform: scale(1); opacity: 1; filter: brightness(1); }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
