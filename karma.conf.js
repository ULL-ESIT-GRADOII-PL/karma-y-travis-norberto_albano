// Karma configuration
// Generated on Thu Mar 31 2016 12:36:42 GMT+0100 (WEST)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'assets/js/main.js',
      'assets/js/medida.js',
      'assets/js/conversor.js',
      'conversor_test.js',
      'vendor/chai.js',
      'vendor/mocha.css',
      'vendor/mocha.js',
      'vendor/sinon-1.17.3.js',
      'vendor/blanket.min.js',
      'vendor/mocha-blanket.js',
      'vendor/sinon-1.7.1.js',
      'test/test_conversor.js',
      'test/test.html',
      'xregexp.js'

    ],

    client: {
          mocha: {
            ui: 'bdd'
          }
    },

    exclude: [
      'gulpfile.js'
    ],

    preprocessors: {
    },

    plugins : [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-html2js-preprocessor',
      'karma-phantomjs-launcher',
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome', 'Firefox', 'PhantomJS'],      // Firefox fue eliminado por errores de version

    captureTimeout: 60000,

    singleRun: false
  });
};
