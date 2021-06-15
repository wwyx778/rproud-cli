const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: isDev ? 'development' : 'production',
  entry: {
    component: { import: './src/index.tsx', filename: 'component/index.js' },
    main: './public/index.js',
  },
  plugins: [
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, isDev ? 'build/' : 'dist/'),
    clean: true,
  },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          // plugins: [require.resolve('react-refresh/babel')],
        },
      },
      {
        test: /\.(css|scss|less)$/i,
        // exclude: '/node_modules/',
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'source-map-loader',
      },
    ],
  },
  optimization: {
    // minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

isDev &&
  config.plugins.push(
    new HtmlWebpackPlugin({
      title: 'Lov for AntDesign',
      template: './public/index.html',
    }),
  );

module.exports = config;
