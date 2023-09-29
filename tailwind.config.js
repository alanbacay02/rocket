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
        default: '#FAF7E0',
        primary: '#112aea',
        primaryText: '#919eff',
        secondary: '#1D1B1D',
        accent: '#F41AF4',
        background: '#0E0F15'
      }
    },
  },
  plugins: [],
}