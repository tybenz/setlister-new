exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'setlist_songs', function( t ) {
        t.increments().primary();

        t.integer( 'song_id' );
        t.integer( 'setlist_id' );
        t.string( 'data_key' );
        t.integer( 'position' );
        t.integer( 'capo' );

        t.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable( 'setlist_songs' );
};
