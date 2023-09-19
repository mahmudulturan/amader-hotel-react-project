/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        'primaryColor': '#2B2D42',
        'basicColor': '#EDF2F4',
        'grayColor': '#8D99AE',
        'redColor': '#EF233C',
        'ultraRedColor': '#D90429',
      },
    extend: {},
  },
  plugins: [require("daisyui")],
}

