/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDD0',
        brown: {
          500: '#8B5A2B',
          800: '#5C4033',
          900: '#3E2723'
        },
        gold: {
          400: '#F4C430',
          500: '#D4AF37',
          600: '#AA8825'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
