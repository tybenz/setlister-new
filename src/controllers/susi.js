var _ = require( 'lodash' );
var flash = require( 'flash' );
var passport = require( 'passport' );
var ApplicationController = require( './application' );
var User = require( '../models/user' );

var SusiController = ApplicationController.extend({
    signUp: function( req, res, next ) {
        logger( { type: 'signUp' } );
        var password = req.body.password;
        var attrs = _.pick( req.body, [ 'email', 'fname', 'lname', 'weight', 'height', 'bodyFat' ] );
        var user = new User( attrs );
        user.setPassword( password ).then( function() {
            return user.save();
        })
        .then( function() {
            return user.initializeWorkouts();
        })
        .then( function() {
            req.logIn( user, function( err ) {
                if ( err ) {
                    throw err;
                }
                res.redirect( router.rootPath() );
            });
        })
        .catch( function( err ) {
            throw err;
        });
    },

    signIn: function( req, res, next ) {
        passport.authenticate( 'local', function( err, user, info ) {
            logger( { type: 'signIn' } );
            if ( err ) {
                return next( err );
            }
            if ( !user ) {
                console.log( info.message );
                req.flash( 'error', info.message );
                return res.redirect( router.signInPath() );
            }
            req.logIn( user, function( err ) {
                if ( err ) {
                    return next( err );
                }
                return res.redirect( router.rootPath() );
            });
        })( req, res, next );
    },

    signOut: function( req, res, next ) {
        req.logOut();
        req.flash('Logged out');
        res.redirect( router.rootPath() );
    }
});

module.exports = new SusiController();
