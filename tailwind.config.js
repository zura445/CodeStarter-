/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleDark: "#9D71FD",
        ink: "#5F517D",
        lightGray: "#F2EFFE",
      },
    },
  },
  plugins: [],
};
