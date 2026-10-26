/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: token('paper'),
        surface: token('surface'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        accent: token('accent'),
        'accent-ink': token('accent-ink'),
        signal: token('signal'),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        develop: {
          '0%': { opacity: '0', filter: 'grayscale(1) contrast(1.4) brightness(1.6) blur(6px)' },
          '60%': { opacity: '1', filter: 'grayscale(0.6) contrast(1.15) brightness(1.15) blur(1px)' },
          '100%': { opacity: '1', filter: 'none' },
        },
        blink: { '50%': { opacity: '0' } },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        develop: 'develop 1.6s cubic-bezier(0.3, 0.6, 0.2, 1) both',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
