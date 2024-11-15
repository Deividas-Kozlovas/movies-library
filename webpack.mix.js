let mix = require("laravel-mix");
const Dotenv = require("dotenv-webpack");

mix.webpackConfig({
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify"),
      crypto: require.resolve("crypto-browserify"),
      vm: require.resolve("vm-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [new Dotenv()],
});

mix
  .js("src/app.js", "public/js")
  .sass("src/scss/style.scss", "css")
  .setPublicPath("public");
