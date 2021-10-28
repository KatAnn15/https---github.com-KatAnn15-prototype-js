const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/home-page.html",
    },
    static: {
      publicPath: "/",
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.s?css$/,
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.s?css$/,
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
});
