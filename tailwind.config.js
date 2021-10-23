module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: ['bg-green-400', 'bg-yellow-500', 'bg-gray-700'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      borderCollapse: ['hover', 'focus'],
    },
  },
  plugins: [],
};
