/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: 'oklch(0.3114 0.0055 301.21)',
        'navy-light': 'oklch(0.8 0.0053 106.5)',
        gold: 'oklch(0.6 0.1914 22.75)',
        secondary: 'oklch(0.9238 0.0053 106.5)',
        slate: 'oklch(0.6 0.05 240)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
