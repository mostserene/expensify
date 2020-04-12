// entry -> output
//console.log(__dirname);
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSExtract = new MiniCssExtractPlugin({filename:'styles.css'});

console.log("here1");

module.exports = (env) => {

const isProduction = env === 'production';
//console.log("here in webpack");
  return {
    entry: "./src/app.js",
    
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {   test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        //  test: /\.js$/,
        //  exclude: /node_modules/

        }
      },
    //   {
    //    use: ["style-loader",
    //    "css-loader","sass-loader"],
    //    test: /\.s?css$/,

//      }, 
{
  test: /\.s?css$/,
  use: 
  [
    
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // you can specify a publicPath here
        // by default it uses publicPath in webpackOptions.output
        publicPath: (resourcePath, context) => {
          return path.relative(path.dirname(resourcePath), context) + '/';
        },
      //  hmr: process.env.NODE_ENV === 'development',
      },
    },
    {
      loader:'css-loader',
      options: {
        sourceMap:true
      }
    },
    {
     loader: 'sass-loader',
     options:{
       sourceMap:true
     }
    }
    
    
  ],
}
   
    ]
  },

  plugins: [CSSExtract],
  devtool:  isProduction ? 'source-map':'inline-source-map',
  devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback:true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
  }
};
};
// loader
