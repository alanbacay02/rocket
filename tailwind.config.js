/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '412px',
      // => @media (min-width: 412px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // default: '#FFFFFF',
        // primary: '#1D2A8C',
        // secondary: '#2B2B31',
        // accent: '#FDE217',
        default: '#FBFBFE',
        primary: '#2434b1',
        primaryText: '#4365fe',
        secondary: '#1D1B1D',
        accent: '#ee3795',
        background: '#0E0F15'
      }
    },
  },
  plugins: [],
}