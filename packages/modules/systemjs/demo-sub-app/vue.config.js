const {name} = require('./package.json');

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.optimization.splitChunks(false);

        config.module.rule('systemjs').parser({system: false}).before('babel').end();
    },
    configureWebpack: config => {
        config.externals = ['systemjs', 'vue', '@vue/composition-api'];

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
