/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}