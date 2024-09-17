const withMT = require("@material-tailwind/html/utils/withMT");


/** @type {import('tailwindcss').Config} */
module.exports=withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {},
  },
  plugins: [],
})

