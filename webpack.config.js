var path = require('path');
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
 
module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/main'
  ],
  output: {
    path: './www',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './www',
    port: 8080,
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!postcss!stylus'
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, 'src'),
        loader: ExtractTextWebpackPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: 'raw'
      },
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['', '.js', '.jsx', '.json', '.css', '.html', '.styl'],
    unsafeCache: true,
  },
  postcss: function() {
    return [precss, autoprefixer];
  },
  plugins: [
    new ExtractTextWebpackPlugin('[name].css'),
  ],
};