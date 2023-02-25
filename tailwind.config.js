const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'ft-primary': ['Righteous', 'sans-serif'],
      'ft-secondary': ["Merriweather Sans", 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#0d1245',
        secondary: '#a4ef7d',
        'secondary-hv': '#a0e071',
        third: '#c471f5',
        'font-primary': 'rgb(196,113,245)',
      },
      boxShadow: {
        'bs-primary': '0px 3px 4px -2px #c471f5'
      }
    },
  },
  plugins: [],
});

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
