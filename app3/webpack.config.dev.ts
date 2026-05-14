import path from 'path';
import { DefinePlugin, Configuration as WebpackConfiguration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import merge from 'webpack-merge';
import commonConfig from './webpack.config.common';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

const corejs = 'core-js';
const corejsReg = new RegExp(`[\\\\/]node_modules[\\\\/]${corejs}[\\\\/]`, 'i');

const SEPERATE_FOLDERS = true;


interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path][name].[hash:5][ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path][name].[hash:5][ext]'
        }
      },
      {
        test: /\.module\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                localIdentName: 'app3-[path][name]__[local]___[hash:5]',
                exportLocalsConvention: 'camelCase'
              }
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.css$/
      }
    ]
  },
  optimization: {},

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: `${SEPERATE_FOLDERS ? 'css/' : ''}[name].[contenthash].css`
    }),
    new DefinePlugin({
      __DEV__: JSON.stringify(false),
      __PROD__: JSON.stringify(true),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString())
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3003,
    open: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};

export default merge<Partial<Configuration>>(commonConfig, config);
