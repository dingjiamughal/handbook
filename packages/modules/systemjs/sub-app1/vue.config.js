const {name} = require('./package.json');

// module.exports = {
//     chainWebpack: config => {
//         config.resolve.symlinks(false);
//         // config.module.rule('systemjs').parser({system: false}).before('babel').end();
//     },
//     configureWebpack: config => {
//         config.externals = ['vue', 'vue-router'];
//         config.output.libraryTarget = 'umd';
//         config.output.jsonpFunction = `webpackJsonp${name}`;
//         config.output.filename = '[name].js';

//         config.module.rules.unshift({
//             parser: {system: false}
//         });
//         // output: {
//         //     library: `${name}-[name]`,
//         //     libraryTarget: 'umd',
//         //     filename: '[name].js',
//         //     jsonpFunction: `webpackJsonp${name}`
//         // },
//         // externals: ['vue']
//     },
//     devServer: {
//         port: 8789,
//         headers: {
//             'Access-Control-Allow-Origin': '*'
//         }
//     }
// };

module.exports = {
    // parallel: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.optimization.splitChunks(false);

        config.module.rule('systemjs').parser({system: false}).before('babel').end();
    },
    configureWebpack: config => {
        config.externals = [
            '@baidu/ergo-ui-vue2',
            'import-map-overrides',
            'systemjs',
            'vue',
            '@vue/composition-api',
            'vue-router',
            'react',
            'react-dom'
        ];
        // config.module.rules.unshift({
        //     parser: {system: false}
        // });

        config.output.libraryTarget = 'umd';
        config.output.filename = '[name].js';
        config.output.jsonpFunction = `webpackJsonp${name}`;
    },
    devServer: {
        port: 8789,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
};
