var ApplicationController = require( './application' );
var Settings = require( '../settings' );
var Utils = require( '../utils' );

var SetlistsController = ApplicationController.extend({
    index: function( req, res, next ) {
        this.locals(res, {});
        this.render( res, 'setlists/index', {layout: 'layouts/application'} );
    }
});

module.exports = SetlistsController;
