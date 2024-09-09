/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Tahoma", "ui-sans-serif", "sans-serif"],
      serif: ["Helvetica", "ui-serif", "serif"],
      mono: ["Courier New", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
