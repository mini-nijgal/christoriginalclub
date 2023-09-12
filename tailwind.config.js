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
        white: { A700_5b: "#ffffff5b", A700_6d: "#ffffff6d", A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9" },
        gray: { 50: "#fffbfb", 900: "#173d00", "900_01": "#610d0d" },
        lime: { 900: "#615e09" },
        black: {
          900: "#08080a",
          "900_3f": "#0000003f",
          "900_01": "#000000",
          "900_af": "#000000af",
        },
        green: { A400: "#07fa68" },
        yellow: { A200: "#f7fc00" },
        teal: { 900: "#0d3552" },
      },
      fontFamily: { candara: "Candara", alteron: "ALTERON", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#07fa68,#f7fc00)",
        gradient1: "linear-gradient(180deg ,#f7fc00,#07fa68)",
        gradient2: "linear-gradient(137deg ,#ffffff6d,#ffffff6d)",
        gradient3: "linear-gradient(311deg ,#ffffff6d,#ffffff6d)",
      },
      boxShadow: {
        bs2: "-12px 17px  26px 11px #000000af",
        bs1: "29px 42px  24px -35px #000000",
        bs: "-12px 17px  26px 11px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
