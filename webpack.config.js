const path = require('path');

const BROWSER_DIR = path.join(process.cwd(), 'src');
const TEST_DIR = path.join(process.cwd(), 'test');

module.exports = {
  context: process.cwd(),
  debug: true,
  devtool: 'inline-source-map',
  entry: {},
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: BROWSER_DIR,
      loader: 'babel'
    }, {
      test: /\.jsx?$/,
      include: TEST_DIR,
      loader: 'babel'
    }]
  },
  output: {},
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
