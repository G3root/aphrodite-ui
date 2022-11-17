const { aphroditePlugin } = require('@aphrodite-ui/core');
const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@aphrodite-ui/react/src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: [aphroditePlugin()]
};
