/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // default: '#FFFFFF',
        // primary: '#1D2A8C',
        // secondary: '#2B2B31',
        // accent: '#FDE217',
        default: '#FBFBFE',
        primary: '#2434b1',
        primaryText: '#919eff',
        secondary: '#1D1B1D',
        accent: '#ee3795',
        background: '#0E0F15'
      }
    },
  },
  plugins: [],
}