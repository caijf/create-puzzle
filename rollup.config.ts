import type { RollupOptions } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export const outputDir = 'dist';
export const pkgName = 'createPuzzle';
export const outputFilePrefix = `${outputDir}/${pkgName}`;
export const commonConfig = {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
  ],
};

const config: RollupOptions = {
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
};

export default config;
