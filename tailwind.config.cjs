/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      regular: '600',
      bold: '800',
    },
    extend: {    
      colors: {
      'primary-100': 'hsl(0, 0%, 98%)',
      'primary-200': 'hsl(0, 0%, 23%)',
      'primary-300': 'hsl(0, 0%, 52%)',
      'primary-400': 'hsl(200, 15%, 8%)',
      'dark-100': 'hsl(207, 26%, 17%)',
      'dark-400': 'hsl(0, 0%, 100%)',
      'dark-700': 'hsl(209, 23%, 22%)',
      'neutral-100': 'hsl(0, 0%, 100%)',
    },},
  },
  plugins: [],
  darkMode: "class"
}
