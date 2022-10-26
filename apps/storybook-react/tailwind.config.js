const { aphroditePlugin } = require('@aphrodite-ui/core');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@aphrodite-ui/react/src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [aphroditePlugin]
};
