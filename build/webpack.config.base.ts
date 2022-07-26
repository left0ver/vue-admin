import webpack, { ProgressPlugin } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import ElementPlus from 'unplugin-element-plus/webpack'
import Dotenv from 'dotenv-webpack'

// 网站title
const websiteTitle = 'vue-admin'
const baseConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src', 'main.ts'),
  // target: 'browserslist',
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    // 创建按需加载的异步 chunk
    asyncChunks: true,
    // 告知 webpack 在写入到输出文件系统时检查输出的文件是否已经存在并且拥有相同内容。
    compareBeforeEmit: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        oneOf: [
          {
            test: /\.(j|t)sx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            // 下面是使用ts-loader对ts或者tsx进行转换，我们这里使用babel-loader进行统一转换
            // loader: 'ts-loader',
            // options: {
            //   //   transpileOnly: true,
            //   appendTsSuffixTo: [/\.vue$/],
            // },
          },
          {
            test: /\.less$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                },
              },
              'postcss-loader',
              'less-loader',
            ],
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  symbolId: 'icon-[name]',
                },
              },
              'svgo-loader',
            ],
            include: path.resolve(__dirname, '../src/icons/svg'),
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 25 * 1024, // 25kb
              },
            },
            // 排除掉icons目录下的图标，后面单独使用svg-sprite-loader进行处理
            exclude: path.resolve(__dirname, '../src/icons/svg'),
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
    ],
  },
  resolve: {
    // 设置别名
    alias: {
      '@': [path.resolve(__dirname, '../src')],
    },
    extensions: ['.vue', '.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist', 'index.html'),
      // 网站title
      title: websiteTitle,
      // 你可以将minify 设置为true，将会压缩打包之后的html文件
      minify: true,
      inject: 'body',
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),
    ElementPlus(),
    new VueLoaderPlugin(),
    // 显示打包进度
    new ProgressPlugin(),
    // 通用的环境变量，在.env文件中配置,使用process.env.your_env_variable来访问
    new Dotenv(),
  ],
}

export default baseConfig
