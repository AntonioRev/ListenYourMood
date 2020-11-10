module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-run');
    // Project configuration.
    grunt.initConfig({
        run: {
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
            }


          }
    });
  
  grunt.registerTask('default', [ 'run:install' ]);  
  grunt.registerTask('install', [ 'run:install' ]);  
  grunt.registerTask('test', [ 'run:test' ]);
  grunt.registerTask('coverage', [ 'run:coverage' ]);

};