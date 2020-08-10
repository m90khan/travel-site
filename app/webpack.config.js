const path = require("path"); // * to generate absolute path to the current flder

const postCSSPlugins = [require("autoprefixer")];

module.exports = {
  entry: "./assets/scripts/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/"),
  },
  mode: "development",
  watch: true,

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Step3: Creates `style` nodes from JS strings
          "style-loader",
          // Ste2: Translates CSS into CommonJS
          "css-loader",
          // Step: 1Compiles Sass to CSS
          "sass-loader",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } },
        ],
      },
    ],
  },
};
