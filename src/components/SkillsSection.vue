<script setup>
import { skills } from '../data/cv.js'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="vaardigheden" class="gutter py-20 sm:py-24">
    <div class="mx-auto max-w-page">
      <SectionHeading title="Vaardigheden" eyebrow="Technische stack" />
      <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(group, i) in skills" :key="group.area" v-reveal="(i % 3) * 80" class="bg-surface p-6">
          <h3 class="eyebrow !text-ink">{{ group.area }}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="chip cursor-default transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
