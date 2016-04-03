module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
            // Override defaults here 
            },
            dev: {
            options: {
                script: 'app.js'
            }
            },
            prod: {
            options: {
                script: 'app.js',
                node_env: 'production'
            }
            },
            test: {
            options: {
                script: 'app.js'
            }
            }
        },
        watch: {
            express: {
                files:  [ '**/*.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded 
                }
            },
            options: {
                livereload: true
            }           
        }               
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    
    grunt.registerTask('serve', [ 'express:dev', 'watch' ]);
}