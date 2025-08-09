/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    safelist: [
    'hover:bg-gray-200 rounded',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

