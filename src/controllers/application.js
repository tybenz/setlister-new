var fs = require( 'fs' );
var path = require( 'path' );
var url = require( 'url' );
var Utils = require( '../utils' );
var Settings = require( '../settings' );

var ApplicationController = Class.extend({
    init: function() {},

    defaultLocals: function( req ) {
        return {
            site_title: 'Setlister',
            root_url: '/',
            songs_path: router.songsPath(),
            setlists_path: router.setlistsPath(),
            is_signed_in: !!req.user,
            metatags: [],
            fonts: this.fonts(),
            print_stylesheet: '/css/print.css',
            stylesheets: this.stylesheets(),
            javascripts: this.javascripts(),
            templates: this.templates()
        };
    },

    fonts: function() {
        return [
            { src: '//use.edgefonts.net/source-sans-pro.js' }
        ];
    },

    stylesheets: function() {
        return [ '/css/application.css' ];
    },

    javascripts: function() {
        return [ '/js/application.js' ];
    },

    templates: function() {
        return [];
    },

    locals: function( req, res, obj ) {
        res.locals = _.extend( res.locals, this.defaultLocals( req ), obj );
        res.locals.templates = _.map( res.locals.templates, Utils.clientSideTemplate );

        if ( process.env.NODE_ENV && process.env.NODE_ENV != 'local' ) {
            res.locals.javascripts = res.locals.javascripts.map( function( script ) {
                if ( !script.match( /^(https?\:\/\/|\/\/)/ ) ) {
                    script = script.replace( /\.js$/, '.gz.js' );
                    return url.format({
                        protocol: Settings.cdn.protocol,
                        hostname: Settings.cdn.host[ process.env.NODE_ENV || 'dev' ],
                        pathname: path.join( Settings.cdn.version, script )
                    });
                }
                return script;
            });

            res.locals.stylesheets = res.locals.stylesheets.map( function( style ) {
                if ( style.replace( /^(https?\:\/\/|\/\/).*/, '' ) != '' ) {
                    style = style.replace( /\.css$/, '.gz.css' );
                    return url.format({
                        protocol: Settings.cdn.protocol,
                        hostname: Settings.cdn.host[ process.env.NODE_ENV || 'dev' ],
                        pathname: path.join( Settings.cdn.version, style )
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

    authError: function( req, res, next ) {
        req.flash( 'error', 'Not authorized' );
        res.redirect( router.rootPath() );
    }
});

module.exports = ApplicationController;
