/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./contact.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        customGreen: "#00672E",
        customYellow: "#FFE800",
        customRed: "#E31C24",
        customBlue: "#0F2CCE",
        customPink: "#FF93C8",
        customBlack: "#000000",
      },
      fontSize: {
        "12xl": "3rem",
      },
      width: {
        287.5: "1150px",
        '50%': '50%',
        '15%': '15%',
        '30%': '30%',
        '48%': '48%',
        '25%': '25%',
        '65%': '65%',
        '45%': '45%',
        '40%': '40%',
        '55%': '55%',
        '60%': '60%'

      },
      height: {
        '20rem': '20rem', // used
        '26rem': '26rem', // used
        '32rem': '32rem', // used
        '38rem': '38rem', // used
        '44rem': '44rem', // used
        '55rem': '55rem', // used
        '10%': '10%',
        '20%': '20%',
        '30%': '30%', // used
        '40%': '40%',
        '45%': '45%', // used
        '50%': '50%', // used
        '60%': '60%',
        '70%': '70%',
        '80%': '80%', // used
        '90%': '90%',
        '100%': '100%', //used
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/yellow-background-vector.svg')",
      },
      spacing: {
        '12w': "3rem",
        '20w': "5rem",
        '54w': "13.5rem",
        '4.8w': '1.2rem',
        '10%': '10%', // used
        '20%': '20%', // used
        '35%': '35%',
        '40%': '40%',
        '50%': '50%', // used
        '55%': '55%', // used
        '-50%': '-50%', // used
        
      }
    },
  },
  plugins: [],
};