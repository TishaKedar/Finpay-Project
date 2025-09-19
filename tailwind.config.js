/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        finpayPrimary: "#2A8E9E",   // Main teal/blue
        finpayLight: "#E9F3F4",     // Light background
        finpayDark: "#180D39",      // Dark text or accents
        finpayBlack: "#1D1E20",     // Another dark variant
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

