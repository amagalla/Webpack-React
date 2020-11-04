const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry:['./client/src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:["babel-loader"]
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", "css-loader"
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        publicPath: "/dist/",
        proxy: [
            {
              context: ["/api", "/login", "/image"],
              target: 'http://localhost:3000',
            },
          ],

    },
    plugins: [new webpack.HotModuleReplacementPlugin()],

}