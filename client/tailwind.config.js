module.exports = {
  purge: { content: ['./**/*.js'] },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      inset: {
        '-1/2': '-50%',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'even'],
  },
  plugins: [],
};
