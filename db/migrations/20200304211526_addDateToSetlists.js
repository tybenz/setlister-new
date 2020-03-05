exports.up = function(knex) {
    return knex.schema.table( 'setlists', function ( t ) {
        t.date('date');
    });
};

exports.down = function(knex) {
    return knex.schema.table( 'setlists', function ( t ) {
        t.dropColumn('date');
    });
};
