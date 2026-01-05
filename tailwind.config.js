/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        panel: "#12182A",
        neon: "#1DE9B6",
        accent: "#7C4DFF",
        text: "#E6E8F0",
        muted: "#8B90A6",
      },
    },
  },
};
