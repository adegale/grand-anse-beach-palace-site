/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your Custom Brand Palette
        'blaze-orange': '#F56416',    // Primary CTA
        'laser-blue': '#2B59C3',      // Secondary Action/Links
        'golden-pollen': '#FFD166',   // Accent/Testimonials
        'bright-fern': '#29BF12',     // Limited Accent/Perks
        'ghost-white': '#FBFBFF',     // Light Background
        'dark-text': '#333333',       // Standard Dark Text
      },
    },
  },
  plugins: [],
}