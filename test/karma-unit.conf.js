var sharedConfig = require('./karma-shared.conf.js');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    'test/unit/**/*.spec.js'
  ]);

  config.set(conf);
  
  config.logLevel = config.LOG_INFO;
};