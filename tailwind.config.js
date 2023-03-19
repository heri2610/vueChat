/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background
        "vuechat-bg-green": "#5DB075",
        "vuechat-bg-white-1": "#F6F6F6",
        "vuechat-bg-white-2": "#E8E8E8",
        // Text
        "vuechat-green": "#5DB075",
        "vuechat-white-1": "#F6F6F6",
        "vuechat-white-2": "#E8E8E8",
      }
    },
  },
  plugins: [],
}
