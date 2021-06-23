const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/index.{js}', './pages/posts/first-post.{js}', './pages/posts/[id].js', './components/layout.{js}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
