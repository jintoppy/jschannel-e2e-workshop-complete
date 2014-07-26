var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  // Test framework to use. This may be jasmine, cucumber, or mocha.
  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function(){
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'test/e2e/screenshots'
    }));
  }

};
