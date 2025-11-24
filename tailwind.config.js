/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#f6f4f7ff",
        lightText: "#c4cfde",
        boxBgg: "linear-gradient(145deg, #70747bff, #7a8b9cff)",
        primary850: "#0B0F55 ",
        secondary: "#EE8108",
        hakDark: "#292B4D",
        hakBlue: "#0512AD",
        hakPar: "#B6B6B6",
        hakGreen: "#50B848",
        hakWhite: "#FFFFFF",
        hakGray: "#D9CDCD",
        hakBg: "#F3F3F3",
      },
      boxShadow: {
        shadowOne: "1px 1px 1px #0512AD, -1px -1px 30px #3b3d6aff",
      },
    },
  },
  plugins: [],
};
