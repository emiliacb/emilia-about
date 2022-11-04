/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      circle: "circle",
      square: "square",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
