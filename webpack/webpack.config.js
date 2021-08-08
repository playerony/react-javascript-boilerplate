const path = require('path');
const webpackMerge = require('webpack-merge').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function localIdentName({ mode }) {
  if (mode === 'production') return '[hash:base64]';

  return '[path][name]__[local]';
}

const getModeConfiguration = (env) => require(`./webpack.${env.mode}`)(env) || {};

const defaultEnvironmentVariables = { mode: 'production' };

module.exports = ({ mode = defaultEnvironmentVariables.mode } = defaultEnvironmentVariables) =>
  webpackMerge(
    {
      mode,
      entry: {
        app: [path.resolve('src/index.jsx')],
      },
      output: {
        filename: '[name].[fullhash].js',
        chunkFilename: '[name].[contenthash].js',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: {
                    localIdentName: localIdentName({ mode }),
                  },
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'public/*.{txt,css,ico,png,json}',
            },
            {
              from: 'public/assets/**/*',
            },
          ],
        }),
      ],
    },
    getModeConfiguration({ mode }),
  );
