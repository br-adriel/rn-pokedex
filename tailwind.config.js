/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        action: '#173EA5',
      },
      fontFamily: {
        sans: ['Poppins_400Regular'],
        sans500: 'Poppins_500Medium',
        sans600: 'Poppins_600SemiBold',
      },
    },
  },
  plugins: [],
};
