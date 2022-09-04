/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'back-blue': '#0f172a',
        'box-blue': '#1e293b'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
