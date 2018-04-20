// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

export default {
  input: 'front-end/js/main.js',
  output: {
    file: 'public/javascripts/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
      resolve(),
      commonJS({
        include: 'node_modules/**',
      }),
    ],
  },
};
