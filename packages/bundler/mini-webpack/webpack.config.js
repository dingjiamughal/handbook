const path = require('path');

module.exports = {
  mode: 'development',
  //   entry: {
  //     a: path.resolve(__dirname, 'a.js')
  //   },
  entry: path.resolve(__dirname, 'a.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
};
