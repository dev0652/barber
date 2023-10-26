import postcssNesting from 'postcss-nesting';

export const config = {
  parser: 'sugarss',
  map: false,
  plugins: {
    'postcss-plugin': {
      postcssNesting,
    },
  },
};
