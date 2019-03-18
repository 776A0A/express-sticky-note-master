var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src/js/app/index.js"),
    output: {
        path: path.join(__dirname, "./public"),
        filename: "js/index.js"
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]  // 从后往前执行，less将less文件转换为字符串，css将其转换为css，style将其放入页面style标签中
        }]
    },
    resolve: {
        alias: {
            // jquery: path.join(__dirname, "src/js/lib/jquery-3.3.1.min.js"),
            mod: path.join(__dirname, "src/js/mod"),
            less: path.join(__dirname, "src/less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        // new ExtractTextPlugin("css/index.css"),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [
        //             autoprefixer(),
        //         ]
        //     }
        // })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
    ]
};