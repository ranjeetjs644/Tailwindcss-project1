/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["popins"],
        inter: ["inter"],
      },
      colors: {
        black: "#263238",
        darkGray: "#4D4D4D",
        Grey: "#717171",
        L_Grey: "#89939E",
        Greyblue: "#ABBED1",
        Silver: "#F5F7FA",
        Primary: "#28CB8B",
        Secondary: "#263238",
        Info: "#2194f3",
        gray2: "#525a76",
        navColor: "5f6c7d",
        navBg: "f2f4f8",
      },
    },
  },
  plugins: [],
};
