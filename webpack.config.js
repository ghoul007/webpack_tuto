const path = require("path");
const webpack = require("webpack");
const uglifyjs = require("uglifyjs-webpack-plugin");
const dev = process.env.NODE_ENV === "dev";

let config = {
  entry: "./assets/app.js",
  watch: dev,
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true
    // })
  ]
};

if (!dev) config.plugins.push(new uglifyjs({sourceMap : true}));

module.exports = config;
