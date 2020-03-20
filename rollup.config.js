import bundleSize from 'rollup-plugin-bundle-size';
import typescript from 'rollup-plugin-typescript2';
import peerDeps from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const plugins = [
  typescript({
    tsconfigOverride: {
      exclude: ['__tests__/**/*'],
    },
  }),
  peerDeps(),
  bundleSize(),
];

const { name, source: input, main, browser, module: mjs } = pkg;

export default [
  {
    input,
    plugins,
    output: [
      {
        file: main,
        format: 'cjs',
      },
      {
        name,
        file: browser,
        format: 'umd',
      },
      {
        format: 'esm',
        file: mjs,
      },
    ],
  },
];
