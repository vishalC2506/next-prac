/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(117.58deg,rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)",
          "liner-gradent":"linear-gradient(to bottom,transparent , rgba(28,24,224))",
      },
      boxShadow: {
        "box-shadow":
          "0px 10px 15px -3px rgba(182, 240, 156, 0.16), 0px 4px 6px -4px rgba(182, 240, 156, 0.16)",
      },
      colors: {
        "Nobel-black": "#131619",
        "nav-bg": "#0D0F10",
        "light-green": "#B6F09C",
        "nav-gen": "#686B6E",
        "search-button": "#E8E9E9",
        "header-h6": "#9B9C9E",
        "under-Line": "#B6F09C",
      },
    },
  },
  plugins: [],
};
