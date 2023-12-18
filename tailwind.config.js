/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#475BE8",
        "text-primary-light": "#11142D",
        "text-primary-dark": "#EFEFEF",
        "text-secondary-light": "#808191",
        "text-secondary-dark": "#6F767E",
        black: "#1A1D1F",
        white: "#FCFCFC",
        "black-secondary": "#6F767E",
        "bg-light": "#F4F4F4",
        warning: "#FD8539",
        success: "#2ED480",
        secondary: "#CFC8FF",
        danger: "#F45252",
      },
    },
  },
  plugins: [],
};
