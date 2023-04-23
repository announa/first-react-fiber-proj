import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const webpackConfig = (env: any): Configuration => ({
  entry: {
    main: './src/index.tsx'},
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: env.production ? 'static/[name].[contenthash:8].js' : 'static/[name].js',
  },
  optimization: {
    chunkIds: 'deterministic',
    emitOnErrors: true,
    mangleExports: true,
    mangleWasmImports: true,
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /dist|node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '/public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
    },
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      'process.env.VERSION': JSON.stringify(require('./package.json').version),
    }),
  ],
});

export default webpackConfig;
