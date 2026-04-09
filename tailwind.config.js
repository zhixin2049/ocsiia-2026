/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a0533',
        secondary: '#db3b34',
        'header-top': '#1a0533',
        'header-mid': '#2d1b69',
        'header-bottom': '#1e3a8a',
      },
    },
  },
  plugins: [],
}
