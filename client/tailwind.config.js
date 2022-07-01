const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
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

        // dark: '#111827',
        // darkSecondary: '#1F2937',
        // darkIcon: '#9CA3AF',
        // darkBtn: '#262d38',
        // darkHoverIcon: '#374151',
        // darkHoverBtn: '#0a6b6c',
        // textPrimaryDark: '#E5E7EB',
        // textSecondaryDark: '#9CA3AF',

        // light: '#f0f2f5',
        // lightSecondary: '#ffffff',
        // lightIcon: '#050505',
        // lightBtn: '#e4e6eb',
        // lightHoverIcon: '#d8dadf',
        // lightHoverBtn: '#95969a',
        // textPrimaryLight: '#050505',
        // textSecondaryLight: '#65676B',
      },
    },
  },
  plugins: [],
});
