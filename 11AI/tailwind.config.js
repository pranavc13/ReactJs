/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Customize dark mode colors
        dark: {
          background: "#000000", // Pure black background
          text: "#FFFFFF", // Pure white text
        },
      },
      keyframes: {
        loader: {
          '0%': { backgroundPosition: '-800px 0' },
          '100%': { backgroundPosition: '800px 0' },
        },
      },
      animation: {
        loader: 'loader 2s linear infinite',
      },
    },
  },
  plugins: [],
};