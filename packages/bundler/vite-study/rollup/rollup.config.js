/**
 * @type { import('rollup').RollupOptions }
 */
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const buildOptions = {
    input: [path.resolve(__dirname, './index.js')],
    output: [
        {dir: path.resolve(__dirname, './dist/es'), format: 'esm'},
        {dir: path.resolve(__dirname, './dist/cjs'), format: 'cjs'}
    ],
    plugins: [resolve(), commonjs()]
};

export default buildOptions;
