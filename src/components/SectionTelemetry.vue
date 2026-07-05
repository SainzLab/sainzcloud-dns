<template>
  <section class="pb-16">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-white font-medium">Live Telemetry (24H)</h2>
      <div class="flex items-center gap-2 text-xs font-mono tracking-wider">
        <span class="w-2 h-2 rounded-full" 
              :class="!isSynced ? 'bg-red-500' : (isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500')">
        </span>
        <span :class="!isSynced ? 'text-red-400' : 'text-gray-400'">
          {{ !isSynced ? 'DISCONNECTED' : (isLoading ? 'SYNCING...' : 'SYNCED') }}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
      <div class="flex flex-col gap-4 lg:col-span-1">

        <div class="bg-card border border-border rounded-xl p-4 lg:p-5 flex justify-between items-center shadow-sm">
          <div>
            <p class="text-[10px] text-gray-400 font-mono uppercase mb-1">Queries Per Second</p>
            <p class="text-xl text-white font-semibold">{{ stats.queriesPerSecond }} <span class="text-sm font-normal text-gray-400">ms</span></p>
          </div>
          <div class="w-8 h-8 rounded bg-dark border border-border flex items-center justify-center text-accent">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
          </div>
        </div>
        
        <div class="bg-card border border-border rounded-xl p-4 lg:p-5 flex justify-between items-center shadow-sm">
          <div class="flex-grow">
            <div class="flex items-center gap-3 mb-1">
              <p class="text-[10px] text-gray-400 font-mono uppercase">Blocked By Filter</p>
              <span class="text-[10px] text-red-400 font-mono font-bold bg-red-400/10 px-1.5 py-0.5 rounded border border-red-400/20">
                {{ stats.blockedPercentage }}%
              </span>
            </div>
            <p class="text-xl text-white font-semibold">{{ formatNumber(stats.blockedCount) }}</p>
          </div>
          <div class="w-8 h-8 flex-shrink-0 rounded bg-dark border border-border flex items-center justify-center text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.957 11.957 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
        </div>
        
        <div class="bg-card border border-border rounded-xl p-4 lg:p-5 flex justify-between items-center shadow-sm">
          <div>
            <p class="text-[10px] text-gray-400 font-mono uppercase mb-1">Avg Latency (ID)</p>
            <p class="text-xl text-white font-semibold">{{ stats.avgLatency }} <span class="text-sm font-normal text-gray-400">ms</span></p>
          </div>
          <div class="w-8 h-8 rounded bg-dark border border-border flex items-center justify-center text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
        </div>
      </div>

      <div class="bg-card border border-border rounded-xl p-5 lg:col-span-3 hidden lg:flex flex-col shadow-sm select-none">
        <p class="text-[10px] text-gray-400 font-mono uppercase mb-4">DNS Queries</p>
        
        <div class="flex-grow relative border-l border-b border-border/50 ml-8 mb-5 mt-2"
             @mousemove="handleMouseMove" 
             @mouseleave="handleMouseLeave">
          
          <div v-if="hoverData" 
               class="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-gray-400/70 z-10 pointer-events-none transform -translate-x-1/2"
               :style="{ left: hoverData.xPos + '%' }">
          </div>

          <div v-if="hoverData" 
               class="absolute w-3 h-3 bg-accent border-[2.5px] border-[#141414] rounded-full z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
               :style="{ left: hoverData.xPos + '%', top: hoverData.yPos + '%' }">
          </div>

          <div v-if="hoverData" 
               class="absolute z-30 bg-[#2a2a2a] border border-gray-600/50 p-2.5 rounded shadow-2xl pointer-events-none transform -translate-x-1/2 -translate-y-full"
               :style="{ left: hoverData.xPos + '%', top: hoverData.yPos + '%', marginTop: '-14px' }">
            <div class="font-bold text-accent text-[13px] leading-tight tracking-wide">{{ hoverData.count }}</div>
            <div class="text-gray-300 text-[10px] leading-tight mt-1 whitespace-nowrap font-medium">{{ hoverData.timeStr }}</div>
          </div>

          <svg class="w-full h-full absolute inset-0 overflow-visible z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#facc15" stop-opacity="0.3" />
                <stop offset="100%" stop-color="#facc15" stop-opacity="0" />
              </linearGradient>
            </defs>
            
            <path :d="chartAreaPath" fill="url(#grad)" class="transition-all duration-300 ease-linear" />
            <path :d="chartLinePath" fill="none" stroke="#facc15" stroke-width="0.5" class="transition-all duration-300 ease-linear" />
          </svg>
          
          <div class="absolute top-0 -left-10 w-8 text-right text-[8px] text-gray-500 font-mono">{{ formatCompact(chartMax) }}</div>
          <div class="absolute top-1/2 -left-10 w-8 text-right text-[8px] text-gray-500 font-mono transform -translate-y-1/2">{{ formatCompact(chartMid) }}</div>
          <div class="absolute -bottom-5 left-0 text-[8px] text-gray-500 font-mono">00:00</div>
          <div class="absolute -bottom-5 right-0 text-[8px] text-gray-500 font-mono">23:59</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="bg-card border border-border rounded-xl p-5 shadow-sm">
        <p class="text-[10px] text-gray-400 font-mono uppercase mb-4">Top Queried Domains</p>
        <ul class="space-y-3">
          <li v-if="isLoading && topQueried.length === 0" class="text-sm text-gray-500 font-mono text-center py-2">Memuat data...</li>
          <li v-else-if="!isSynced && topQueried.length === 0" class="text-sm text-red-500/50 font-mono text-center py-2">Gagal memuat data</li>
          <li v-for="(item, index) in topQueried" :key="index" class="flex justify-between text-sm border-b border-border/30 pb-2 last:border-0 last:pb-0">
            <span class="text-gray-300 font-mono truncate mr-4">{{ item.domain }}</span>
            <span class="text-white font-mono">{{ formatNumber(item.count) }}</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-card border border-border rounded-xl p-5 shadow-sm">
        <p class="text-[10px] text-gray-400 font-mono uppercase mb-4">Top Blocked Domains</p>
        <ul class="space-y-3">
          <li v-if="isLoading && topBlocked.length === 0" class="text-sm text-gray-500 font-mono text-center py-2">Memuat data...</li>
          <li v-else-if="!isSynced && topBlocked.length === 0" class="text-sm text-red-500/50 font-mono text-center py-2">Gagal memuat data</li>
          <li v-for="(item, index) in topBlocked" :key="index" class="flex justify-between text-sm border-b border-border/30 pb-2 last:border-0 last:pb-0">
            <span class="text-gray-300 font-mono truncate mr-4">{{ item.domain }}</span>
            <span class="text-red-400 font-mono">{{ formatNumber(item.count) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const isLoading = ref(true);
const isSynced = ref(false); 
const stats = ref({
  totalQueries: 0,
  queriesPerSecond: 0,
  blockedCount: 0,
  blockedPercentage: 0,
  avgLatency: 0
});

const topQueried = ref([]);
const topBlocked = ref([]);
const chartData = ref([]); 

const hoverIndex = ref(null);

let lastQueryCount = null;
let lastQueryTimestamp = null;
const POLLING_INTERVAL_SEC = 5; 
let pollingIntervalId;

const formatNumber = (num) => {
  if (num === undefined || num === null) return '0';
  return new Intl.NumberFormat('id-ID').format(num); 
};

const formatCompact = (num) => {
  if (num === undefined || num === null) return '0';
  return Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(num);
};

const chartMax = computed(() => {
  if (chartData.value.length === 0) return 100;
  return Math.max(...chartData.value, 10); 
});

const chartMid = computed(() => {
  return Math.round(chartMax.value / 2);
});

const chartLinePath = computed(() => {
  if (chartData.value.length === 0) return '';
  const max = chartMax.value * 1.1; 
  const xStep = 100 / (chartData.value.length - 1 || 1);
  
  let path = '';
  chartData.value.forEach((val, i) => {
    const x = i * xStep;
    const y = 100 - ((val / max) * 100);
    path += i === 0 ? `M${x},${y} ` : `L${x},${y} `;
  });
  return path;
});

const chartAreaPath = computed(() => {
  if (chartData.value.length === 0) return '';
  let path = chartLinePath.value;
  path += `L100,100 L0,100 Z`; 
  return path;
});

const handleMouseMove = (event) => {
  if (chartData.value.length === 0) return;
  const rect = event.currentTarget.getBoundingClientRect();
  let relativeX = (event.clientX - rect.left) / rect.width;
  relativeX = Math.max(0, Math.min(1, relativeX));
  
  const maxIndex = chartData.value.length - 1;
  hoverIndex.value = Math.round(relativeX * maxIndex);
};

const handleMouseLeave = () => {
  hoverIndex.value = null;
};

const hoverData = computed(() => {
  if (hoverIndex.value === null || chartData.value.length === 0) return null;
  
  const maxIndex = chartData.value.length - 1;
  const count = formatNumber(chartData.value[hoverIndex.value]);
  
  const msPerPoint = (24 * 60 * 60 * 1000) / (maxIndex || 1);
  const timeMs = Date.now() - (24 * 60 * 60 * 1000) + (hoverIndex.value * msPerPoint);
  const dateObj = new Date(timeMs);
  
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('id-ID', { month: 'short' });
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  
  const xPos = (hoverIndex.value / maxIndex) * 100;
  const maxAxis = chartMax.value * 1.1;
  const yPos = 100 - ((chartData.value[hoverIndex.value] / maxAxis) * 100);
  
  return { 
    count, 
    timeStr: `${day} ${month} ${hours}:${minutes}`, 
    xPos, 
    yPos 
  };
});

const fetchTelemetryData = async () => {
  try {
    isLoading.value = true;
    const response = await fetch('http://localhost:3001/');
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    
    stats.value.totalQueries = data.total_queries || 0;
    stats.value.blockedPercentage = data.blocked_percentage || 0;
    stats.value.avgLatency = data.avg_latency || 0;
    stats.value.blockedCount = Math.round((stats.value.blockedPercentage / 100) * stats.value.totalQueries);

    const currentCount = data.total_queries;
    const now = Date.now();

    if (lastQueryCount !== null) {
      if (currentCount > lastQueryCount) {
        const diffCount = currentCount - lastQueryCount;
        const diffTimeSec = (now - lastQueryTimestamp) / 1000;
        let qps = diffCount / diffTimeSec;
        stats.value.queriesPerSecond = qps < 1 && qps > 0 ? qps.toFixed(2) : Math.round(qps);
        lastQueryCount = currentCount;
        lastQueryTimestamp = now;
      } else if (currentCount < lastQueryCount) {
        lastQueryCount = currentCount;
        lastQueryTimestamp = now;
        stats.value.queriesPerSecond = 0;
      }
    } else {
      lastQueryCount = currentCount;
      lastQueryTimestamp = now;
    }
    
    chartData.value = data.dns_queries || [];
    topQueried.value = data.top_queried ? data.top_queried.slice(0, 10) : [];
    topBlocked.value = data.top_blocked ? data.top_blocked.slice(0, 10) : [];
    isSynced.value = true;

  } catch (error) {
    console.error('Koneksi ke Telemetry Backend gagal:', error);
    isSynced.value = false;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchTelemetryData();
  pollingIntervalId = setInterval(fetchTelemetryData, POLLING_INTERVAL_SEC * 1000);
});

onUnmounted(() => {
  if (pollingIntervalId) clearInterval(pollingIntervalId);
});
</script>