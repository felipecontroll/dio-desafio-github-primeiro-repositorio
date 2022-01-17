const {resolve} = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',  
  mode: 'production',
    entry: './src/index.js',
   
    output: {
        path: resolve(__dirname,'dist'),
        filename: 'bundle.js',
      
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader:"babel-loader"
          }
        }
      ]
    },
    resolve: { 
      extensions:['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin ({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
}