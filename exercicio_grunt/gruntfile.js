module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dev/scripts/main.min.js' : ['src/scripts/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};