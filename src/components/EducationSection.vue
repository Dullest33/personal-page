<script setup>
import { education, languages } from '../data/cv.js'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="opleiding" class="gutter py-20 sm:py-24">
    <div class="mx-auto max-w-page">
      <SectionHeading title="Opleiding" eyebrow="& talen" />
      <div class="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <ul class="grid gap-4">
          <li v-for="(e, i) in education" :key="e.title" v-reveal="i * 100" class="rounded-2xl border border-line bg-surface p-6">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="font-display text-xl font-bold">{{ e.title }}</h3>
              <span class="font-mono text-xs text-muted">{{ e.period }}</span>
            </div>
            <p class="mt-1 font-medium text-accent">{{ e.org }}</p>
            <p v-if="e.text" class="mt-3 leading-relaxed text-ink/80">{{ e.text }}</p>
          </li>
        </ul>
        <div v-reveal="150">
          <h3 class="eyebrow">Talen</h3>
          <ul class="mt-4 divide-y divide-line border-y border-line">
            <li v-for="l in languages" :key="l.name" class="flex items-baseline justify-between gap-4 py-3.5">
              <span class="font-display text-lg font-semibold">{{ l.name }}</span>
              <span v-if="l.level" class="text-sm text-muted">{{ l.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
