/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f0f0f0",
        red: "#f73528",
      },
      fontFamily: {
        main: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
