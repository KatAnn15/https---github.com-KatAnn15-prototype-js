const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pages = ["home-page", "movies-page"];

function setHTMLPlugins() {
  return pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: `./src/templates/template.${page}.html`,
        chunks: [page],
        filename: page + ".html",
        hash: true,
      })
  );
}

module.exports = {
  entry: {
    "home-page": "./src/scripts/MAIN/HomePage/HomePage.ts",
    "movies-page": "./src/scripts/MAIN/MoviesPage/MoviesPage.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html/i,
        use: "html-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts", ".d.ts", ".css", ".module.css", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    symlinks: false,
    alias: {
      "@actions": path.resolve(__dirname, "src/scripts/Actions"),
      "@fire": path.resolve(__dirname, "src/scripts/Firebase"),
      "@redux": path.resolve(__dirname, "src/scripts/Redux"),
      "@tmdb": path.resolve(__dirname, "src/scripts/TMDB"),
    },
  },
  plugins: setHTMLPlugins().concat([new CleanWebpackPlugin()]),
};
