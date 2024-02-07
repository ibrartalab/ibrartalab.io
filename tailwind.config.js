/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '900': '900px',
        '800': '800px',
        '700': '700px',
        '600': '600px',
        '500': '500px',
      },
      height: {
        '900': '900px',
        '800': '800px',
        '700': '700px',
        '600': '600px',
        '500': '500px',
      },
      margin: {
        'l': '15.5%'
      }
    },

  },
  plugins: [],
}

