<template>
  <div class="min-h-screen flex flex-col">
    
    <SectionHero />

    <main class="flex-grow max-w-[1200px] mx-auto w-full px-6 space-y-32 pt-16 pb-20">
      <SectionFeatures />
      <SectionSetup />
      <SectionNetwork />
      <SectionTelemetry />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import SectionHero from './components/SectionHero.vue'
import SectionFeatures from './components/SectionFeatures.vue'
import SectionSetup from './components/SectionSetup.vue'
import SectionNetwork from './components/SectionNetwork.vue'
import SectionTelemetry from './components/SectionTelemetry.vue'
import AppFooter from './components/AppFooter.vue'
</script>