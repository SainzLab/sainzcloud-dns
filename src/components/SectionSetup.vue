<template>
  <section id="setup" class="pb-16 scroll-mt-24">
    
    <div class="flex items-center gap-2 mb-6 px-2 sm:px-0">
      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
      <h2 class="text-white font-medium">Panduan Setup</h2>
    </div>

    <div class="bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-6 shadow-sm">
      
      <div class="w-full md:w-1/4 flex flex-row md:flex-col gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar snap-x snap-mandatory">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex items-center justify-center md:justify-start gap-0 md:gap-2.5 p-3 md:px-4 md:py-3 rounded-lg text-sm font-medium transition-all text-left border shrink-0 snap-start flex-1 md:flex-none"
          :class="activeTab === tab.id ? 'bg-accent/10 text-accent border-accent/50 shadow-[0_0_10px_rgba(250,204,21,0.05)]' : 'bg-transparent text-gray-400 border-transparent hover:bg-dark hover:text-gray-200 hover:border-border'" >
          <span v-html="tab.icon" class="w-5 h-5 flex-shrink-0"></span>
          <span class="hidden md:block">{{ tab.name }}</span>
        </button>
      </div>

      <div class="w-full md:w-3/4 bg-dark border border-border rounded-lg p-4 sm:p-6 min-h-[300px] flex flex-col justify-center">
        
        <div v-if="activeTab === 'android'" class="animate-fade-in">
          <h3 class="text-white font-semibold mb-4 text-sm sm:text-base flex items-center gap-2">
            Setup DNS Pribadi <span class="text-gray-500 font-normal text-xs">(Android 9+)</span>
          </h3>
          <ol class="space-y-3 text-[13px] sm:text-sm text-gray-400 list-decimal list-outside ml-4">
            <li>Buka menu <span class="text-gray-200 font-medium">Pengaturan (Settings)</span> di perangkat Android Anda.</li>
            <li>Pilih menu <span class="text-gray-200 font-medium">Koneksi</span> atau <span class="text-gray-200 font-medium">Jaringan & Internet</span>.</li>
            <li>Cari dan pilih opsi <span class="text-gray-200 font-medium">DNS Pribadi (Private DNS)</span>.</li>
            <li>Pilih opsi <span class="text-gray-200 font-medium">Nama host penyedia DNS pribadi</span>.</li>
            <li>Masukkan alamat berikut pada kolom yang tersedia:</li>
          </ol>
          <div class="mt-5 flex bg-card border border-border rounded-lg overflow-hidden focus-within:border-accent/50 transition-colors">
            <input type="text" readonly :value="dotUrl" class="bg-transparent w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-sm text-gray-300 font-mono outline-none min-w-0 text-ellipsis" />
            <button @click="copyToClipboard(dotUrl, 'android')" class="px-3 sm:px-4 text-gray-400 hover:text-accent transition border-l border-border bg-dark shrink-0">
              <svg v-if="copiedField !== 'android'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
          </div>
          <p class="mt-4 text-[11px] sm:text-xs text-gray-500 leading-relaxed">Ketuk <b class="text-gray-400">Simpan</b>. Perangkat Anda sekarang terenkripsi menggunakan DNS over TLS (DoT).</p>
        </div>

        <div v-if="activeTab === 'windows'" class="animate-fade-in">
          <h3 class="text-white font-semibold mb-4 text-sm sm:text-base flex items-center gap-2">
            Setup DNS over HTTPS <span class="text-gray-500 font-normal text-xs">(Windows 11)</span>
          </h3>
          <ol class="space-y-3 text-[13px] sm:text-sm text-gray-400 list-decimal list-outside ml-4">
            <li>Buka <span class="text-gray-200 font-medium">Settings</span> > <span class="text-gray-200 font-medium">Network & internet</span>.</li>
            <li>Pilih koneksi yang sedang digunakan (<span class="text-gray-200 font-medium">Wi-Fi</span> atau <span class="text-gray-200 font-medium">Ethernet</span>).</li>
            <li>Pada bagian <b>DNS server assignment</b>, klik tombol <span class="text-gray-200 font-medium">Edit</span> dan ubah ke <b>Manual</b>.</li>
            <li>Aktifkan DNS over HTTPS ke on, kemudian masukkan konfigurasi DoH berikut:</li>
          </ol>
          <div class="mt-5 flex bg-card border border-border rounded-lg overflow-hidden focus-within:border-accent/50 transition-colors">
            <input type="text" readonly :value="dohUrl" class="bg-transparent w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-sm text-gray-300 font-mono outline-none min-w-0 text-ellipsis" />
            <button @click="copyToClipboard(dohUrl, 'windows')" class="px-3 sm:px-4 text-gray-400 hover:text-accent transition border-l border-border bg-dark shrink-0">
              <svg v-if="copiedField !== 'windows'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
          </div>
          <p class="mt-4 text-[11px] sm:text-xs text-gray-500 leading-relaxed">Ketuk <b class="text-gray-400">Simpan</b>. Perangkat Anda sekarang terenkripsi menggunakan DNS over HTTPS (DoH).</p>
        </div>

        <div v-if="activeTab === 'browser'" class="animate-fade-in">
          <h3 class="text-white font-semibold mb-4 text-sm sm:text-base flex items-center gap-2">
            Setup Secure DNS <span class="text-gray-500 font-normal text-xs">(Chrome / Edge)</span>
          </h3>
          <ol class="space-y-3 text-[13px] sm:text-sm text-gray-400 list-decimal list-outside ml-4">
            <li>Buka pengaturan Browser (Settings).</li>
            <li>Cari menu <span class="text-gray-200 font-medium">Privacy and security</span> (Privasi dan keamanan).</li>
            <li>Pilih <span class="text-gray-200 font-medium">Security</span>, lalu gulir ke bawah ke bagian <b>Use secure DNS</b>.</li>
            <li>Pilih opsi <span class="text-gray-200 font-medium">With (Custom)</span>.</li>
            <li>Masukkan URL DoH SainzCloud pada kolom yang muncul:</li>
          </ol>
          <div class="mt-5 flex bg-card border border-border rounded-lg overflow-hidden focus-within:border-accent/50 transition-colors">
            <input type="text" readonly :value="dohUrl" class="bg-transparent w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-sm text-gray-300 font-mono outline-none min-w-0 text-ellipsis" />
            <button @click="copyToClipboard(dohUrl, 'browser')" class="px-3 sm:px-4 text-gray-400 hover:text-accent transition border-l border-border bg-dark shrink-0">
              <svg v-if="copiedField !== 'browser'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
          </div>
          <p class="mt-4 text-[11px] sm:text-xs text-gray-500 leading-relaxed">Ketuk <b class="text-gray-400">Simpan</b>. Perangkat Anda sekarang terenkripsi menggunakan DNS over HTTPS (DoH).</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('android');

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

const tabs = [
  { 
    id: 'android', 
    name: 'Android', 
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>'
  },
  { 
    id: 'windows', 
    name: 'Windows 11', 
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
  },
  { 
    id: 'browser', 
    name: 'Web Browser', 
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>'
  }
];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>