const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const postcssScss = require('postcss-scss');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: ['./src/@inc'], // 템플릿 파일의 경로 설정
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Injects styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Compiles Sass to CSS
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/main.html', // main index
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/brands.html',
      filename: 'brands.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/franchise.html',
      filename: 'franchise.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact.html',
      filename: 'contact.html',
    }),
    new StylelintPlugin({
      files: './src/scss/**/*.scss',
      fix: true, // 자동 수정 기능을 활성화
      customSyntax: postcssScss,
    }),
  ],
};
