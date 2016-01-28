var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            './testIndex.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            './testIndex.js': ['webpack', 'sourcemap'],
        },
        reporters: ['progress', 'coverage'],
        webpack: require('./webpack.config.js'),
        webpackMiddleware: {
            noInfo: true
        }
    });
};