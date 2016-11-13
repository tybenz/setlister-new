var request = require( 'request' );
var path = require( 'path' );
var inflect = require( 'i' )();
var fs = require( 'fs' );
var Settings = require( './settings' );
var pool = { maxSockets: Infinity };
var requestDefaults = { timeout: 30 * 1000 };
if ( process.env.NODE_TEST ) {
    requestDefaults.timeout = 500;
}
request = request.defaults( requestDefaults );

var defer = function() {
    var resolve, reject;
    var promise = new Promise(function() {
        resolve = arguments[0];
        reject = arguments[1];
    });
    return {
        resolve: function() {
            resolve.apply( null, arguments );
            return promise;
        },
        reject: function() {
            reject.apply( null, arguments );
            return promise;
        },
        promise: promise
    };
};

var Utils = {
    uuid: require( 'node-uuid' ),

    defer: defer,

    request: request,

    requestAsync: function( options ) {
        options.pool = pool;
        var deferred = defer();
        var r = request( options, function( err, res, body ) {
            if ( err ) {
                return deferred.reject( err );
            }
            deferred.resolve( res, body );
        });

        deferred.promise.req = r;

        return deferred.promise;
    },

    rename: function( obj, oldName, newName ) {
        var temp = obj[ oldName ];
        delete obj[ oldName ];
        obj[ newName ] = temp;
    },

    clientSideTemplate: function( templatePath ) {
        var dir = path.dirname( templatePath );
        var simpleFile = path.basename( templatePath );
        return {
            id: inflect.dasherize( simpleFile ) + '-template',
            text: fs.readFileSync( path.join( __dirname, 'views', dir, '_' + simpleFile + '.mustache' ) )
        };
    },

    getStack: function() {
        // Save original Error.prepareStackTrace
        var origPrepareStackTrace = Error.prepareStackTrace;

        // Override with function that just returns `stack`
        Error.prepareStackTrace = function( _, stack ) {
            return stack;
        };

        // Create a new `Error`, which automatically gets `stack`
        var err = new Error();

        // Evaluate `err.stack`, which calls our new `Error.prepareStackTrace`
        var stack = err.stack;

        // Restore original `Error.prepareStackTrace`
        Error.prepareStackTrace = origPrepareStackTrace;

        // Remove superfluous function call on stack
        stack.shift(); // getStack --> Error

        return stack;
    },

    getCaller: function() {
        var stack = Utils.getStack();

        // Remove superfluous function calls on stack
        stack.shift(); // getCaller --> getStack
        stack.shift(); // omfg --> getCaller

        // Return caller's caller
        return stack[1].receiver;
    }
};

module.exports = Utils;
