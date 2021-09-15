const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        DEFAULT: 'var(--primary)'
      },
      secondary: {
        DEFAULT: 'var(--secondary)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
