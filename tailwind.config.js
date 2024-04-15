/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#000',
      gray: {
        100: '#F7F8FA',
        200: '#D3D4D4',
      },
      blue: '#15346A',
      'light-blue': '#435b84',
      red: '#c64747',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
