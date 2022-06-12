const defaultTheme = require("tailwindcss/defaultTheme");
const {
  colors,
  reversedColors,
} = require("./custom-plugins/tailwind-plugins/TailwindInvertColors");

const themes = [
  {
    name: "base",
    selectors: [":root"],
    theme: {
      colors: {
        ...colors,
        base: colors.gray,
        primary: colors.indigo,
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
      },
    },
  },
  {
    selectors: [".dark"],
    theme: {
      colors: {
        base: reversedColors.slate,
        primary: reversedColors.indigo,
      },
    },
  },
  {
    selectors: [".square"],
    theme: {
      borderRadius: {
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
    },
  },
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        sans: [
          // "Inter Var",
          "Josefin Sans",
          ...defaultTheme.fontFamily.sans,
        ],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-theme-swapper")({ themes: themes })],
};
