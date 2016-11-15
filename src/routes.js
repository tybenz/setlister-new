module.exports = function( router ) {
    router.get( '/', 'home#index', { as: 'root' } );
    router.get( '/sign_in', 'home#signIn', { as: 'signInForm' } );
    router.post( '/sign_in', 'susi#signIn', { as: 'signIn' } );
    router.get( '/sign_out', 'susi#signOut', { as: 'signOut' } );

    router.get( '/songs', 'songs#index', { as: 'songs' } );
    router.post( '/songs', 'songs#create' );
    router.get( '/songs/new', 'songs#new', { as: 'newSong' } );
    router.get( '/songs/:id', 'songs#show', { as: 'song' } );
    router.post( '/songs/:id', 'songs#update' );
    router.delete( '/songs/:id', 'songs#delete' );

    router.get( '/songs/:id/edit', 'songs#edit', { as: 'editSong' } );
    router.get( '/setlists', 'setlists#index', { as: 'setlists' } );

};
