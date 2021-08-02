const Webpack = require('./webpack');
const options = require('../webpack.config');

const webpack = new Webpack(options);

webpack.run();
