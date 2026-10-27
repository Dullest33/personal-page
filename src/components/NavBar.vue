<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Icon from './Icon.vue'

const links = [
  { href: '#nu', label: 'Nu aan het bouwen' },
  { href: '#ervaring', label: 'Ervaring' },
  { href: '#projecten', label: 'Projecten' },
  { href: '#vaardigheden', label: 'Vaardigheden' },
  { href: '#opleiding', label: 'Opleiding' },
]

const dark = ref(document.documentElement.classList.contains('dark'))
const scrolled = ref(false)
const open = ref(false)
const active = ref('')

function toggleTheme() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  try {
    localStorage.setItem('theme', dark.value ? 'dark' : 'light')
  } catch (e) {}
}

let sectionObserver
function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = `#${e.target.id}`
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  links.forEach((l) => {
    const el = document.querySelector(l.href)
    if (el) sectionObserver.observe(el)
  })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  sectionObserver?.disconnect()
})
</script>

<template>
  <header
    class="gutter fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'border-b border-line/70 bg-paper/80 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <nav class="mx-auto flex h-16 max-w-page items-center justify-between gap-4">
      <a href="#top" class="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
        <span
          class="grid h-8 w-8 place-items-center rounded-lg bg-accent text-[0.8rem] font-extrabold text-accent-ink transition-transform duration-300 group-hover:rotate-[-8deg]"
          >YS</span
        >
        <span class="hidden sm:inline">Yuk Sui Man</span>
      </a>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="l in links" :key="l.href">
          <a
            :href="l.href"
            class="relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors"
            :class="active === l.href ? 'text-ink' : 'text-muted hover:text-ink'"
          >
            {{ l.label }}
            <span
              class="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300"
              :class="active === l.href ? 'scale-x-100' : 'scale-x-0'"
            ></span>
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-accent/50"
          :aria-label="dark ? 'Licht thema' : 'Donker thema'"
          @click="toggleTheme"
        >
          <Icon :name="dark ? 'sun' : 'moon'" />
        </button>
        <a href="#contact" class="btn-primary hidden !py-2 sm:inline-flex">Contact</a>
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface md:hidden"
          :aria-expanded="open"
          aria-label="Menu"
          @click="open = !open"
        >
          <Icon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </nav>

    <transition
      enter-from-class="opacity-0 -translate-y-2"
      enter-active-class="transition duration-200"
      leave-to-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150"
    >
      <ul v-if="open" class="mx-auto mb-3 grid max-w-page gap-1 rounded-2xl border border-line bg-surface p-2 md:hidden">
        <li v-for="l in [...links, { href: '#contact', label: 'Contact' }]" :key="l.href">
          <a :href="l.href" class="block rounded-xl px-4 py-2.5 font-medium hover:bg-paper" @click="open = false">{{ l.label }}</a>
        </li>
      </ul>
    </transition>
  </header>
</template>
