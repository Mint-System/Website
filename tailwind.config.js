/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html", "./assets/**/*.css", "./partials/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1140px',
          'xl': '1140px',
        },
      },
      fontFamily: {
        'rubrikBold': ['RubrikEdgeNew Bold', 'sans-serif'],
        'rubrikRegular': ['RubrikEdgeNew Regular', 'sans-serif'],
        'rubrikLight': ['RubrikEdgeNew Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
};