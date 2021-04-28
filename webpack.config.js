const path = require('path');
SRC_DIR = path.join(__dirname, 'clinet/src');
DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?/],
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript']
          }
        }
      }
    ]
  }
}