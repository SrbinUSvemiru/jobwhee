module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "860px",
        lg: "1440px",
      },
      colors: {
        primary: {
          100: "#7a1d1d",
          500: "#741b1b",
          900: "#5a0e0e",
        },
        secondary: "#7630a1",
      },
    },
  },
  variants: {},
  plugins: [],
};
