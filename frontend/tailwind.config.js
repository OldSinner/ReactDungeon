/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tb: "url(./Assets/topbar-bg.png)",
        hba: "url(./Assets/Gui/health-active.jpg)",
        mba: "url(./Assets/Gui/mana-active.jpg)",
        hbu: "url(./Assets/Gui/health-used.jpg)",
        mbu: "url(./Assets/Gui/mana-used.jpg)",
      },
    },
  },
  plugins: [],
};
