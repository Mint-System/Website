/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html", "./assets/**/*.css", "./partials/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'rubrikBold': ['RubrikEdgeNew Bold', 'sans-serif'],
        'rubrikRegular': ['RubrikEdgeNew Regular', 'sans-serif'],
        'rubrikLight': ['RubrikEdgeNew Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
};