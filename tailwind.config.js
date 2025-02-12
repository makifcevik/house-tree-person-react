/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode using class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
        background: {
          light: "#cccccc",
          dark: "#040F22",
        },
        middleground: {
          light: "#F0F0F0",
          dark: "#041131",
        },
        foreground: {
          light: "#FFFFFF",
          dark: "#031A3B",
        },
        paragraph: "#848484",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
