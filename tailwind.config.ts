import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fffdf8",
          100: "#fbf5e8",
          200: "#efe0c7"
        },
        charcoal: {
          800: "#262320",
          900: "#171513"
        },
        wood: {
          500: "#9b6438",
          600: "#7a4a28",
          700: "#57331f"
        },
        noble: {
          orange: "#ef5f3d",
          "orange-dark": "#d84b2d",
          ink: "#251f1b",
          mist: "#f7f4ef"
        },
        brass: {
          400: "#c99a4e",
          500: "#a87934"
        }
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      opacity: {
        4: "0.04",
        6: "0.06",
        7: "0.07",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        15: "0.15",
        16: "0.16",
        18: "0.18",
        22: "0.22",
        35: "0.35",
        45: "0.45",
        52: "0.52",
        55: "0.55",
        56: "0.56",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        68: "0.68",
        72: "0.72",
        78: "0.78",
        82: "0.82",
        94: "0.94",
        96: "0.96",
        98: "0.98"
      },
      boxShadow: {
        soft: "0 20px 80px rgba(38, 35, 32, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
