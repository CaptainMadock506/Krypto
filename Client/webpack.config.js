const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");

module.exports ={
  entry : "./src/Index.js",

  output : {
    filename : "main.bundle.[hash].js",
    path : Path.resolve(__dirname, "dist"),
  },

  plugins :[
    new HtmlWebpackPlugin({
      template : "./src/Index.html",
    })
  ],

  resolve : {
    modules : [__dirname , "src" , "node_modules"],
    extensions : ["*", ".js", ".jsx" , ".tsx" , ".ts"],
  },

  module : {
    rules : [
      {
        test: /\.jsx?$/,
        exclude : /node_modules/,
        loader : require.resolve("babel-loader"),
      },

      {
        test : /\.css$/,
        use  : ["style-loader" , "css-loader"]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use : ["file-loader"]
      },

    ],
  },

};
