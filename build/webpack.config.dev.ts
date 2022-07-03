import webpack from 'webpack'
import path from 'path'
import 'webpack-dev-server'

const devConfig: webpack.Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    generator: {
      asset: {
        filename: 'images/[name][ext]',
      },
      'asset/resource': {
        filename: 'assets/[name][ext]',
      },
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../', 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    host: 'localhost',
    open: true,
    // 设置代理
    // proxy: {
    //   '/api': 'http://localhost:3000',
    // },
  },
  devtool: 'eval-cheap-source-map',
  optimization: {
    minimize: false,
  },
}
export default devConfig
