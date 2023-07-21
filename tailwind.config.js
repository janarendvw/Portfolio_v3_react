/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const accentColor = 'hsl(120, 100%, 50%)'
const secondaryColor = 'hsl(110, 60%, 60%)'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archia-regular': ['archiaregular', 'sans-serif', defaultTheme.fontFamily.sans],
        'silka-regular': ['silkaregular', 'sans-serif', defaultTheme.fontFamily.sans],
        'Garamond': ['Cormorant Garamond', 'serif'],
      },
      backgroundSize: {
        '400': '400%',
      },
      backgroundImage: {
        'space': 'url("/space.png")',
        'radial-gradient': `radial-gradient(129.5% 107.13% at 50% 0%,transparent 30%, ${secondaryColor} 77.41%,${accentColor} 100%);`,
      },
      colors: {
        primary: '#242424',
        secondary: secondaryColor,
        accent: accentColor,
        contrast: '#FF3368',
        background: '#121212',
        accentText: '#FFFFFF',
        text: '#FFFFFF',
      },
      // colors: {
      //   primary: '#1E1E1E',
      //   secondary: secondaryColor,
      //   accent: accentColor,
      //   accentText: '#FFFFFF',
      //   background: '#FFF',
      //   text: '#121212',
      // },
    },
  },
  plugins: [],
}

