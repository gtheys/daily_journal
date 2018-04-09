// rollup.config.js

import babel from 'rollup-plugin-babel';

export default {
  input: 'front-end/js/main.js',
  output: {
    file: 'public/javascripts/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
};
