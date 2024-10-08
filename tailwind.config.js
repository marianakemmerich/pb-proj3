/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: '#B0B0B0',
        lightGray: '#9F9F9F',
        lighterGray: '#D9D9D9',
        darkGray: '#898989',
        graphite: '#333333',
        lighterGraphite: '#616161',
        lightGraphite: '#666666',
        darkGraphite: '#3A3A3A',
        ice: '#F4F5F7',
        cream: '#FAF3EA',
        lightYellow: '#FFF3E3',
        golden: '#B88E2F'
      }
    },
  },
  plugins: [],
}

