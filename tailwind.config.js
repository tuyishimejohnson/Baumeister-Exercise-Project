/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],        
      },
      colors: {
         green: "#00672E",
         yellow: "#FFE800",
         red: "#E31C24",
         blue: "#0F2CCE",
         pink: "#FF93C8",
         black: "#000000",


      }
    },
  },
  plugins: [],
}

