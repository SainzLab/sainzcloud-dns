<template>
  <section id="setup">
    <div class="flex items-center gap-2 mb-6">
      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
      <h2 class="text-white font-medium">Konfigurasi Jaringan</h2>
    </div>

    <div class="bg-card border border-border rounded-xl p-5 sm:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
      
      <div class="lg:w-1/3">
        <h3 class="text-xs text-gray-400 font-mono tracking-wider mb-8 uppercase">Arsitektur Aliran Data</h3>
        <div class="relative">
          <div class="absolute left-5 top-5 bottom-5 w-px bg-border overflow-hidden">
            <div class="w-full h-12 bg-gradient-to-b from-transparent via-accent to-transparent opacity-70 animate-data-flow"></div>
          </div>
          <div class="space-y-6">
            <div class="flex items-center gap-4 sm:gap-6 relative">
              <div class="w-10 h-10 bg-card border border-border rounded flex shrink-0 items-center justify-center text-gray-400 relative z-10 transition-colors hover:border-white hover:text-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <span class="text-[11px] sm:text-sm text-gray-300 font-mono">USER</span>
            </div>
            <div class="flex items-center gap-4 sm:gap-6 relative">
              <div class="w-10 h-10 bg-card border border-border rounded flex shrink-0 items-center justify-center text-gray-400 relative z-10 transition-colors hover:border-white hover:text-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <span class="text-[11px] sm:text-sm text-gray-300 font-mono">BROWSER</span>
            </div>
            <div class="flex items-center gap-4 sm:gap-6 relative">
              <div class="w-10 h-10 bg-card border border-accent rounded flex shrink-0 items-center justify-center text-accent relative z-10 shadow-[0_0_15px_rgba(250,204,21,0.15)] animate-pulse-border">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <span class="text-[11px] sm:text-sm text-accent font-mono leading-tight">DoH / DoT (Terenkripsi)</span>
            </div>
            <div class="flex items-center gap-4 sm:gap-6 relative">
              <div class="w-10 h-10 bg-card border border-accent rounded flex shrink-0 items-center justify-center text-accent relative z-10 shadow-[0_0_15px_rgba(250,204,21,0.15)] animate-pulse-border animation-delay-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </div>
              <span class="text-[11px] sm:text-sm text-accent font-mono font-bold">myDNS</span>
            </div>
            <div class="flex items-center gap-4 sm:gap-6 relative">
              <div class="w-10 h-10 bg-card border border-border rounded flex shrink-0 items-center justify-center text-gray-400 relative z-10 transition-colors hover:border-white hover:text-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <span class="text-[11px] sm:text-sm text-gray-300 font-mono">INTERNET</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:block w-px bg-border"></div>

      <div class="lg:w-2/3 flex flex-col justify-between">
        <div class="space-y-6">
          <div class="group">
            <div class="flex justify-between items-center mb-2">
              <label class="text-[11px] sm:text-sm text-gray-300 font-mono transition-colors group-hover:text-white">DNS over HTTPS (DoH)</label>
            </div>
            <div class="flex bg-dark border border-border rounded overflow-hidden transition-colors group-hover:border-gray-500">
              <input
                type="text"
                readonly
                :value="dohUrl"
                class="bg-transparent w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-sm text-gray-300 font-mono outline-none min-w-0 text-ellipsis"
              />
              <button
                @click="copyToClipboard(dohUrl, 'doh')"
                class="px-3 sm:px-4 text-gray-400 hover:text-accent transition border-l border-border bg-card shrink-0"
              >
                <svg v-if="copiedField !== 'doh'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="group">
            <div class="flex justify-between items-center mb-2">
              <label class="text-[11px] sm:text-sm text-gray-300 font-mono transition-colors group-hover:text-white">DNS over TLS (DoT)</label>
            </div>
            <div class="flex bg-dark border border-border rounded overflow-hidden transition-colors group-hover:border-gray-500">
              <input
                type="text"
                readonly
                :value="dotUrl"
                class="bg-transparent w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-sm text-gray-300 font-mono outline-none min-w-0 text-ellipsis"
              />
              <button
                @click="copyToClipboard(dotUrl, 'dot')"
                class="px-3 sm:px-4 text-gray-400 hover:text-accent transition border-l border-border bg-card shrink-0"
              >
                <svg v-if="copiedField !== 'dot'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <label class="text-[11px] sm:text-sm text-gray-300 font-mono mb-2 flex items-center gap-2">
            IPv6 Support 
          </label>
          
          <div :key="terminalKey" class="bg-dark border border-border rounded-xl p-4 sm:p-5 font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto shadow-inner group custom-scrollbar">
            
            <div class="min-w-max">
              <div class="flex gap-1.5 mb-4">
                <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>

              <div class="flex items-center text-gray-300">
                <span class="text-green-400 font-semibold mr-2 shrink-0">root@srv-sainzlab:~#</span>
                <div class="relative overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-typing-cursor inline-block">
                  <span class="text-white">dig @dns.sainzcloud.my.id -6 youtube.com AAAA</span>
                </div>
              </div>
              
              <div class="opacity-0 animate-show-output">
                <div class="mt-4 text-gray-500">;; QUESTION SECTION:</div>
                <div class="text-gray-300">;youtube.com.                   IN      A</div>
                <div class="mt-3 text-gray-500">;; ANSWER SECTION:</div>
                <div class="text-gray-300 hover:text-white hover:bg-white/5 px-1 -mx-1 rounded transition-colors cursor-default">youtube.com.            104     IN      AAAA    2404:6800:4003:c05::5b</div>
                <div class="text-gray-300 hover:text-white hover:bg-white/5 px-1 -mx-1 rounded transition-colors cursor-default">youtube.com.            104     IN      AAAA    2404:6800:4003:c05::be</div>
                <div class="text-gray-300 hover:text-white hover:bg-white/5 px-1 -mx-1 rounded transition-colors cursor-default">youtube.com.            104     IN      AAAA    2404:6800:4003:c05::88</div>
                <div class="mt-4 text-gray-500">;; Query time: 8 msec</div>
                <div class="text-gray-500">;; SERVER: 2001:df7:XXXX:XX::XXX#53(dns.sainzcloud.my.id) (UDP)</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #374151;
  border-radius: 20px;
}
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #374151 transparent;
}

