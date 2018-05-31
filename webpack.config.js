// entry -> output
const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: {
      rewrites: [
        { from: /.*bundle.js/, to: '/bundle.js' },
        { from: /.*favicon.png/, to: '/images/favicon.png' }
      ]
    }
  }
}