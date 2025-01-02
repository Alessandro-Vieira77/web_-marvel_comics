/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1d1d2a",
        hoverMenu: "#4a82f6",
      },
    },
  },
  plugins: [],
};
