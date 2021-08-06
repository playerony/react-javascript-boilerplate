const path = require('path');
const webpackMerge = require('webpack-merge').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

function localIdentName({ mode }) {
  if (mode === 'production') return '[hash:base64]';

  return '[path][name]__[local]';
}

const getModeConfiguration = (env) => require(`./webpack/webpack.${env.mode}`)(env) || {};

const defaultEnvironmentVariables = { mode: 'production' };

module.exports = ({ mode = defaultEnvironmentVariables.mode } = defaultEnvironmentVariables) =>
  webpackMerge(
    {
      mode,
      entry: {
        app: [path.resolve('src/index.jsx')],
      },
      output: {
        publicPath: '/',
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
            exclude: /node_modules/,
            loader: 'babel-loader',
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
      ],
    },
    getModeConfiguration({ mode }),
  );
