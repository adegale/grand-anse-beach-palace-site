/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        'palace-navy':  '#1C1C55',
        'palace-gold':  '#FFCD72',
        'palace-white': '#FFFFFF',
        // Legacy tokens kept for transition
        'blaze-orange':  '#F56416',
        'laser-blue':    '#2B59C3',
        'golden-pollen': '#FFD166',
        'bright-fern':   '#29BF12',
        'ghost-white':   '#FBFBFF',
        'dark-text':     '#333333',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
