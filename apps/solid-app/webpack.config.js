const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const deps = require('./package.json').dependencies;
module.exports = {
  output: {
    publicPath: 'http://localhost:8081/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
    liveReload: true,
    static: {
      directory: path.join(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      // For newer versions of Webpack it should be
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'app_1',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './App': './src/App.jsx',
      },
      shared: {
        ...deps,
        'solid-js': {
          singleton: true,
          requiredVersion: deps['solid-js'],
        },
      },
    }),
    new HtmlWebPackPlugin({ template: 'src/index.html' }),
  ],
};