@keyframes dataFlow {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(300px); opacity: 0; }
}
.animate-data-flow {
  animation: dataFlow 3s linear infinite;
}

@keyframes pulseBorder {
  0%, 100% { box-shadow: 0 0 15px rgba(250,204,21,0.15); }
  50% { box-shadow: 0 0 25px rgba(250,204,21,0.4); }
}
.animate-pulse-border {
  animation: pulseBorder 3s ease-in-out infinite;
}
.animation-delay-500 {
  animation-delay: 500ms;
}

@keyframes typingEffect {
  from { width: 0; }
  to { width: 46ch; } 
}
@keyframes blinkCursor {
  from, to { border-right-color: transparent; }
  50% { border-right-color: #facc15; }
}
.animate-typing-cursor {
  animation: 
    typingEffect 2s steps(45, end) forwards,
    blinkCursor 0.75s step-end infinite;
}

@keyframes fadeOutput {
  to { opacity: 1; }
}
.animate-show-output {
  animation: fadeOutput 0.5s ease-out 2s forwards;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dohUrl = ref('https://dns.sainzcloud.my.id/dns-query');
const dotUrl = ref('tls://dns.sainzcloud.my.id');

const copiedField = ref(null);
let copiedTimeout;

async function copyToClipboard(text, field) {
  try {
    await navigator.clipboard.writeText(text);
    copiedField.value = field;

    if (copiedTimeout) clearTimeout(copiedTimeout);
    copiedTimeout = setTimeout(() => {
      copiedField.value = null;
    }, 2000);
  } catch (err) {
    console.error('Gagal menyalin ke clipboard:', err);
  }
}

const terminalKey = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    terminalKey.value += 1;
  }, 9000); 
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
  if (copiedTimeout) clearTimeout(copiedTimeout);
});
</script>