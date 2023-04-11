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
        'charcoal' : '#2e424d',
        'paynes-gray' : '#45626f',
        'af-blue' : '#5b8291',
        'moonstone' : '#6b98a3',
        'moonstone-light' : '#7aaeb5',
        'tiffany-blue' : '#98dad9',
        'non-photo-blue' : '#addfde',
        'mint-green' : '#c1e3e3',
        'anti-flash-white' : '#eaebed',
      }
    },
  },
  plugins: [],
}

