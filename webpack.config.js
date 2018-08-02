const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const production = process.env.NODE_ENV === 'production'
module.exports = {
  mode: production ? 'production' : 'dev',
  entry: production ? path.resolve(__dirname, 'src/index.js') : path.resolve(__dirname, 'examples/index.js'),
  output: production ? {
    filename: 'reactPicker.min.js',
    path: path.resolve(__dirname, 'lib')
  } : {
    filename: 'examples.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: production ? 'source-map' : 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'not ie < 9'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'images/[name].[hash:8]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: require.resolve('file-loader'),
        options: {
          name: 'fonts/[name].[hash:8]'
        }
      }
    ]
  },
  plugins: !production ? [new HtmlWebpackPlugin({
    template: 'examples/index.html'
  })] : []
}
