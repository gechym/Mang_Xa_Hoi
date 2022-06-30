const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
      colors: {
        primary: '#1b74e4',
        dark: '#18191a',
        light: '#f0f2f5',
        textPrimaryDark: '#E4E6EB',
        textSecondaryDark: '#b0b3b8',
        textPrimaryLight: '#050505',
        textSecondaryLight: '#65676B',
      },
    },
  },
  plugins: [],
});
