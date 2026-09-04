/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          100: '#F5ECE0',
          300: '#E2C9A5',
          400: '#D4B890',
          500: '#C5A880',
          600: '#B09167',
          700: '#9D8055',
        },
        serene: {
          dark: '#0B0C10',
          card: '#131419',
          surface: '#1A1C23',
          border: '#2A2C38',
        }
      },
      letterSpacing: {
        luxury: '0.25em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
