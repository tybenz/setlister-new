var fs = require( 'fs' );
var path = require( 'path' );
var url = require( 'url' );
var Utils = require( '../utils' );
var Settings = require( '../settings' );

var ApplicationController = Class.extend({
    init: function() {},

    defaultLocals: function() {
        var routes = {};
        for ( var member in router ) {
            if ( router.hasOwnProperty( member ) ) {
                var value = router[ member ];
                if (member.search('Path') != -1) {
                    routes[member.replace(/Path$/, '')] = value();
                }
            }
        }
        return {
            page_title: 'Setlister',
            routes: routes,
            root_url: '/',
            metatags: [],
            fonts: this.fonts(),
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

    locals: function( res, obj ) {
        console.log( res.locals );
        res.locals = _.extend( res.locals, this.defaultLocals(), obj );
        res.locals.templates = _.map( res.locals.templates, Utils.clientSideTemplate );
        console.log( res.locals );

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

    render: function( res, viewPath, locals, options ) {
        console.log( res.locals );
        this.locals( res, locals );
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
    }
});

module.exports = ApplicationController;
