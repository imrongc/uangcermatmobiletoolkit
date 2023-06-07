import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    external: [
      ...Object.keys(packageJson.dependencies).filter(dep =>
        dep.startsWith('react-native'),
      ),
    ],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      postcss(),
      terser(),
      svgr(),
      url({
        include: ['**/*.otf', '**/*.svg'],
        limit: Infinity,
        emitFiles: true,
      }),
      json(),
    ],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    plugins: [dts.default()],
  },
];
