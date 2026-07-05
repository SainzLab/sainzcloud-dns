<template>
  <section class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-dark">
    
    <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] animate-pan-bg"></div>

    <div class="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent rounded-full blur-[100px] z-0 pointer-events-none animate-pulse-glow"></div>

    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tight mb-6 leading-[1.1]">
        <span class="text-white drop-shadow-md block mb-1 animate-fade-in-up">
          INTERNET CEPAT & AMAN
        </span>
        <div class="animate-fade-in-up animation-delay-100">
          <span class="text-white drop-shadow-md">DENGAN </span>
          <span class="text-accent drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">myDNS</span>
        </div>
      </h1>

      <p class="text-gray-400 text-sm md:text-lg mb-10 max-w-2xl mx-auto font-medium animate-fade-in-up animation-delay-200">
        Solusi DNS Publik Terenkripsi (DoH/DoT) untuk Melindungi Privasi Anda.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
        
        <a href="#setup" class="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 bg-accent text-dark font-bold font-mono text-sm uppercase tracking-wider rounded hover:bg-yellow-500 transition shadow-[0_0_15px_rgba(250,204,21,0.2)]">
           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
           <span>Panduan Setup</span>
        </a>
        <a href="#tools" class="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent border border-accent text-accent font-bold font-mono text-sm uppercase tracking-wider rounded transition-all duration-300 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(250,204,21,0.1)]">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span>Tools</span>
        </a>

      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce animate-fade-in-up animation-delay-500 hidden sm:block">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes panBg {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 32px 32px;
  }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-pan-bg {
  animation: panBg 3s linear infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 6s ease-in-out infinite;
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-500 { animation-delay: 500ms; }
</style>