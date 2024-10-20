/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          "100": "#EFAE02",
          "200": "#FEB901",
          "300": "#D29A04",
          "400": "#A77A03"
        }
      }
    },
  },
  plugins: [],
}

