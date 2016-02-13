var webpack = require('webpack');
var path = require('path');

module.exports = {

// Set 'context' for Rails Asset Pipeline
//   context: __local_dir + '//assets/javascripts',

    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8090/',
            'webpack/hot/only-dev-server',
            './js/sort123.js'
        ]
    },

    output: {
        filename: '[name]_bundle.js', // Will output App_wp_bundle.js
        publicPath: 'http://localhost:8090/' // Required for webpack-dev-server
    },

// Require the webpack and react-hot-loader plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': "\'development\'"}),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['js','node_modules']
    },


    module: {
// Load the react-hot-loader
        loaders: [
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