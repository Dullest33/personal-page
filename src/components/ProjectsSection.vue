<script setup>
import { projects } from '../data/cv.js'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="projecten" class="gutter py-20 sm:py-24">
    <div class="mx-auto max-w-page">
      <SectionHeading title="Overige projecten" eyebrow="Ook in mijn vrije tijd" />
      <ul class="mt-12 grid gap-4 md:grid-cols-2">
        <li
          v-for="(p, i) in projects"
          :key="p.title"
          v-reveal="i * 100"
          class="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgb(var(--accent)/0.45)]"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="font-display text-2xl font-bold">{{ p.title }}</h3>
            <span class="font-mono text-xs text-muted">{{ p.period }}</span>
          </div>
          <p class="mt-1 text-sm font-medium text-accent">{{ p.kind }}</p>
          <p class="mt-4 flex-1 leading-relaxed text-ink/80">{{ p.text }}</p>
          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="t in p.tags" :key="t" class="chip">{{ t }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
