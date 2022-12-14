/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#006AFF",
        secondary: "#FF2727",
        black: "#1A1919",
        green: "#52C93F",
        gray: {
          "01": "#525256",
          "02": "#656575",
          "03": "#A3A3A3",
          "04": "#F8F7F1",
        },
      },
    },
  },
  plugins: [],
};
