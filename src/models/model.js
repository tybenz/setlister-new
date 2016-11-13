var BaseModel = require( '../db' ).Model;
var inflect = require( 'i' )();
var path = require( 'path' );
var getCaller = require( '../utils' ).getCaller;

var extend = BaseModel.extend;

BaseModel.extend = function( obj ) {
    // build class the same as before
    var newClass = extend.call( BaseModel, obj );
    newClass.prototype.hasTimestamps = true;

    return newClass;
};

module.exports = BaseModel;
