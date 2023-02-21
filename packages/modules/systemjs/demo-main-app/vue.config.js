module.exports = {
    lintOnSave: false,
    configureWebpack: config => {
        config.externals = [
            'systemjs',
            'vue',
            '@vue/composition-api',
            'vue-router',
            'react',
            'react-dom',
            '@baidu/afe-component-glue'
        ];
        config.module.rules.unshift({
            parser: {system: false}
        });
        config.output.libraryTarget = 'umd';
    },
    devServer: {
        port: 8788
    }
};
