// Karma configuration
// Generated on Mon Mar 10 2014 15:49:48 GMT-0700 (PDT)

module.exports = function(config) {
  return {

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine', 'commonjs', 'mocha'],


    // list of files / patterns to load in the browser
    files: [
        'bower_components/angular/angular.js',
        'app/**/*.js',

        'node_modules/chai/chai.js',
        'test/lib/chai-should.js',
        'test/lib/chai-expect.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
      'app/**/*.js': ['commonjs'],
      'test/**/*.spec.js': ['commonjs']
    },

    commonjsPreprocessor: {
        modulesRoot: 'app'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  };
};
