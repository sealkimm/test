const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module : {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Injects styles into DOM
          'css-loader',   // 2. Turns css into commonjs
          'sass-loader',  // 1. Compiles Sass to CSS
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/main.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'brands.html',
      template: './src/pages/brands.html',
      chunks: ['brands'],
    }),
    new HtmlWebpackPlugin({
      filename: 'franchise.html',
      template: './src/pages/franchise.html',
      chunks: ['franchise'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/pages/contact.html',
      chunks: ['contact'],
    }),
  ],
};