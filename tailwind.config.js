/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        lightGray: '#9F9F9F',
        lighterGray: '#D9D9D9'
      }
    },
  },
  plugins: [],
}

