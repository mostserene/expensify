

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//console.log("here1");

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({
      filename: isProduction ? '[name][hash].css' : '[name].css',
          chunkFilename: isProduction ? '[id][hash].css' : '[id].css'
        });
  //console.log("here in webpack");
  

  return {
    entry: "./src/app.js",

    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
          },
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
               isProduction ? 'style-loader' : MiniCssExtractPlugin.loader, 

              'css-loader', 
     
              'sass-loader'
            ]
           
          
        },

        
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: '/dist/',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  };
};
// loader
