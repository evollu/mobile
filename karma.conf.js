var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            './test.bundle.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            './test.bundle.js': ['webpack', 'sourcemap'],
        },
        reporters: ['progress', 'coverage'],
        webpack: require('./webpack.config.js'),
        webpackMiddleware: {
            noInfo: true
        }
    });
};