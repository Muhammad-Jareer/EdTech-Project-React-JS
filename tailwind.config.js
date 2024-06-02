/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fun' :["Bubblegum Sans","sans-serif"]
      },
      colors: {
        'custom-bg': '#0f062e',
      },
      boxShadow: {
        '3xl': '8px 10px 6px black'
      }
    },
  },
  plugins: [],
}
