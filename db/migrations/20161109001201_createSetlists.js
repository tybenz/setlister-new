exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'setlists', function( t ) {
        t.increments().primary();

        t.string( 'title' );
        t.integer( 'print' );
        t.integer( 'print_without_capo' );

        t.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable( 'setlists' );
};
