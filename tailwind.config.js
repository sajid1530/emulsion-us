/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          draw: {
            '0%': { strokeDashoffset: 'var(--path-length)' },
            '100%': { strokeDashoffset: '0' },
          },
        },
        animation: {
          'scroll': 'scroll 15s linear infinite',
          'draw': 'draw 3s ease-in-out forwards',
        },
      },
    },
    plugins: [],
  };
  