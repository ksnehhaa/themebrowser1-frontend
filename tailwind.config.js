/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Enables dark mode via `class` strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        sparkle: "sparkle 2s ease-in-out infinite",
      },
      keyframes: {
        sparkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        },
      },
      colors: {
        darkblue: "#0f172a", // tailwind slate-900 equivalent
        lightgray: "#f1f5f9", // tailwind slate-100 equivalent
      },
    },
  },
  plugins: [],
};