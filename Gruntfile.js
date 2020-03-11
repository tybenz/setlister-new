var fs = require( 'fs' );
var path = require( 'path' );
var mkdirp = require( 'mkdirp' );
var ncp = require( 'ncp' );
var version = require( 'node-uuid' )().replace( /-/g, '' );

var javascripts = [
    'slideshow',
    'error',
    'app'
];

var stylesheets = [
    'app',
    'print'
];

var browserify = {};
var uglify = {};
var compressJS = {};
var jsFiles = javascripts.forEach( function( js ) {
    browserify[ 'dist/' + version + '/js/' + js + '.js' ] = 'src/assets/javascripts/' + js + '.js';
    uglify[ 'dist/' + version + '/js/' + js + '.min.js' ] = 'dist/' + version + '/js/' + js + '.js';
    compressJS[ 'dist/' + version + '/js/' + js + '.gz.js' ] = 'dist/' + version + '/js/' + js + '.min.js';
});

var sass = {};
var compressCSS = {};
var sassFiles = stylesheets.forEach( function( css ) {
    sass[ 'dist/' + version + '/css/' + css + '.css' ] = 'src/assets/stylesheets/' + css + '.scss';
    compressCSS[ 'dist/' + version + '/css/' + css + '.gz.css' ] = 'dist/' + version + '/css/' + css + '.min.css';
});

var jsDir = 'dist/' + version + '/js';
var cssDir = 'dist/' + version + '/css';

module.exports = function( grunt ) {
    grunt.initConfig({
        browserify: {
            dist: { files: browserify }
        },
        uglify: {
            dist: { files: uglify }
        },
        sass: {
            options: {
                // sourcemap: 'none',
                style: 'expanded'
            },
            dist: { files: sass }
        },
        cssmin: {
          minify: {
            expand: true,
            cwd: cssDir,
            src: [ '*.css', '!*.min.css' ],
            dest: cssDir,
            ext: '.min.css'
          }
        },
        compress: {
            options: {
                mode: 'gzip'
            },
            distJS: { files: compressJS },
            distCSS: { files: compressCSS }
        }
    });

    grunt.registerTask( 'version', 'Write version to file', function() {
        fs.writeFileSync( 'dist/version', version);
        mkdirp.sync( 'dist/' + version );
    });

    grunt.registerTask( 'images', 'Move images into dist', function() {
        var done = this.async();
        ncp( 'src/assets/images', 'dist/' + version + '/img', function( err ) {
            if ( err ) {
                done( err );
            }
            done();
        });
    });

    grunt.registerTask( 'output', function() {
        grunt.log.writeln( 'Version is: ' + version );
    });

    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-compress' );

    grunt.registerTask( 'compile', [ 'version', 'images', 'browserify', 'uglify', 'sass', 'cssmin', 'compress', 'output' ] );
    grunt.registerTask( 'default', [ 'compile' ] );
};
