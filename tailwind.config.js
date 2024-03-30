/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00875F",
        secondary: "#E5F3EF",
        background: "#F7FBFA",
        lightGreen: "#F0FAF8",
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
