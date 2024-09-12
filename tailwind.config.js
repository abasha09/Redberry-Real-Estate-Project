/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary1: "rgba(249, 59, 29, 1)",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
