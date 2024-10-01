/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(2.5)",
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          }
        },
        slideTop: {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        slideBottom: {
          '0%': {
            transform: 'translateY(100px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
      },
      animation: {
        heartbeat: "heartbeat 3s linear infinite",
        slideLeft: "slideLeft 1s linear",
        slideBottom: "slideBottom 1s linear",
        slideTop: "slideTop 1s linear"
      },
      colors: {
        primary: "#475BE8",
        secondary: "#DADEFA",
        "primary-light": "#11142D",
        "primary-dark": "#EFEFEF",
        "secondary-light": "#808191",
        "secondary-dark": "#6F767E",
        black: "#1A1D1F",
        white: "#FCFCFC",
        "bg-light": "#F4F4F4",
        "bg-dark": "#111315",
        warning: "#FD8539",
        success: "#2ED480",
        secondary: "#CFC8FF",
        danger: "#F45252",
        "border-dark": "#272B30",
        "border-light": "#E4E4E4",
      },
    },
  },
  plugins: [],
};

