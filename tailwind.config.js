/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      maxWidth:{
        'base':'1140px'
      },
      colors:{
        'dodger':'#DE2E54',
        'aqua':'#OEB4C1'
      }

    },
  },
  plugins: [],
}
