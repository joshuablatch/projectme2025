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
      },
      boxShadow: {
        'elevation-1': '0 4px 6px -1px rgba(20, 0, 160, 0.05), 0 2px 4px -1px rgba(20, 0, 160, 0.03)',
        'elevation-2': '0 10px 15px -3px rgba(20, 0, 160, 0.08), 0 4px 6px -2px rgba(20, 0, 160, 0.05)',
        'elevation-3': '0 20px 25px -5px rgba(20, 0, 160, 0.1), 0 10px 10px -5px rgba(20, 0, 160, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float-delay 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};