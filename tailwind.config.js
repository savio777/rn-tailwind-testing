/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/screens/*.tsx", "./src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: "#121214",
        primary: { main: "#C4C4CC", dark: "#121214" },
        gray: { 200: "#C4C4CC", 900: "#121214" },
        green: { 500: "#015F43" },
      },
    },
  },
  plugins: [],
};
