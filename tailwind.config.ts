import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          50: "#f0faf6",
          100: "#d9f2e8",
          200: "#b3e5d1",
          300: "#7dd3b4",
          400: "#4aba93",
          500: "#2a9d78",
          600: "#1e7d60",
          700: "#1a6350",
          800: "#174f40",
          900: "#0d3b2e",
          950: "#062119",
        },
        charcoal: {
          50: "#f6f7f7",
          100: "#e1e4e3",
          200: "#c3c8c7",
          300: "#9da5a3",
          400: "#78827f",
          500: "#5d6866",
          600: "#4a5351",
          700: "#3d4443",
          800: "#333938",
          900: "#2c3130",
          950: "#1a1f1e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
