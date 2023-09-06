const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./model2/main.js",
    // opt: "./model2/opt.js",
  },
  devtool: "source-map",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./build/"),
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "model2"),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 1024000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "ignore-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!images", "!images/**/*"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./model2/images",
          to: "./images/[path][name].webp",
          toType: "template",
          globOptions: {
            copyUnmodified: true,
            force: false,
            ignore: ["/**/*.svg"],
          },
        },
        {
          from: "./model2/images",
          to: "./images",
          globOptions: {
            copyUnmodified: true,
            force: false,
          },
        },
      ],
    }),
    // new ImageminWebpWebpackPlugin({
    //   config: [
    //     {
    //       test: /\.(jpe?g|png)/,
    //       options: {
    //         quality: 100,
    //       },
    //     },
    //   ],
    //   overrideExtension: true,
    //   detailedLogs: false,
    //   silent: false,
    //   strict: true,
    // }),
  ],
};
