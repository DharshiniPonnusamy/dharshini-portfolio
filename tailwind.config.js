/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8faf8',
          100: '#e8ede8',
          200: '#d1dcd1',
          300: '#b3c2b3',
          400: '#95a695',
          500: '#788c78',
          600: '#5f705f',
          700: '#4c594c',
          800: '#3d463d',
          900: '#313831',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};