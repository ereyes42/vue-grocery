/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
      colors: {
        background:	'#2a372c',
        foreground:	'#66bf7b',
        comment:	'#aaaaaa',
        accent:	'#3bd8b4',
        white: '#FFFFFF',
        redish:	'#ff5370',
        orangis:	'#f78c6c',
        yellowih:	'#ffcb6b',
        greenish:	'#017d55',
        bluish:	'#4421b4',
        purplish:	'#e5cdf5',
    }
  },
  plugins: [],
}
