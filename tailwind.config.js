/** @type {import('tailwindcss').Config} */ 

const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#40444b',
          500: '#36393f',
          400: '#4F545C66',
          300: '#4F545C99',
          200: '#4F545C7A',
          100: '#4F545C'
        },
      },
    },
  },
  plugins: [],
}