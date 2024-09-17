/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1260px',
    },
    colors: {
      'blue': '#0B4159',
      'green': '#8DD0A4',
      'back-white': '#F6F9FB',
      'white': '#ffffff',
      'sand': '#F2EFE6',
      'sand-grey': '#757676'
    },
    fontFamily: {
      header: ["Outfit", ...defaultTheme.fontFamily.sans],
      body: ["Inter", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero1': "url('../images/hero 1.png')",
        'hero2': "url('../images/hero 2.png')",
        'hero3': "url('../images/hero 3.png')",
        'hero4': "url('../images/hero 4.png')"
      }
    }
  },
  plugins: [],
}
