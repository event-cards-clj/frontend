var sharedConfig = require('./karma-shared.conf.js');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    'test/mocha-conf.js',

    'node_modules/chai/chai.js',
    'test/lib/chai-should.js',
    'test/lib/chai-expect.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/ngMidwayTester/src/ngMidwayTester.js',

    'test/midway/**/*.spec.js'
  ]);
  
  conf.frameworks = conf.frameworks.concat([
    'mocha'
  ]);

  conf.proxies= {
    '/' : 'http://localhost:9999/'
  }

  conf.plugins = [
    'karma-mocha',
    'karma-jasmine',
    'karma-commonjs',
    'karma-chrome-launcher'
  ];

  config.set(conf);
};