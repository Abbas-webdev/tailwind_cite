/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./haqqimizda.html", "./xidmetler.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

