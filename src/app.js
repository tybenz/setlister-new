// XXX Global requires
global.Class = require( 'class.extend' );
global._ = require( 'lodash' );
global.Promise = require( 'bluebird' );
global.$ = function( obj ) {
    return Promise.promisifyAll( obj, {
        filter: function() { return true; }
    });
};
global.Status = {
    dbIsDown: false,
    cpIsDown: false,
    ccvIsDown: false
};

var express = require( 'express' );
var http = require( 'http' );
var https = require( 'https' );
var fs = require( 'fs' );
var url = require( 'url' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var browserifyMiddleWare = require( 'browserify-middleware' );
var Logger = require( './logger' );
var timeout = require( 'connect-timeout' );
var uuid = require( 'node-uuid' );
var cookieParser = require( 'cookie-parser' );
var sassMiddleware = require( 'node-sass-middleware' );
var session = require( 'express-session' );
var passport = require( 'passport' );
var LocalStrategy = require( 'passport-local' ).Strategy;
var flash = require( 'flash' );
var inflect = require( 'i' )();
var Settings = require( './settings' );
var Utils = require( './utils' );
var User = require( './models/user' );
var Router = require( 'paper-router' );
var routes = require( './routes' );
var ApplicationController = require( './controllers/application' );
var applicationController = new ApplicationController();
console.log(applicationController);

global.logger = Logger.create();
global.profile = require( 'paper-profiler' ).create();

if ( process.env.NEWRELIC_HOME ) {
    require( 'newrelic' );
}

var app = express();
app.enable( 'trust proxy' );

// Fixing request for local if necessary
var request = require( 'request' );
if ( !process.env.NODE_ENV || process.env.NODE_ENV == 'local' ) {
    request.defaults({
        strictSSL: false,
        rejectUnauthorized: false
    });
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

var haltOnTimedout = function( req, res, next ) {
    if ( ! req.timedout ) {
        next();
    }
};
var startRequest = function( req, res, next ) {
    req.requestId = uuid.v4();
    req.startTime = Date.now();

    next();
};

var logStart = function( req, res, next ) {
    var logObj = {
        type: 'beginRequest',
        method: req.method,
        url: req.url,
        ip: req.ip,
        requestId: req.requestId
    };

    if ( req.body.asset_id ) {
        logObj.asset_id = req.body.asset_id;
    }
    logObj.params = JSON.stringify( req.body );

    logger( logObj );
    next();
};

var endRequest = function( req, res, next ) {
    res.on( 'finish', function() {
        var log = {};
        logger({
            type: 'endRequest',
            method: req.method,
            url: req.url,
            ip: req.ip,
            requestId: req.requestId,
            statusCode: res.statusCode,
            times: profile.getTimes( req.requestId ),
            elapsedTime: ( ( Date.now() - req.startTime ) / 1000 ).toFixed( 2 ) + 's'
        });
        profile.done( req.requestId );
    });
    next();
};

app.use( timeout( '31s' ) );
app.use( startRequest );
app.use( haltOnTimedout );
app.use( endRequest );
app.use( haltOnTimedout );

// Mustache
app.set( 'view engine', 'mustache' );
app.set( 'views', path.join( __dirname, 'views' ) );

//add all the mustache partials to global namespace so we don't have to include them when doing res.render
var traverseViews = function( path ) {
    //get list of files
    var fileList = fs.readdirSync( path );

    return _.reduce( fileList, function( partialsObj, file ) {
        if ( fs.lstatSync( path + '/' + file ).isDirectory() ) {
            _.extend( partialsObj, traverseViews( path + '/' + file ) );
        } else if ( file.charAt( 0 ) == '_' ) {
            var simplePath = path.replace( /^.*\/views\//, '' );
            var simpleFile = file.replace( '.mustache', '' );
            partialsObj[ simplePath + '/' + simpleFile.substring( 1 ) ] = simplePath + '/' + simpleFile;
        }

        return partialsObj;
    }, {} );
};
app.set( 'partials', traverseViews( path.join( __dirname, 'views' ) ) );
app.engine( 'mustache', require( 'hogan-express' ) );

var assetVersionNumber;

if (process.env.NODE_ENV === 'production') {
    assetVersionNumber = fs.readFileSync( path.join( __dirname, '..', 'dist', 'version' ), { encoding: 'utf8' } );
    app.use( '/js', express.static( path.join(__dirname, '..', 'dist', assetVersionNumber, 'js')));
    app.use( haltOnTimedout );
    app.use( '/css', express.static( path.join(__dirname, '..', 'dist', assetVersionNumber, 'css')));
    app.use( haltOnTimedout );
} else {
    // Client-side JS
    app.use( '/js', browserifyMiddleWare( path.join( __dirname, 'assets', 'javascripts' ) ) );
    app.use( haltOnTimedout );

    app.use(sassMiddleware({
        src: path.join(__dirname, 'assets', 'stylesheets'),
        dest: path.join(__dirname, '..', 'dist', 'css'),
        outputStyle: 'compressed',
        prefix: '/css'
    }));
    app.use( haltOnTimedout );
    app.use( '/css', express.static( path.join( __dirname, '..', 'dist', 'css' ) ) );
    app.use( haltOnTimedout );
}

app.use( '/favicon.ico', express.static( path.join( __dirname, '..', 'dist', 'favicon.ico' ) ) );
app.use( haltOnTimedout );

// Images
app.use( '/img', express.static( path.join( __dirname, 'assets', 'images' ) ) );
app.use( haltOnTimedout );

app.use( '/font', express.static( path.join( __dirname, 'assets', 'font' ) ) );
app.use( haltOnTimedout );

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( haltOnTimedout );
app.use( bodyParser.json( { type: 'application/json' } ) );
app.use( haltOnTimedout );
app.use( logStart );
app.use( haltOnTimedout );


passport.serializeUser( function( user, done ) {
    done( null, user.id );
});

passport.deserializeUser( function( id, done ) {
    new User( { id: id } ).fetch()
    .then( function( user ) {
        done( null, user );
    })
    .catch( function( err ) {
        done( err );
    });
});

passport.use( new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function( email, password, done ) {
        new User( { email: email } )
        .fetch()
        .then( function( user ) {
            if ( !user ) {
                return done( null, false, { message: 'Incorrect email.' } );
            }

            var valid = user.verify( password );
            if ( !valid ) {
                return done( null, false, { message: 'Incorrect password.' } );
            }
            return done( null, user );
        })
        .catch( function( err ) {
            if ( err ) {
                return done( err );
            }
        });
    }
));
app.use( haltOnTimedout );

if ( process.env.NODE_ENV == 'production' ) {
    app.use( cookieParser( secret ) );
    app.use( haltOnTimedout );
    app.use( session({
        secret: 'gtfo, bruh',
        resave: true,
        saveUninitialized: true,
        cookie: { secure: true }
    }));
    app.use( haltOnTimedout );
} else if ( process.env.NODE_TEST ) {
    app.use( session({
        resave: true,
        saveUninitialized: true,
        secret: 'gtfo, bruh',
        cookie: { secure: true }
    }));
    app.use( haltOnTimedout );
} else {
    app.use( session({
        secret: 'gtfo, bruh',
        resave: true,
        saveUninitialized: true,
        cookie: { secure: true }
    }));
    app.use( haltOnTimedout );
}

app.use( passport.initialize() );
app.use( haltOnTimedout );
app.use( passport.session() );
app.use( haltOnTimedout );
app.use( flash() );
app.use( haltOnTimedout );

var methodOverride = require( 'method-override' );

app.use( methodOverride( function( req, res ) {
    if ( req.body && typeof req.body === 'object' && '_method' in req.body ) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));
app.use( haltOnTimedout );

// Make router globally exceptable for path helpers
global.router = new Router( app, path.join( __dirname, '/controllers' ), routes );

// First non error middleware after route binding. So if the response hasn't
// ended by now, we can assume that it is a bad route and therefor a 404.
app.use( function( req, res, next ) {
    applicationController.notFound( req, res, next );
});

// Handle uncaught errors
app.use( function( err, req, res, next ) {
    logger.error( err, req.requestId );

    if (err.status === 404) {
        return applicationController.notFound( req, res, next );
    }

    applicationController.applicationError( req, res, next );
});

var server;
if ( !process.env.NODE_ENV || process.env.NODE_ENV == 'local' ) {
    server = https.createServer(
        {
            key: fs.readFileSync( path.join( __dirname, '..', 'ssl', 'ssl.key' ) ),
            cert: fs.readFileSync( path.join( __dirname, '..', 'ssl', 'ssl.crt' ) )
        },
        app
    );
} else {
    server = http.createServer( app );
}

server.listen( process.env.PORT || 4567, function() {
    var log = { type: 'serverStartup' };
    if (assetVersionNumber) {
        log.assetVersionNumber = assetVersionNumber;
    }
    logger(log);
});

module.exports = server;
