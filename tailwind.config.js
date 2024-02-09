module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9f9f9",
          200: "#efefef",
          300: "#e0e0e0",
          400: "#b2b2b2",
          700: "#686868",
          "50_01": "#f8f8f8",
          "400_01": "#b3b3b3",
          "700_87": "#68686887",
        },
        deep_orange: { 50: "#ffefe7" },
        blue_gray: {
          50: "#f1f1f1",
          900: "#161e54",
          "900_02": "#2f2f2f",
          "900_01": "#1b204a",
        },
        red: { 50: "#fdebf9", A200: "#ff5151" },
        white: { A700_a2: "#ffffffa2", A700_90: "#ffffff90", A700: "#ffffff" },
        blue: { 50: "#e8f0fb", A200: "#3785f1" },
        pink: { A100: "#ee61cf" },
        indigo: { 900: "#0a337a" },
      },
      fontFamily: { roboto: "Roboto", poppins: "Poppins", rubik: "Rubik" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
