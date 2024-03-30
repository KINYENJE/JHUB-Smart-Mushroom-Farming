/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      ...require('tailwindcss/colors'),
      success: 'rgb(33 , 150 , 83, 1)',
      secondary_blue: 'rgb(71 ,85 , 105 , 1)',
    }
  },
  plugins: [],
}

