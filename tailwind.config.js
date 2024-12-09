/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "40px",
          lg: "104px",
        },
      },
      screens: {
        md: "768px",
        lg: "1440px",
      },
      animation: {
        spin: "spin 0.75s linear infinite",
      },
      keyframes: {
        spin: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
      },
      colors: {
        text: {
          DEFAULT: "#1A1B22",
          contrast: "#FFFFFF",
          muted: "#B6BCBF",
        },
        background: {
          DEFAULT: "#F5F6F7",
          dark: "#1A1B22",
          light: "#FFFFFF",
        },
        button: {
          DEFAULT: "#2F71E5",
          hover: "#347EFF",
          disabled: "#E6E8EB",
        },
      },
    },
  },
  plugins: [],
};
