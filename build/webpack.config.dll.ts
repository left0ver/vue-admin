import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import webpack from 'webpack'
import path from 'path'

const dllPath = 'public/dll'
const dllConfig: webpack.Configuration = {
  mode: 'production',
  entry: {
    vue: ['vue', 'vue-router', 'pinia'],
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../', dllPath),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../', dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
    }),
  ],
}

export default dllConfig
