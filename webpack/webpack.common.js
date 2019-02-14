const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  resolve: {
    modules: ['./src', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: true,
      filename: 'index.html',
      title: '',
      template: './src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
    sideEffects: false,
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'imgs/',
              name: '[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              outputPath: 'fonts/',
              name: '[hash].[ext]',
              publicPath: '../fonts/'
            },
          },
        ],
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/, // foo.svg?inline
            use: 'svg-inline-loader',
          },
          {
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'svgs/',
                  name: '[hash].[ext]',
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
