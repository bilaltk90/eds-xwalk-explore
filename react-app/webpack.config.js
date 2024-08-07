// const {Compilation} = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyfiles = require('copyfiles');
const path = require('path');
const multipleHtmlPlugins = require('./htmlWebpackPlugins');

// Plugin to copy  dist files to EDS location
class CopyFiles {
  apply(compiler) {
    // Copy files only in production mode when running `npm run build`
    if (compiler.options.mode !== 'production') {
      return null;
    }
    compiler.hooks.done.tap('Copy', () => {
      // console.log('compilation ===>');
      // copy component files
      copyfiles(
        ['./dist/**/*', '../blocks'],
        {
          all: true,
          up: 1,
          exclude: ['./dist/vendor/**/*', './dist/**/*.html', './dist/styles/**/*'],
          verbose: true,
        },
        err => err && console.error(err)
      );
      // copy vendor file
      copyfiles(
        ['./dist/vendor/vendor.js', '../scripts'],
        {
          up: 2,
        },
        err => err && console.error(err)
      );
      copyfiles(
        ['./dist/styles/styles.css', '../styles'],
        {
          up: 2,
        },
        err => err && console.error(err)
      );
    });
  }
}

// Here goes all configuration
module.exports = {
  mode: 'development',
  // entry: './src/app/product-list/index.jsx',
  entry: {
    styles: './src/app/styles/index.js',
    forms: './src/app/forms/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // apply to all JS/JSX files
        exclude: /node_modules/, // exclude all files on node_modules
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
    }),
    ...multipleHtmlPlugins,
    // new HtmlWebpackPlugin({
    //   template: 'static/index.html', // create a template to start from
    // }),
    new CopyFiles(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              calc: true,
              // convertValues: true,
              discardComments: {
                removeAll: true,
              },
              discardDuplicates: true,
              discardEmpty: true,
              mergeRules: true,
              normalizeCharset: true,
              // reduceInitial: true, // This is since IE11 does not support the value Initial
              svgo: true,
            },
          ],
        },
      }),
    ],
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        // commons: {
        //   chunks: 'initial',
        //   minChunks: 2,
        //   maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //   minSize: 0, // This is example is too small to create commons chunks
        // },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    host: 'localhost', // where to run
    historyApiFallback: true,
    port: 4200, // given port to exec. app
    open: true, // open new tab
    // hot: true, // Enable webpack's Hot Module Replacement
    watchFiles: ['src/**/*'],
  },
};