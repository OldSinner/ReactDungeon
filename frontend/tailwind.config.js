/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tb: "url(./Assets/topbar-bg.png)",
      },
    },
  },
  plugins: [],
};
