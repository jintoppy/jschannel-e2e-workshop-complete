module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js',
                'test/**/*.js',
                '!test/unit/angular-mocks.js',
                '!test/karma.conf.js',
                '!test/protractor-conf.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        karma: {
            unit: {
                configFile: 'tests/unit/karma.conf.js'
            }
        },
        watch: {
            karma: {
                files: [''],
                tasks: ['karma:unit:run']
            }
        },
        protractor: {
          options: {
            keepAlive: true,
            configFile: "test/protractor-conf.js"
          },
          singlerun: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-protractor-runner');
   
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('unit', ['karma:unit']);

    grunt.registerTask('e2e', ['jshint', 'protractor:singlerun']);

};
