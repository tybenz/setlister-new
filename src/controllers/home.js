var ApplicationController = require( './application' );

var HomeController = ApplicationController.extend({
    index: function( req, res, next ) {
        this.render( req, res, 'home/index', {
            sign_in_or_sign_out: req.user ? router.signOutPath() : router.signInFormPath()
        }, {layout: 'layouts/application'} );
    },

    signIn: function( req, res, next ) {
        if ( req.user ) {
            res.redirect( router.rootPath() );
            return;
        }

        this.render( req, res, 'home/sign_in', {
            name: 'Tyler',
            signIn: true,
            signInUrl: router.signInPath(),
            stylesheets: [ '/css/vendor.css', '/css/application.css', '/css/susi.css' ],
            javascripts: [ '/js/susi.js' ]
        }, {layout: 'layouts/application'});
    }
});

module.exports = HomeController;
