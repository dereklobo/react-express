/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:["Lato", "sans-serif"],
        opensans:["Open Sans", "sans-serif"],
      },
      colors:{
        // primary: "#8C3ADD",
        primary: "#243c5a",
        'gray-500' : '#1A1A1A'
      }
    },
  },
  plugins: [],
}

