const {build} = require('esbuild');

build({
    entryPoints: ['./index.jsx'],
    outdir: 'dist',
    format: 'esm',
    sourcemap: true,
    metafile: true,
    external: ['react', 'react-dom'],
    bundle: true
}).then(res => console.log(res));
