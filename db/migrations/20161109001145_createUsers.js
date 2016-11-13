exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'users', function( t ) {
        t.increments().primary();

        t.string( 'email' );
        t.string( 'encrypted_password' );
        t.string( 'salt' );

        t.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable( 'users' );
};
