'use strict';

var sharedConfig = require('./karma-shared.conf.js');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = [
    'test/e2e/*.spec.js',
    'test/e2e/**/*.spec.js',
    {pattern: 'public/assets/_/css/*.css', included: false},
    {pattern: 'public/assets/_/js/*.js', included: false}
  ];

  conf.proxies = {
    '/': 'http://localhost:3333/'
  };

  conf.plugins = [
    'karma-commonjs',
    'karma-mocha',
    'karma-ng-scenario',
    'karma-chrome-launcher'
  ]

  conf.preprocessors = {
    'test/e2e/*.spec.js': ['commonjs'],
    'test/e2e/**/*.spec.js': ['commonjs']
  },

  conf.commonjsPreprocessor = {},

  conf.urlRoot = '/__karma__/';

  conf.frameworks = [
    'commonjs',
    'mocha',
    'ng-scenario'
  ];

  config.set(conf);
};