var fs = require( 'fs' );
var path = require( 'path' );
var url = require( 'url' );
var Utils = require( '../utils' );
var Settings = require( '../settings' );
var cdnVersion = fs.readFileSync(
    path.join( __dirname, '..', '..', 'dist', 'version' ),
    { encoding: 'utf8' }
).replace(/\s$/, '');

var ApplicationController = Class.extend({
    init: function() {},

    defaultLocals: function( req ) {
        return {
            site_title: 'Setlister',
            metatags: [],
            fonts: this.fonts(),
            stylesheets: this.stylesheets(),
            javascripts: this.javascripts(),
            json: {
                fixedPaths: {
                    current: req.path,
                    root: router.rootPath(),
                    songs: router.songsPath(),
                    setlists: router.setlistsPath()
                }
            }
        };
    },

    fonts: function() {
        return [
        ];
    },

    stylesheets: function() {
        return [ '/css/app.css', '/css/print.css' ];
    },

    javascripts: function() {
        return [ '/js/app.js' ];
    },

    locals: function( req, res, obj, json ) {
        res.locals = _.extend( res.locals, this.defaultLocals( req ), obj );
        res.locals.templates = _.map( res.locals.templates, Utils.clientSideTemplate );
        var defaultJson = this.defaultLocals( req ).json;
        res.locals.json = JSON.stringify(_.extend( {}, defaultJson, json ));

        if ( process.env.ENV && process.env.ENV != 'local' ) {
            res.locals.javascripts = res.locals.javascripts.map( function( script ) {
                if ( !script.match( /^(https?\:\/\/|\/\/)/ ) ) {
                    script = script.replace( /\.js$/, '.gz.js' );
                    return url.format({
                        protocol: Settings.cdn.protocol,
                        hostname: Settings.cdn.host[ process.env.ENV || 'dev' ],
                        pathname: path.join( cdnVersion, script )
                    });
                }
                return script;
            });

            res.locals.stylesheets = res.locals.stylesheets.map( function( style ) {
                if ( style.replace( /^(https?\:\/\/|\/\/).*/, '' ) != '' ) {
                    style = style.replace( /\.css$/, '.gz.css' );
                    return url.format({
                        protocol: Settings.cdn.protocol,
                        hostname: Settings.cdn.host[ process.env.ENV || 'dev' ],
                        pathname: path.join( cdnVersion, style )
                    });
                }
                return style;
            });
        }
    },

    render: function( req, res, viewPath, locals, options ) {
        this.locals( req, res, locals );
        var viewFolder = viewPath.replace( /\/[^\/]*$/, '' );
        var fileList = fs.readdirSync( path.join( __dirname, '..', 'views', viewFolder ) );
        partials = _.reduce( fileList, function( obj, file ) {
            if ( file.charAt( 0 ) == '_' ) {
                var simpleFile = file.replace( '.mustache', '' );
                obj[ simpleFile.replace( /^\_/, '' ) ] = viewFolder + '/' + simpleFile;
            }

            return obj;
        }, {} );
        options = _.extend( {}, options, { partials: partials } );

        res.statusCode = options.status || 200;
        res.render( viewPath, options );
    },

    renderWithJSON: function ( req, res, json ) {
        this.locals( req, res, {}, json );
        res.render( 'app.mustache' );
    },

    authError: function( req, res, next ) {
        req.flash( 'error', 'Not authorized' );
        res.redirect( router.rootPath() );
    }
});

module.exports = ApplicationController;
