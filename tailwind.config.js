/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2e424d",
        "paynes-gray": "#45626f",
        "af-blue": "#5b8291",
        moonstone: "#6b98a3",
        "moonstone-light": "#7aaeb5",
        "tiffany-blue": "#98dad9",
        "non-photo-blue": "#addfde",
        "mint-green": "#c1e3e3",
        "anti-flash-white": "#eaebed",
        "dark-blue": "#1b2430",
        "light-slate": "#78a6c8",
        "off-white": "#e9eef2",
        "sailing-red": "#e65c4f",
        "outline-gray": "#2e3c4c",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
