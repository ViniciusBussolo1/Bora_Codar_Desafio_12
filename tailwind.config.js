/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        black: {
          800: '#121214',
        },
        purple: {
          300: '#CAB3FF',
          700: '#7C3AED',
        },
        gray: {
          400: '#C7C7CD',
          500: '#A8A8B3',
        },
      },
    },
  },
  plugins: [],
}
