
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin'); ''

module.exports = (env) => {
  const isProductrion = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
            // use: [
            //   'css-loader',
            //   'sass-loader'
            // ]
          })
          // use: [
          //   'style-loader',
          //   'css-loader',
          //   'sass-loader'
          // ]
        }
      ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProductrion ? 'source-map' : 'inline-source-map',
    // devtool: isProductrion ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
