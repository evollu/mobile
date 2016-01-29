require('es6-shim/es6-shim.min')
require('reflect-metadata')
require('web-animations.min')
require('lodash')
require('zone.js/dist/zone-microtask')

var testsContext = require.context("./app", true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);