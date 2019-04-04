const webpack = require('webpack');
const path = require('path');
const DIST_PATH = 'dist';

module.exports =
    // building of elsewhere application
        {
            mode: 'development',
            entry: {
                full: './index.full.js'
            },
            output: {
                path: path.join(__dirname, DIST_PATH),
                filename: '[name].bundle.js'
            },
            devtool: false
        };