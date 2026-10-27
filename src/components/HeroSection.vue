<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { profile } from '../data/cv.js'
import Icon from './Icon.vue'
import photo from '../assets/profile.jpg'

// Typ-effect voor "Ik bouw ..."
const typed = ref(profile.roles[0])
let timer
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function cycle(i = 0, char = profile.roles[0].length, deleting = true) {
  const word = profile.roles[i]
  if (deleting) {
    if (char > 0) {
      typed.value = word.slice(0, char - 1)
      timer = setTimeout(() => cycle(i, char - 1, true), 38)
    } else {
      const next = (i + 1) % profile.roles.length
      timer = setTimeout(() => cycle(next, 0, false), 250)
    }
  } else {
    if (char < word.length) {
      typed.value = word.slice(0, char + 1)
      timer = setTimeout(() => cycle(i, char + 1, false), 70)
    } else {
      timer = setTimeout(() => cycle(i, char, true), 2100)
    }
  }
}

// Foto kantelt licht mee met de muis
const tilt = ref({ x: 0, y: 0 })
function onMove(e) {
  const r = e.currentTarget.getBoundingClientRect()
  tilt.value = { x: ((e.clientY - r.top) / r.height - 0.5) * -8, y: ((e.clientX - r.left) / r.width - 0.5) * 8 }
}

const stats = [
  { value: '3', label: 'platformen voor één eigen app: iOS, Android en Windows' },
  { value: '5', label: 'packages in mijn eigen monorepo' },
  { value: '8,5', label: 'beoordeling Android-project Forward Football' },
]

onMounted(() => {
  if (!reduce) timer = setTimeout(() => cycle(0), 2400)
})
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section id="top" class="gutter relative overflow-hidden pb-16 pt-28 sm:pt-36">
    <!-- zachte achtergrondgloed -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl"
    ></div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgb(var(--line))_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
    ></div>

    <div class="relative mx-auto grid max-w-page items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
      <div class="min-w-0">
        <p class="eyebrow flex animate-rise items-center gap-2.5">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-signal"></span>
          </span>
          Op zoek naar een stage · {{ profile.location }}
        </p>

        <h1
          class="mt-6 animate-rise font-display text-[clamp(2.9rem,8vw,5.6rem)] font-extrabold leading-[0.95] [animation-delay:120ms]"
        >
          {{ profile.name }}
        </h1>

        <p class="mt-5 animate-rise font-display text-[clamp(1.35rem,3vw,1.9rem)] font-semibold text-muted [animation-delay:240ms]">
          Ik bouw
          <span class="text-accent">{{ typed }}</span><span class="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-[-0.1em]" style="height: 1em"></span>
        </p>

        <p class="mt-6 max-w-[38rem] animate-rise text-lg leading-relaxed text-ink/80 [animation-delay:360ms]">
          {{ profile.summary }}
        </p>

        <div class="mt-9 flex animate-rise flex-wrap items-center gap-3 [animation-delay:480ms]">
          <a href="#nu" class="btn-primary group">
            Waar ik nu aan bouw
            <span class="transition-transform duration-200 group-hover:translate-x-1"><Icon name="arrow" /></span>
          </a>
          <a href="#contact" class="btn-ghost">Neem contact op</a>
          <a :href="profile.github.url" target="_blank" rel="noopener" class="btn-ghost !px-3" aria-label="GitHub">
            <Icon name="github" />
          </a>
          <a :href="profile.linkedin.url" target="_blank" rel="noopener" class="btn-ghost !px-3" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
        </div>
      </div>

      <!-- Foto als afdruk, die "ontwikkelt" bij het laden -->
      <div class="mx-auto w-full max-w-[15rem] animate-rise sm:max-w-[19rem] [animation-delay:200ms] [perspective:900px] lg:max-w-none">
        <figure
          class="relative rotate-[2deg] rounded-[1.4rem] border border-line bg-surface p-3 pb-4 shadow-[0_30px_80px_-30px_rgb(var(--ink)/0.35)] transition-transform duration-300 ease-out"
          :style="{ transform: `rotate(2deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }"
          @mousemove="onMove"
          @mouseleave="tilt = { x: 0, y: 0 }"
        >
          <div class="overflow-hidden rounded-[1rem] bg-line">
            <img
              :src="photo"
              alt="Portret van Yuk Sui Man"
              width="720"
              height="960"
              class="aspect-[3/4] w-full animate-develop object-cover [animation-delay:350ms]"
            />
          </div>
          <figcaption class="mt-3 flex items-center justify-between px-1 font-mono text-[0.7rem] text-muted">
            <span>IMG_0001.JPG</span>
            <span class="flex items-center gap-1.5 text-signal"><span class="h-1.5 w-1.5 rounded-full bg-signal"></span>back-up ✓</span>
          </figcaption>
        </figure>
      </div>
    </div>

    <dl class="relative mx-auto mt-16 grid max-w-page gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
      <div
        v-for="(s, i) in stats"
        :key="s.label"
        v-reveal="i * 100"
        class="flex items-baseline gap-4 bg-surface px-6 py-5"
      >
        <dt class="sr-only">{{ s.label }}</dt>
        <dd class="font-display text-4xl font-extrabold tabular-nums text-accent">{{ s.value }}</dd>
        <dd class="text-sm leading-snug text-muted">{{ s.label }}</dd>
      </div>
    </dl>
  </section>
</template>
