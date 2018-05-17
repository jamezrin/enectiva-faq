var grunt = require('grunt');
grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {
    grunt.initConfig({
        shell: {
            options: {
                stdout: true
            },
            server: {
                command: 'hugo server'
            },
            build: {
                command: 'hugo -d public/'
            }
        },

        open: {
            devserver: {
                path: 'http://localhost:1313'
            },
            live: {
                path: 'http://faq.enectiva.cz'
            }
        },

        sass: {
            dist: {
                files: {
                    'static/dist/main.css': 'static/assets/sass/main.sass'
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'static/dist/main.min.css': 'static/dist/main.css'
                }
            }
        },

        watch: {
            sass: {
                files: ['**/*.sass'],
                tasks: ['sass', 'cssmin']
            }
        }
    });
    
    grunt.registerTask('test', ['sass', 'cssmin', 'open:devserver', 'shell:server']);
    grunt.registerTask('build', ['sass', 'cssmin', 'open:live', 'shell:build']);
};
