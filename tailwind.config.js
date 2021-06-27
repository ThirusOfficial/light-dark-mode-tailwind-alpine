const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan': colors.cyan
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
