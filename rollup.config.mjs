import buble from '@rollup/plugin-buble'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'auto' },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  plugins: [buble()],
  external: Object.keys(pkg.dependencies)
}
