import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

const config = {
  entry: 'src/over.js',
  plugins: [
    resolve(),
    babel(),
  ],
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'Over'
    }, {
      dest: pkg.module,
      format: 'es'
    }
  ]
};

export default config;