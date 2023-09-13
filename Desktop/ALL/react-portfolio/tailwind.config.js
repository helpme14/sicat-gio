/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  
  theme: {
    extend: {
      fontFamily:{
        kanit:['Kanit'],
        kanitLight:['Kanit-100'],
      },
    },
    screens: {
      'xs': { 'max': '639px' }, // Custom breakpoint for screens between 300px and 600px
      'sm': '640px', // Small screens and up
      'md': '768px', // Medium screens and up
      'lg': '1024px', // Large screens and up
      // ...
    },
  },
  plugins: [],
});

