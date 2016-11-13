module.exports = function( router ) {
    router.get( '/', 'home#index', { as: 'root' } );
    router.get( '/sign_in', 'home#signIn', { as: 'signInForm' } );
    router.post( '/sign_in', 'susi#signIn', { as: 'signIn' } );
    router.get( '/sign_out', 'susi#signOut', { as: 'signOut' } );

    router.get( '/setlists', 'setlists#index', { as: 'setlists' } );

};
