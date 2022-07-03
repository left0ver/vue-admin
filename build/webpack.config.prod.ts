import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const prodConfig: webpack.Configuration = {
  mode: 'production',
  output: {
    publicPath: './',
    filename: '[name][contenthash:5].bundle.js',
    chunkFilename: '[contenthash:8].chunk.js',
  },
  module: {
    generator: {
      asset: {
        filename: 'images/[contenthash:8][ext]',
      },
      'asset/resource': {
        filename: 'assets/[contenthash:8][ext]',
      },
    },
  },
  plugins: [
    // 具体配置查看https://github.com/webpack-contrib/webpack-bundle-analyzer#size-definitions
    // 打包分析
    new BundleAnalyzerPlugin({
      analyzerPort: 8888,
      // 使用static，打包之后将会在dist文件夹中生成report.html
      analyzerMode: 'static',
    }),
    // 对css优化(
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    providedExports: true,
    sideEffects: true,
    usedExports: false,
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}

export default prodConfig
