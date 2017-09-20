module.exports = function(grunt) {
   "use strict";
    var _pkg = grunt.file.readJSON('package.json');

    // allows autoprefixer to work on older node_js versions
    require('es6-promise').polyfill();

    //Project configuration.
    grunt.initConfig({
        pkg: _pkg,
        concat: {
            css: {
                options: {
                    separator: '\n',
                    banner: '/* skd3 version ' + _pkg.version + ' (' + _pkg.url + ') ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                src: [
                    'src/css/*.css'
                ],
                dest: 'build/sk.d3.css'
            },
            js: {
                options: {
                    separator: '',
                    banner: '/* skd3 version ' + _pkg.version + ' (' + _pkg.url + ') ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n' + '(function(){\n',
                    footer: '\nsk.version = "' + _pkg.version + '";\n})();',
                    sourceMap: true,
                    sourceMapName: 'build/sk.d3.js.map',
                    sourceMapStyle: 'embed'
                },
                src: [
                    'src/init.js',
				    //Include d3-sankey core
				    'node_modules/d3-sankey/build/d3-sankey.min.js',
					//Include d3-tip
					'node_modules/d3-tip/index.js',
                    'src/core.js',
                    'src/utils.js',
                    // example to exclude files: '!src/models/excludeMe*'
                ],
                dest: 'build/sk.d3.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources : true,
                sourceMapIn : 'build/sk.d3.js.map',
                banner: '/* skd3 version ' + _pkg.version + ' (' + _pkg.url + ') ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            js: {
                files: {
                    'build/sk.d3.min.js': ['build/sk.d3.js']
                }
            }
        },
        replace: {
            version: {
                src: [
                    'package.js'
                ],
                overwrite: true,
                replacements: [{
                    from: /(version?\s?=?\:?\s\')([\d\.]*)\'/gi,
                    to: '$1' + _pkg.version + "'"
                }]
            }
        },
        jshint: {
            foo: {
                src: "src/**/*.js"
            },
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            js: {
                files: ["src/**/*.js"],
                tasks: ['concat']
            }
        },
        copy: {
            css: {
                files: [
                    { src: 'src/sk.d3.css', dest: 'build/sk.d3.css' }
                ]
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'last 2 versions',
                            'last 3 iOS versions',
                            'last 2 safari versions',
                            'ie >= 9']
                    })
                ]
            },
            dist: {
                src: 'build/sk.d3.css'
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/sk.d3.min.css' : ['build/sk.d3.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-text-replace');

    //grunt.registerTask('default', ['concat', 'copy', 'postcss']);
    grunt.registerTask('production', ['concat', 'uglify', 'copy', 'postcss', 'cssmin', 'replace']);
	grunt.registerTask('default', ['production']);
    grunt.registerTask('release', ['production']);
    grunt.registerTask('lint', ['jshint']);
};