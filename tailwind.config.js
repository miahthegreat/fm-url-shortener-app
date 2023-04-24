/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/assets/illustration-working.svg')",
      },
      colors: {
        primary: {
          950: "#232127",
          850: "#34313D",
          750: "#3A3054",
          650: "#4B3F6B",
        },
        neutral: {
          75: "#BFBFBF",
          150: "#EFF1F7",
          250: "#2BD0D0",
          275: "#9AE3E3",
          350: "#9E9AA8",
        },
      },
      fontFamily: {
        cabin: ["'Cabin'", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("prettier-plugin-tailwindcss"),
  ],
  darkMode: "class",
};
