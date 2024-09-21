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
        inputBorderColor: "rgba(128, 138, 147, 1)",
        hoverColor: "rgba(243, 243, 243, 1)",
        bgColor: "rgba(2, 21, 38, 0.5)",
        primary2: "rgba(128, 138, 147, 1)",
        borderColor: "rgba(219, 219, 219, 1)",
        borderColor2: "rgba(219, 219, 219, 1)",
        buttonColor: "rgba(103, 110, 118, 1)",
        fileColor: "rgba(45, 54, 72, 1)",
        overlayBg: "rgba(0,0,0,0.3)",
        hoverColor2: "rgba(223, 48, 20, 1)",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
