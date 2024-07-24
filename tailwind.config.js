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
        lighterGray: '#D9D9D9',
        darkGray: '#898989',
        graphite: '#333333',
        cream: '#FAF3EA',
        lightYellow: '#FFF3E3',
        golden: '#B88E2F'
      }
    },
  },
  plugins: [],
}

