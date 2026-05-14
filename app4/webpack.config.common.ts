import { Configuration, ProvidePlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import ConfigWebpackPlugin from './scripts/ConfigWebpackPlugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced';
import { dependencies } from './package.json';

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    publicPath: 'auto',
    uniqueName: 'app4'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new ProvidePlugin({
      React: 'react'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
    new DotenvWebpackPlugin({
      defaults: true,
      allowEmptyValues: true,
      safe: true
    }),
    new ConfigWebpackPlugin({
      input: './src/config.ts',
      outputFileName: 'config.js'
    }),
    new ModuleFederationPlugin({
      name: 'app4',
      filename: 'remoteEntry.js',
      exposes: {
        './Content': './src/App',
      },
      shared: {
        ...dependencies,
        react: {
          shareKey: 'react-19',
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          shareKey: 'react-dom-19',
          requiredVersion: dependencies['react-dom'],
        },
      },
    })
  ]
};

export default config;