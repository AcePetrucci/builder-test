/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#222436',
          700: '#1e2030',
          900: '#191a2a',
          950: '#131421',
        },
        secondary: {
          400: '#4fd6be',
        },
        font: {
          200: '#444a73',
          700: '#bcc4d6',
        },
      },
    },
  },
  plugins: [],
};
