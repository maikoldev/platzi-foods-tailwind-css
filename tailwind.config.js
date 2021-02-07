module.exports = {
  purge: {
    enabled: true,
    content: ["public/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#f3c614",
          800: "#eabd0c",
          700: "#dab00b",
        },
        secondary: "#353535",
      },
      height: {
        80: "20rem",
        100: "25rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover", "focus", "disabled"],
      ringWidth: ["active", "focus"],
      textColor: ["disabled"],
    },
  },
  plugins: [],
};
