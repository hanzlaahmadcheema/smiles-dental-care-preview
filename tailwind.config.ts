import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef5f0",
          100: "#d8e8dd",
          200: "#b3d1bf",
          300: "#84b294",
          400: "#579274",
          500: "#3a7a5c",
          600: "#2a6148",
          700: "#1e4a37",
          800: "#14382a",
          900: "#0d2a20",
        },
        coral: {
          DEFAULT: "#e05d44",
          dark: "#c74a33",
          light: "#fbe9e4",
        },
        ivory: "#faf6f0",
        sand: "#f3ede3",
        amberstar: "#e8a33d",
        ink: "#1c2420",
        muted: "#5b6b62",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
