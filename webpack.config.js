const webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.js',
            applicationStyles: 'app/styles/app.scss'
        },
        extentions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015"]
                },
                test: /\.js?$/,
                exclude: /(node_modules | bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map'
};
