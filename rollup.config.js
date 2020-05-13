import path from 'path'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: path.join(__dirname, 'index.js'),
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      name: 'safelyIterate',
      file: 'dist/index.umd.js',
      format: 'iife',
      exports: 'named',
    },
  ],
}
