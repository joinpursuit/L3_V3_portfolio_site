/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'white': '#FFFFFF',
        'light-blue': '#407BA7',
        'jet': '#3c3744ff',
        'duke-blue': '#090c9bff',
        'byz-blue': '#3d52d5ff',
        'powder-blue': '#b4c5e4ff'
      },
      boxShadow: {
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.8)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.9), 0 10px 10px -5px rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        "noto-sans": ['"Noto Sans Symbols"', "sans-serif"],
        "orbitron": ['"Orbitron"', 'sans-serif'],
        "bebas-neue": ['"Bebas Neue"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
