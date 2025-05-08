/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fbf9f7',
        highlight: '#e1ebf8',
        indigo: {
          DEFAULT: '#1400a0',
          light: '#e1ebf8',
          dark: '#0d0066',
        },
        purple: {
          DEFAULT: '#1400a0',
          100: '#e1ebf8',
          200: '#c3d7f1',
          300: '#a5c3ea',
          400: '#87afe3',
          500: '#699bdc',
          600: '#4b87d5',
          700: '#2d73ce',
          800: '#1400a0',
          900: '#0d0066',
          950: '#080033'
        }
      }
    },
  },
  plugins: [],
};