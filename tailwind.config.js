/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eaf5f5",
          100: "#d1e9e9",
          200: "#a4d3d3",
          300: "#71b7b8",
          400: "#3f9698",
          500: "#227b7d",
          600: "#0f6265",
          700: "#0c4f52",
          800: "#0a4245",
          900: "#083739",
          950: "#031e1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-prompt)", "system-ui", "sans-serif"],
        display: ["var(--font-mitr)", "var(--font-prompt)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(16, 26, 77, 0.15)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
