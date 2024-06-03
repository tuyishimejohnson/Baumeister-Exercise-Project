/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
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
        backgroundWhitish:"#EFECEA" 
      },
      fontSize: {
        "12xl": "3rem",
      },
      width: {
        287.5: "1150px",
        "50%": "50%",
        "15%": "15%",
        "30%": "30%",
        "48%": "48%",
        "25%": "25%",
        "65%": "65%",
        "45%": "45%",
        "40%": "40%",
        "55%": "55%",
        "60%": "60%",
      },
      maxWidth: {
        1600: "1600px",
      },
      height: {
        "20rem": "20rem",
        "26rem": "26rem",
        "32rem": "32rem",
        "38rem": "38rem",
        "44rem": "44rem",
        "55rem": "55rem",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "100%": "100%",
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/images/yellow-background-vector.svg')",
      },
      spacing: {
        "12w": "3rem",
        "20w": "5rem",
        "54w": "13.5rem",
        "4.8w": "1.2rem",
        "10%": "10%",
        "20%": "20%",
        "35%": "35%",
        "40%": "40%",
        "50%": "50%",
        "55%": "55%",
        "-50%": "-50%",
        392: "86.4rem",
      },

      backgroundPosition: {
        "3/10": "30% 100%",
      },
      margin: {
        "12vh": "12vh",
      },  
      lineHeight: {
        'custom-60': '60.48px',
      },    
    },
  },
  plugins: [],
};
