const ScriptTimestampWebpackPlugin = require('script-timestamp-webpack-plugin');

module.exports = {
    // parallel: false,
    lintOnSave: false,
    // chainWebpack: config => {},
    configureWebpack: config => {
        config.externals = [
            '@baidu/ergo-ui-vue2',
            'import-map-overrides',
            'systemjs',
            'vue',
            '@vue/composition-api',
            'vue-router'
        ];
        config.module.rules.unshift({
            parser: {system: false}
        });
        config.output.libraryTarget = 'umd';

        // const plugins = [new ScriptTimestampWebpackPlugin()];
        // config.plugins.push(...plugins);
    },

    devServer: {
        port: 8788
    }
};
