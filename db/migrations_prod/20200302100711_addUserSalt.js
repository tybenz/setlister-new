exports.up = function(knex) {
    return knex.schema.table( 'users', function( t ) {
        t.string( 'salt' );
    });
};

exports.down = function(knex) {
    return knex.schema.table( 'users', function( t ) {
        t.dropColumn( 'salt' );
    });
};
