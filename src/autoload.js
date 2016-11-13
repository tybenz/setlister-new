var fs = require( 'fs' );
var path = require( 'path' );
var inflect = require( 'i' )();
var modules = [];

// Require the base model first
global.Promise = require( 'bluebird' );
global._ = require( 'lodash-node' );
global.Class = require( 'class.extend' );
global.BaseModel = require( './models/model' );
global.$ = function( obj ) {
    return Promise.promisifyAll( obj, {
        filter: function() { return true; }
    });
};
global.profile = require( 'paper-profiler' ).create();
global.Status = {
    dbIsDown: false,
    cpIsDown: false,
    ccvIsDown: false
};

// Require all models - puts them in global namespace
fs.readdirSync( path.join( __dirname, '..', 'src', 'models' ) ).forEach( function( model ) {
    if ( model.charAt(0) != '.' && model.match( /\.js$/ ) && model != 'model.js' ) {
        var module = require( './models/' + model );
        modules.push( module );
        global[ inflect.camelize( model.replace( /\.js$/, '' ) ) ] = module;
    }
});

module.exports = modules;
