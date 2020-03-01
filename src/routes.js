module.exports = function( router ) {
    router.get( '/', 'home#index', { as: 'root' } );
    router.get( '/sign_in', 'home#signIn', { as: 'signInForm' } );
    router.post( '/sign_in', 'susi#signIn', { as: 'signIn' } );
    router.get( '/sign_out', 'susi#signOut', { as: 'signOut' } );

    router.get( '/songs', 'songs#index', { as: 'songs' } );
    router.get( '/songs/new', 'songs#new', { as: 'newSong' } );
    router.get( '/songs/:id/edit', 'songs#edit', { as: 'editSong' } );
    router.post( '/songs', 'songs#create' );
    router.get( '/songs/:id', 'songs#show', { as: 'song' } );
    router.post( '/songs/:id', 'songs#update' );
    router.delete( '/songs/:id', 'songs#delete' );

    router.get( '/setlists', 'setlists#index', { as: 'setlists' } );
    router.get( '/setlists/new', 'setlists#new', { as: 'newSetlist' } );
    router.get( '/setlists/:id/edit', 'setlists#edit', { as: 'editSetlist' } );
    router.get( '/setlists/:id/slideshow', 'setlists#slideshow', { as: 'setlistSlideshow' } );
    router.post( '/setlists', 'setlists#create' );
    router.get( '/setlists/:id', 'setlists#show', { as: 'setlist' } );
    router.post( '/setlists/:id', 'setlists#update' );
    router.delete( '/setlists/:id', 'setlists#delete' );

    router.post( '/setlist_songs', 'setlist_songs#create', { as: 'createSetlistSong' } );
    router.delete( '/setlist_songs/:id', 'setlist_songs#delete', { as: 'deleteSetlistSong' } );

    router.get( '/auth_error', 'application#authError' );
};
