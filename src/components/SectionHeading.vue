<script setup>
defineProps({ eyebrow: String, title: String })
</script>

<template>
  <div v-reveal class="flex items-baseline gap-4">
    <h2 class="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-none">{{ title }}</h2>
    <span class="h-px flex-1 bg-line"></span>
    <span class="eyebrow hidden sm:inline">{{ eyebrow }}</span>
  </div>
</template>
