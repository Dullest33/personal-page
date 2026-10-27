<script setup>
import { experience } from '../data/cv.js'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="ervaring" class="gutter py-20 sm:py-24">
    <div class="mx-auto max-w-page">
      <SectionHeading title="Ervaring" eyebrow="Werk & projecten" />

      <ol class="relative mt-12 grid gap-10 border-l border-line pl-6 sm:pl-10 md:ml-[11rem]">
        <li v-for="(job, i) in experience" :key="job.role" v-reveal="i * 60" class="relative">
          <span
            class="absolute -left-[calc(1.5rem+5px)] top-2 h-[9px] w-[9px] rounded-full border-2 border-paper bg-accent ring-4 ring-accent/15 sm:-left-[calc(2.5rem+5px)]"
          ></span>
          <p class="font-mono text-xs uppercase tracking-[0.1em] text-muted md:absolute md:-left-[13.5rem] md:top-1.5 md:w-[10rem] md:text-right">
            {{ job.period }}
          </p>
          <div class="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1 md:mt-0">
            <h3 class="font-display text-2xl font-bold leading-tight">{{ job.role }}</h3>
            <span
              v-if="job.highlight"
              class="rounded-full bg-signal/15 px-2.5 py-0.5 font-mono text-xs font-medium text-signal"
              >cijfer {{ job.highlight }}</span
            >
          </div>
          <p class="mt-1 font-medium text-accent">{{ job.org }}</p>
          <ul class="mt-3 grid max-w-[42rem] gap-2">
            <li v-for="p in job.points" :key="p" class="flex gap-3 leading-relaxed text-ink/80">
              <span class="mt-[0.7em] h-px w-3 shrink-0 bg-muted"></span>{{ p }}
            </li>
          </ul>
          <ul v-if="job.tags.length" class="mt-4 flex flex-wrap gap-2">
            <li v-for="t in job.tags" :key="t" class="chip">{{ t }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
