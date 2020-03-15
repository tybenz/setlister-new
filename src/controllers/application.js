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

    sendNotFound: function (next) {
        var notFoundErr = new Error('Not found');
        notFoundErr.status = 404;
        next(notFoundErr);
    },

    getNotFound: function () {
        var notFoundErr = new Error('Not found');
        notFoundErr.status = 404;
        return notFoundErr;
    },

    getIdParam: function (req, res, next) {
        var id = req.params.id;
        id = id.replace(/[^0-9]/g, '');
        id = parseInt(id);

        if (isNaN(id)) {
            console.log('SEND NOT FOUND');
            return this.sendNotFound(next);
        }

        return id;
    },

    defaultLocals: function( req ) {
        return {
            site_title: 'Setlister',
            metatags: [],
            fonts: this.fonts(),
            stylesheets: this.stylesheets(),
            javascripts: this.javascripts(),
            json: {
                is_signed_in: !!req.user,
                fixedPaths: {
                    current: req.path,
                    home: router.rootPath(),
                    root: router.rootPath(),
                    songs: router.songsPath(),
                    setlists: router.setlistsPath(),
                    sign_in: router.signInPath(),
                    sign_out: router.signOutPath()
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

    locals: function( req, res, obj, json, isError ) {
        res.locals = _.extend( res.locals, this.defaultLocals( req ), obj );
        json = json || {};

        var flashMessages = {
            info: [],
            error: [],
            warning: []
        };

        while ( res.locals.flash.length ) {
            var message = res.locals.flash.shift();
            flashMessages[ message.type ].push( message.message );
        }
        json.flash = flashMessages;

        var defaultJson = this.defaultLocals( req ).json;
        res.locals.json = JSON.stringify(_.extend( {}, defaultJson, json ));

        if ( process.env.NODE_ENV && process.env.NODE_ENV === 'production' ) {
            res.locals.javascripts = res.locals.javascripts.map( function( script ) {
                if ( !script.match( /^(https?\:\/\/|\/\/)/ ) ) {
                    script = script.replace( /\.js$/, '.gz.js' );
                    return url.format({
                        protocol: Settings.cdn.protocol,
                        hostname: Settings.cdn.host[ process.env.NODE_ENV || 'dev' ],
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
                        hostname: Settings.cdn.host[ process.env.NODE_ENV || 'dev' ],
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
    },

    notFound: function ( req, res, next ) {
        this.locals(
            req,
            res,
            {
                stylesheets: [ '/css/app.css', '/css/print.css' ],
                javascripts: [ '/js/error.js' ]
            },
            {
                error: 'Not found',
                fixedPaths: {
                    current: req.path,
                    home: router.rootPath(),
                    root: router.rootPath(),
                    songs: router.songsPath(),
                    setlists: router.setlistsPath(),
                    sign_in: router.signInPath(),
                    sign_out: router.signOutPath()
                }
            },
            true
        );

        res.status(404).render( 'app.mustache' );
    },

    applicationError: function ( req, res, next ) {
        this.locals(
            req,
            res,
            {
                stylesheets: [ '/css/app.css', '/css/print.css' ],
                javascripts: [ '/js/error.js' ]
            },
            {
                error: 'Application error',
                fixedPaths: {
                    current: req.path,
                    home: router.rootPath(),
                    root: router.rootPath(),
                    songs: router.songsPath(),
                    setlists: router.setlistsPath(),
                    sign_in: router.signInPath(),
                    sign_out: router.signOutPath()
                }
            },
            true
        );

        res.status(500).render( 'app.mustache' );
    }
});

module.exports = ApplicationController;
