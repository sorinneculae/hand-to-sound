const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    module: './src/a-module.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    // daca vrem sa recream folderul dist la fiecare change
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // new HtmlWebpackPlugin({
    //   title: 'Development',
    // }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // daca vrem sa incarcam fontul local
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      // },
    ],
  },
};
