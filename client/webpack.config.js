const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log('WEBPACK ENV: ', env);

  // Variables
  const isProduction = env === 'production';
  const isDev = env === 'development';

  /* ========= Plugins ========= */

  // Cleans 'dist' folder everytime before a new build
  const CleanPlugin = new CleanWebpackPlugin({
    root: __dirname,
    verbose: true,
    dry: false,
  });

  const AnalyzerPlugin = new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
  });

  const HTMLPlugin = new HtmlWebpackPlugin({
    template: 'template.html',
    chunksSortMode: 'none',
  });

  // Building Webpack
  const config = {};

  config.entry = ['babel-polyfill', './src/index.js'];

  config.output = {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  };

  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\]node_modules[\\]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
          ecma: 8,
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  };

  config.plugins = [CleanPlugin, AnalyzerPlugin, HTMLPlugin];

  config.module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|cot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  };

  config.resolve = {
    extensions: ['.js'],
  };

  if (isProduction) {
    config.output = {
      path: path.join(__dirname, 'dist'),
      publicPath: path.join(__dirname, 'dist', '/'),
      chunkFilename: '[name].[chunkhash].bundle.js',
      filename: '[name].[chunkhash].bundle.js',
    };

    config.mode = 'production';
    config.devtool = 'source-map';
  }

  if (isDev) {
    config.output = {
      path: path.join(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
      filename: '[name].bundle.js',
    };

    config.mode = 'development';
    config.devtool = 'inline-source-map';
    config.devServer = {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      open: true,
    };
  }

  return config;
};
