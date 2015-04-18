module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            vendor: {
                src: ['bike/static/bike/js/jquery.js', 'bike/static/bike/js/bootstrap.min.js', 'bike/static/bike/js/leaflet.js',
                    'bike/static/bike/js/**/*.js'],
                dest: 'bike/static/bike/prod/js/vendor.js'
            },
            app: {
                src: ['bike/static/bike/scripts/map.js', 'bike/static/bike/scripts/joinRide.js', 'bike/static/bike/scripts/getRiderInfo.js',
                    'bike/static/bike/scripts/createRide.js', 'bike/static/bike/scripts/editRide.js', 'bike/static/bike/scripts/navBar.js'],
                dest: 'bike/static/bike/prod/scripts/app.js'
            },
            vendorCSS: {
                src: ['bike/static/bike/css/**/*.css'],
                dest: 'bike/static/bike/prod/css/vendor.css'
            }
        },
        uglify: {
            options: {
                separator: ';'
            },
            app: {
                files: {
                    'bike/static/bike/prod/scripts/app.min.js': ['bike/static/bike/prod/scripts/app.js']
                }
            },
            vendor: {
                files: {
                    'bike/static/bike/prod/js/vendor.min.js': ['bike/static/bike/prod/js/vendor.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'bike/static/bike/prod/css/vendor.min.css': ['bike/static/bike/prod/css/vendor.css']
                }
            }

        }
    });

    // Load plugins here.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Register tasks here.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};