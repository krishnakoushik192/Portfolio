/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Nova palette: warm off white, near black, one tan accent.
      colors: {
        ink: {
          DEFAULT: '#161616',
          soft: '#454543',
          muted: '#6B6965',
        },
        surface: {
          DEFAULT: '#FFFDF9',
          sunken: '#F6F2EC',
          line: '#E6E2DB',
          deep: '#161616',
        },
        accent: {
          DEFAULT: '#B98B6E', // tan, for large text and shapes
          ink: '#8F664D', // darker tan, readable at small sizes
          soft: '#F1E6DD',
        },
      },
      letterSpacing: {
        display: '-0.065em',
        heading: '-0.035em',
      },
      boxShadow: {
        pill: '0 20px 25px -5px rgb(22 22 22 / 0.2), 0 8px 10px -6px rgb(22 22 22 / 0.2)',
      },
      transitionTimingFunction: {
        base: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spinslow: {
          to: { transform: 'rotate(360deg)' },
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        spinslow: 'spinslow 30s linear infinite',
        caret: 'caret 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
