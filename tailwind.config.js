module.exports = {
  purge: ['./pages/index.js', './pages/posts/[id].js', './pages/posts/first-post.js',
          './componets/layout.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
