<script setup>
import { ref } from 'vue'
import { profile } from '../data/cv.js'
import Icon from './Icon.vue'

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (e) {
    window.location.href = `mailto:${profile.email}`
  }
}

const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="gutter pb-10 pt-20 sm:pt-28">
    <div
      v-reveal
      class="relative mx-auto max-w-page overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-accent-ink sm:px-14 sm:py-20"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border-[40px] border-accent-ink/10"
      ></div>
      <div aria-hidden="true" class="pointer-events-none absolute -right-4 top-10 h-40 w-40 rounded-full border-[18px] border-accent-ink/10"></div>

      <p class="font-mono text-xs uppercase tracking-[0.14em] opacity-75">Contact</p>
      <h2 class="mt-4 max-w-[16ch] font-display text-[clamp(2.2rem,6vw,4.2rem)] font-extrabold leading-[1]">
        Zullen we kennismaken?
      </h2>
      <p class="mt-5 max-w-[34rem] text-lg opacity-85">
        Ik zoek een stage of werkplek waar ik aan echte producten kan bijdragen. Mail of bel me gerust.
      </p>

      <div class="relative mt-10 flex flex-wrap items-center gap-3">
        <a
          :href="`mailto:${profile.email}`"
          class="btn bg-accent-ink text-accent hover:-translate-y-0.5"
        >
          <Icon name="mail" /> {{ profile.email }}
        </a>
        <button
          type="button"
          class="btn border border-accent-ink/30 hover:-translate-y-0.5 hover:border-accent-ink/70"
          @click="copyEmail"
        >
          <Icon :name="copied ? 'check' : 'copy'" /> {{ copied ? 'Gekopieerd' : 'Kopieer e-mail' }}
        </button>
        <a :href="`tel:${profile.phoneHref}`" class="btn border border-accent-ink/30 hover:-translate-y-0.5 hover:border-accent-ink/70">
          <Icon name="phone" /> {{ profile.phone }}
        </a>
      </div>
      <div class="relative mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a :href="profile.github.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 opacity-85 hover:opacity-100">
          <Icon name="github" /> {{ profile.github.label }}
        </a>
        <a :href="profile.linkedin.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 opacity-85 hover:opacity-100">
          <Icon name="linkedin" /> {{ profile.linkedin.label }}
        </a>
        <span class="inline-flex items-center gap-2 opacity-85"><Icon name="pin" /> {{ profile.location }}</span>
      </div>
    </div>

    <footer class="mx-auto mt-10 flex max-w-page flex-wrap items-center justify-between gap-3 text-sm text-muted">
      <p>© {{ year }} {{ profile.name }}</p>
      <p class="font-mono text-xs">Gebouwd met Vue, Vite en Tailwind CSS</p>
    </footer>
  </section>
</template>
