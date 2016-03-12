var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: ['babel-polyfill','./js/sort123.js'],
    output: {
        filename: 'app_bundle.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['js', 'node_modules']
    },


    module: {
// Load the react-hot-loader
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                // Query parameters are passed to node-sass
                loader: "style!css!sass?outputStyle=expanded&" +
                "includePaths[]=" +
                (path.resolve(__dirname, "./scss")) + '&' +
                "includePaths[]=" +
                (path.resolve(__dirname, './node_modules'))

            }
        ]
    }
};
