<script setup>
import { featured } from '../data/cv.js'
import RelayDiagram from './RelayDiagram.vue'

// Kaartjes lichten op waar de muis is (spotlight-effect)
function spot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}
</script>

<template>
  <section id="nu" class="gutter py-20 sm:py-28">
    <div class="mx-auto max-w-page">
      <div v-reveal class="flex flex-wrap items-end justify-between gap-6">
        <div class="min-w-0">
          <p class="eyebrow flex items-center gap-2.5">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Waar ik nu aan bouw · {{ featured.period }}
          </p>
          <h2 class="mt-3 font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-none">
            {{ featured.name }}
          </h2>
          <p class="mt-3 font-display text-xl font-semibold text-muted sm:text-2xl">{{ featured.subtitle }}</p>
        </div>
        <span class="chip !border-accent/30 !bg-accent/10 !text-accent">{{ featured.kind }}</span>
      </div>

      <div class="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div v-reveal="100" class="min-w-0">
          <p class="max-w-[36rem] text-lg leading-relaxed text-ink/85">{{ featured.intro }}</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li v-for="s in featured.stack" :key="s" class="chip">{{ s }}</li>
          </ul>
          <div class="mt-8 rounded-2xl border border-line bg-surface p-5">
            <p class="eyebrow">Uitgangspunten</p>
            <ul class="mt-3 grid gap-3">
              <li v-for="p in featured.principles" :key="p" class="flex gap-3 text-[0.95rem] leading-snug text-ink/85">
                <span class="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-signal"></span>
                {{ p }}
              </li>
            </ul>
          </div>
        </div>
        <div v-reveal="200" class="min-w-0">
          <RelayDiagram />
        </div>
      </div>

      <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(f, i) in featured.features"
          :key="f.title"
          v-reveal="(i % 3) * 90"
          class="feature group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/40"
          @mousemove="spot"
        >
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent">{{ f.tag }}</p>
          <h3 class="mt-3 font-display text-xl font-bold leading-tight">{{ f.title }}</h3>
          <p class="mt-3 text-[0.95rem] leading-relaxed text-muted">{{ f.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.feature::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.1), transparent 70%);
}
.feature:hover::before {
  opacity: 1;
}
</style>
