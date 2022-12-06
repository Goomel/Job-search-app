/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-bg": "url('./src/assets/images/backgroundImg.png')",
      },
      width: {
        90: "90px",
      },
      height: {
        90: "90px",
      },
      colors: {
        "main-blue": "#334680",
      },
    },
  },
  plugins: [],
};
