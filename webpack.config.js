const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: () => './app/renderer/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProduction ? 'app/[name].[hash].js' : 'app/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: [ '/node_modules/' ],
                use: [ 'babel-loader' ]
            },
            {
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'app/'),
            '@components': path.join(__dirname, 'app/renderer/components/'),
            '@store': path.join(__dirname, 'app/renderer/store/')
        },
        extensions: [ '.js', '.json', '.vue' ]
    },
    optimization: {
        minimize: true
    },
    devtool: isProduction ? 'none' : 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        open: true,
        writeToDisk: true
    }
}