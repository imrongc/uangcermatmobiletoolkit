import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import {babel} from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';

const packageJson = require('./package.json');

const globals = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

export default [
  {
    input: 'src/index.ts',
    external: [
      'react',
      'react-native',
      'react-native-svg',
      'styled-compnents',
      Object.keys(globals),
      ...Object.keys(packageJson.dependencies).filter(dep =>
        dep.startsWith('react-native'),
      ),
    ],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'uangcermatmobiletoolkit',
      },
    ],
    plugins: [
      copy({
        targets: [
          {
            src: ['src/assets/icons/**/*', '!**/*.ts'],
            dest: 'dist/src/assets/icons/',
          },
          {
            src: ['src/assets/fonts/**/*'],
            dest: 'dist/src/assets/fonts/',
          },
        ],
      }),
      peerDepsExternal(),
      terser(),
      resolve({
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      typescript({tsconfig: './tsconfig.json'}),
      svgr(),
      url({
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.otf', '**/*.svg'],
        limit: Infinity
      }),
      json(),
    ],
  },
];
