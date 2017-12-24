const path = require("path");
const webpack = require("webpack");
const uglifyjs = require("uglifyjs-webpack-plugin");
const dev = process.env.NODE_ENV === "dev";

let config = {
  entry: "./assets/app.js",
  watch: true,
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
      },
      {
        test: /\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test: /\.scss$/,
        use:["style-loader","css-loader","sass-loader"]
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
