var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/calculator.js",
  output: {
    path: path.resolve("build"),
    filename: "calculator.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
