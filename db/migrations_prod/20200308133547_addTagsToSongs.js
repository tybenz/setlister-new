exports.up = function(knex) {
    return knex.schema.table( 'songs', function( t ) {
        t.text( 'tags' );
    });
};

exports.down = function(knex) {
    return knex.schema.table( 'songs', function( t ) {
        t.dropColumn( 'tags' );
    });
};
