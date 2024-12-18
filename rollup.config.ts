import type { RollupOptions } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const outputDir = 'dist';
const pkgName = 'createPuzzle';
const outputFilePrefix = `${outputDir}/${pkgName}`;
const commonConfig = {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
  ],
};

const config: RollupOptions[] = [
  {
    ...commonConfig,
    external: ['ut2', 'util-helpers'],
    output: [
      {
        format: 'cjs',
        file: `${outputFilePrefix}.cjs.js`,
        exports: 'named',
      },
      {
        format: 'es',
        file: `${outputFilePrefix}.esm.js`,
        exports: 'named',
      },
    ],
  },
  {
    ...commonConfig,
    output: [
      {
        format: 'umd',
        file: `${outputFilePrefix}.js`,
        exports: 'named',
        name: pkgName,
        sourcemap: true,
      },
      {
        format: 'umd',
        file: `${outputFilePrefix}.min.js`,
        exports: 'named',
        name: pkgName,
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
];

export default config;
