const path = require("path");


module.exports = {
    entry : "./src/index.js",
    output: {
        path : path.join(__dirname, "build"),
        filename : "bundle.js",
    },
    mode : "development",
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/,
            use: [
              'file-loader'],
          }
        ],
      },
}