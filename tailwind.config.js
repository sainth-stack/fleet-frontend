/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom scrollbar color
      colors: {
        "scrollbar-thumb": "#888", // Custom thumb color
        "scrollbar-track": "#f1f1f1", // Custom track color
      },
    },
  }
};
