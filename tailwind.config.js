/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./node_modules/daisyui/dist/*/.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
