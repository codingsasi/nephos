const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/nephos.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      // Extracts the compiled CSS from the SASS files defined in the entry
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                importer: globImporter()
              }
            }
          }
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: "url-loader?limit=100000"
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss', '.css', '.json']
  },
  plugins: [
    // Where the compiled SASS is saved to
    new MiniCssExtractPlugin({
      filename: 'nephos.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from:'images', to:'images'}
      ]
    })
  ],
  devServer: {
    host: '0.0.0.0',
  },
  devtool: 'source-map',
  mode: 'development',
};
