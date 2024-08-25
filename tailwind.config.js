/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html", "./assets/**/*.css", "./partials/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'rubrik': ['RubrikEdgeNew', 'sans-serif'],
      },
    },
  },
  plugins: [],
};