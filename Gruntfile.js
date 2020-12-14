module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-run');
    grunt.initConfig({
        run: {
            build: {

            },
            install: {
                cmd: 'npm',
                args: [
                  'install'
                ]  
            },
            test: {
              cmd: 'jest'
            },
            coverage: {
              cmd: 'jest',
              args: [
                  '--coverage',
                  '--coverageDirectory=\'docs/coverage\''
              ]
            },
            start: {
              cmd: 'node',
              args: [
                'api/lista.js'
              ]
            }


          }
    });
  
  grunt.registerTask('default',   [ 'run:install' ]);  
  grunt.registerTask('build',     [ 'run:build' ]);  
  grunt.registerTask('install',   [ 'run:install' ]);  
  grunt.registerTask('test',      [ 'run:test' ]);
  grunt.registerTask('coverage',  [ 'run:coverage' ]);
  grunt.registerTask('start',     [ 'run:start' ])

};