const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './main.js',
    tic: './tic-tac-toe.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',
                {
                  pragma: 'createElement'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './tic.html'),
      filename: 'tic.html',
      chunks: ['tic']
    })
  ],
  devtool: 'source-map',
  optimization: {
    minimize: false
  }
};
