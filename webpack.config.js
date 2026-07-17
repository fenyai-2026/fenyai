const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (env, argv) => {
  const isDev = argv.mode !== 'production';

  const plugins = [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'public', to: '.' }
      ]
    })
  ];

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      chunkFilename: 'bundle.js',
      publicPath: '/'
    },
    // 禁用代码分割：所有模块打进主 bundle.js
    // 避免 SSG 部署后 chunk 文件被服务器 fallback 到 index.html 导致 "Unexpected token '<'"
    optimization: {
      splitChunks: false,
      runtimeChunk: false
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react', { runtime: 'automatic', development: isDev }],
                '@babel/preset-env',
                '@babel/preset-typescript'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
      port: 3015,
      allowedHosts: 'all',
      historyApiFallback: {
        index: '/index.html',
        rewrites: [{ from: /^\/_p\/\d+\//, to: '/index.html' }]
      }
    },
    plugins
  };
};
