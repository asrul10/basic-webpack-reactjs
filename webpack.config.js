const path = require('path');
const HtmlWebPack = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebPack(
            { template: path.join(__dirname, '/src/index.html') }
        )
    ]
}