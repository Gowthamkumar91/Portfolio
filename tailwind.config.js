/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        primary: "#5B21B6",
        secondary: "#111827",
      },
    },
    fontFamily: {
      herofont: "Outfit",
    },
  },
  plugins: [],
};
