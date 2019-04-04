const webpack = require('webpack');
const path = require('path');
const DIST_PATH = 'dist';

module.exports =
    // building of library indended to be used elsewhere...
        {
            mode: 'development',
            entry: {
                demo: './index.js'
            },
            output: {
                path: path.join(__dirname, DIST_PATH),
                filename: '[name].bundle.js',
                library: 'demoCore',
                libraryTarget: 'umd'
            },
            // comment externals and app will work
            externals: [
                'jquery',
                'jquery-ui',
                /jquery-ui\/*/,
                'angular',
                'angular-animate',
                'angular-dragdrop',
                'angular-ui-sortable'
            ],
            plugins: [
//            new webpack.ProvidePlugin({
//                $: 'jquery',
//                jQuery: 'jquery',
//                'window.jQuery': 'jquery'
//            })
            ],
            devtool: false
        };