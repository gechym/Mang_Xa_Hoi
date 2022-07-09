const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: '320px',
      tablet: '756px',
      laptop: '1229px',
      desktop: '1280px',
    },

    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      animation: {
        bgGradient: 'gradient 0.1s ease infinite',
      },

      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(250px, 1fr))',
      },

      gridAutoRows: {
        auto: 'minmax(300px, 300px)',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
      colors: {
        primary: '#1b74e4',

        dark: '#18191a',
        darkSecondary: '#242526',
        darkIcon: '#e4e6eb',
        darkBtn: '#3a3b3c',
        darkHoverIcon: '#4e4f50',
        darkHoverBtn: '#282929',
        textPrimaryDark: '#E4E6EB',
        textSecondaryDark: '#b0b3b8',

        light: '#f0f2f5',
        lightSecondary: '#ffffff',
        lightIcon: '#050505',
        lightBtn: '#e4e6eb',
        lightHoverIcon: '#d8dadf',
        lightHoverBtn: '#95969a',
        textPrimaryLight: '#050505',
        textSecondaryLight: '#65676B',
      },
    },
  },
  plugins: [],
});
