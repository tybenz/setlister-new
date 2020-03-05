exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'songs', function( t ) {
        t.increments().primary();

        t.string( 'title' );
        t.string( 'artist' );
        t.string( 'license' );
        t.string( 'year' );
        t.text( 'text' );
        t.string( 'data_key' );
        t.string( 'spotify_uri' );
        t.integer( 'capo' );
        t.text( 'info' );

        t.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable( 'songs' );
};
