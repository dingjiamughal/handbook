const path = require('path');
const DemoWebpackPlugin = require('./demo-webpack-plugin');

module.exports = {
  mode: 'development',
  //   entry: {
  //     a: path.resolve(__dirname, 'a.js')
  //   },
  // entry: path.resolve(__dirname, 'a.js'),
  entry: './a.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    // loader路径查找顺序从左往右
    modules: ['node_modules', './']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'syncLoader',
            options: {
              message: '升值加薪',
              hope: '贷款贷多多'
            }
          }
        ]
      }
    ]
  },
  plugins: [new DemoWebpackPlugin()]
};
