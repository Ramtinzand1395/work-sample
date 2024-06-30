/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      tanha: ["tanha"],
      vazir: ["vazir"],
    },
    extend: {
      padding: '2rem',
    },
  },
  plugins: [],
}

