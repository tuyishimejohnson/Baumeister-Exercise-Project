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
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/yellow-background-vector.svg')",
      },
      spacing: {
        12: "3rem",
        20: "20rem",
        54: "54rem"
      }
    },
  },
  plugins: [],
};