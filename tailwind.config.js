/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "40px",
          xl: "104px",
        },
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1440px",
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
      boxShadow: {
        "header-gray": "0px -1px 0px 0px #D1D2D6 inset",
        submit: "0 5px 15px 0 #0E1A3933",
      },
      backgroundImage: {
        'loader-gradient': 'conic-gradient(#D1D2D600, #1A1B22)',
      },
      colors: {
        text: {
          DEFAULT: "#1A1B22",
          contrast: "#FFFFFF",
          muted: "#B6BCBF",
        },
        border: {
          DEFAULT: "#1A1B22",
          dimmed: "#D1D2D6",
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
          "secondary-hover": "#E8E8E8",
        },
      },
    },
  },
  plugins: [],
};
