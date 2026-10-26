import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' zorgt dat de build ook werkt op GitHub Pages (subpad) en lokaal.
export default defineConfig({
  base: './',
  plugins: [vue()],
})
