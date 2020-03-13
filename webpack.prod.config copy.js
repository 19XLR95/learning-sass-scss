const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/"
    },
    mode: "production",
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        historyApiFallback: true,
        port: 1995
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "src/index.html"),
                filename: "index.html"
            }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: "bundle.css"
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};
