/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 90s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
          
      },
    },
    colors: {
      ...require('tailwindcss/colors'),
      success: 'rgb(33 , 150 , 83, 1)',
      secondary_blue: 'rgb(71 ,85 , 105 , 1)',
      primary_blue: 'rgb(14 37 87 / 1)',
    }
  },
  plugins: [],
}

