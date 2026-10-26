<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

// Interactief schema: hoe de telefoon de thuis-pc bereikt, thuis (direct) of onderweg (via de blinde relay).
const mode = ref('remote')
let auto
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function choose(m) {
  mode.value = m
  clearInterval(auto)
}

const caption = computed(() =>
  mode.value === 'remote'
    ? 'Onderweg: de pc houdt zelf een uitgaande tunnel naar de relay open. De relay koppelt de telefoon eraan en geeft alleen versleutelde bytes door.'
    : 'Thuis: de telefoon vindt de pc op hetzelfde wifi-netwerk en praat er rechtstreeks mee. Er komt geen externe server aan te pas.',
)

const packets = [0, 0.8, 1.6]

onMounted(() => {
  if (!reduce) auto = setInterval(() => (mode.value = mode.value === 'remote' ? 'lan' : 'remote'), 6000)
})
onUnmounted(() => clearInterval(auto))
</script>

<template>
  <div class="rounded-2xl border border-line bg-paper/60 p-4 sm:p-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="eyebrow">Hoe de app verbindt</p>
      <div class="inline-flex rounded-full border border-line bg-surface p-1 text-sm" role="tablist" aria-label="Verbindingsmodus">
        <button
          v-for="m in [
            { id: 'lan', label: 'Thuis' },
            { id: 'remote', label: 'Onderweg' },
          ]"
          :key="m.id"
          type="button"
          role="tab"
          :aria-selected="mode === m.id"
          class="rounded-full px-4 py-1.5 font-medium transition-colors duration-200"
          :class="mode === m.id ? 'bg-accent text-accent-ink' : 'text-muted hover:text-ink'"
          @click="choose(m.id)"
        >
          {{ m.label }}
        </button>
      </div>
    </div>

    <div class="-mx-4 mt-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <svg viewBox="0 0 760 300" class="w-full min-w-[600px]" role="img" aria-labelledby="relay-title relay-desc">
        <title id="relay-title">Verbindingsschema foto-backupplatform</title>
        <desc id="relay-desc">{{ caption }}</desc>

        <defs>
          <path id="p-remote" d="M150 150 C 230 150, 230 62, 305 62 L 455 62 C 530 62, 530 150, 598 150" />
          <path id="p-lan" d="M150 222 C 290 268, 470 268, 598 214" />
        </defs>

        <!-- verbindingen -->
        <use
          href="#p-remote"
          fill="none"
          stroke-width="2.5"
          stroke-linecap="round"
          class="transition-all duration-500"
          :class="mode === 'remote' ? 'stroke-accent flow' : 'stroke-line'"
          stroke-dasharray="7 9"
        />
        <use
          href="#p-lan"
          fill="none"
          stroke-width="2.5"
          stroke-linecap="round"
          class="transition-all duration-500"
          :class="mode === 'lan' ? 'stroke-accent flow' : 'stroke-line'"
          stroke-dasharray="7 9"
        />

        <!-- datapakketjes met slotje -->
        <g :key="mode">
          <g v-for="d in packets" :key="d">
            <circle r="9" class="fill-accent" />
            <path d="M-3.2 0.5h6.4v4.2h-6.4zM-1.9 0.5v-1.7a1.9 1.9 0 0 1 3.8 0v1.7" class="fill-none stroke-accent-ink" stroke-width="1.3" />
            <animateMotion :dur="mode === 'remote' ? '2.4s' : '1.8s'" :begin="`${d}s`" repeatCount="indefinite" rotate="0" fill="freeze">
              <mpath :href="mode === 'remote' ? '#p-remote' : '#p-lan'" />
            </animateMotion>
          </g>
        </g>

        <!-- relay -->
        <g class="transition-opacity duration-500" :opacity="mode === 'remote' ? 1 : 0.35">
          <rect x="305" y="28" width="150" height="68" rx="14" class="fill-surface stroke-line" stroke-width="1.5" />
          <text x="380" y="57" text-anchor="middle" class="fill-ink font-display text-[15px] font-bold">Relay-server</text>
          <text x="380" y="77" text-anchor="middle" class="fill-muted font-mono text-[10.5px]">VPS · zelf gedeployd</text>
          <text x="380" y="118" text-anchor="middle" class="fill-muted font-mono text-[10.5px]">ziet alleen versleutelde bytes</text>
        </g>

        <!-- telefoon -->
        <g>
          <rect x="40" y="110" width="110" height="170" rx="20" class="fill-surface stroke-ink/70" stroke-width="2" />
          <rect x="78" y="118" width="34" height="6" rx="3" class="fill-line" />
          <g v-for="i in 9" :key="i">
            <rect
              :x="52 + ((i - 1) % 3) * 29"
              :y="134 + Math.floor((i - 1) / 3) * 29"
              width="26"
              height="26"
              rx="4"
              class="fill-accent"
              :opacity="0.18 + ((i * 37) % 60) / 100"
            />
          </g>
          <text x="95" y="244" text-anchor="middle" class="fill-ink font-display text-[13px] font-bold">Telefoon</text>
          <text x="95" y="262" text-anchor="middle" class="fill-muted font-mono text-[10px]">Flutter · iOS / Android</text>
        </g>

        <!-- pc -->
        <g>
          <rect x="598" y="118" width="132" height="92" rx="10" class="fill-surface stroke-ink/70" stroke-width="2" />
          <rect x="610" y="130" width="108" height="56" rx="4" class="fill-paper" />
          <text x="664" y="155" text-anchor="middle" class="fill-ink font-display text-[13px] font-bold">Thuis-pc</text>
          <text x="664" y="173" text-anchor="middle" class="fill-muted font-mono text-[9.5px]">Electron + Fastify</text>
          <rect x="652" y="210" width="24" height="16" class="fill-ink/70" />
          <rect x="632" y="226" width="64" height="5" rx="2.5" class="fill-ink/70" />
          <text x="664" y="252" text-anchor="middle" class="fill-muted font-mono text-[10px]">SQLite · eigen opslag</text>
        </g>

        <!-- labels bij de lijnen -->
        <text x="374" y="286" text-anchor="middle" class="font-mono text-[10.5px] transition-colors duration-500" :class="mode === 'lan' ? 'fill-accent' : 'fill-muted'">
          zelfde wifi · direct
        </text>
        <g class="font-mono text-[10.5px]">
          <text x="95" y="96" text-anchor="middle" :class="mode === 'remote' ? 'fill-accent' : 'fill-muted'">TLS, gepind certificaat</text>
          <text x="664" y="104" text-anchor="middle" :class="mode === 'remote' ? 'fill-accent' : 'fill-muted'">uitgaande tunnel</text>
        </g>
      </svg>
    </div>

    <p class="mt-3 min-h-[3.2em] max-w-[44rem] text-sm leading-relaxed text-muted" aria-live="polite">{{ caption }}</p>
  </div>
</template>

<style scoped>
.flow {
  animation: flow 1s linear infinite;
}
@keyframes flow {
  to {
    stroke-dashoffset: -16;
  }
}
</style>
