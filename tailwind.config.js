module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: require("daisyui/colors"),
    },
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: true,
  },
};
