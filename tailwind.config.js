module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: null,
            img: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '50%',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            h1: { color: theme('colors.gray.200') },
            h2: { color: theme('colors.gray.200') },
            h3: { color: theme('colors.gray.200') },
            h4: { color: theme('colors.gray.200') },
            h5: { color: theme('colors.gray.200') },
            h6: { color: theme('colors.gray.200') },
            a: {
              color: theme('colors.gray.200'),
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            strong: {
              color: theme('colors.gray.400'),
              fontWeight: '900',
            },
            pre: {
              backgroundColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      opacity: ({ after }) => after(['disabled']),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
