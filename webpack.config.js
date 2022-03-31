const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: {
    // popup: ['@babel/polyfill', './src/popup.js'],
    popup: ['./src/popup.js'],
    background: ['./src/background.js'],
    content: ['./src/content.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // Вместо CleanWebpackPlugin
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    port: 4200
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/manifest.json'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "__VUE_OPTIONS_API__": true,
      "__VUE_PROD_DEVTOOLS__": false,
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      // {
      //   test: /\.js$/,
      //   exclude: '/node_modules/',
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: [
      //           '@babel/preset-env'
      //         ],
      //         plugins: [
      //           '@babel/plugin/proposal-class-properties'
      //         ]
      //       }
      //     }
      //   ]
      // }
    ]
  },
  devtool: 'cheap-module-source-map',
}