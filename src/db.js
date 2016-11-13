var env = process.env.NODE_ENV || 'local';
if ( process.env.NODE_TEST ) {
    env = 'test';
}
var config = require( '../db/config' );
var knex = require( 'knex' )( config[ process.env.NODE_TEST ? 'test' : ( process.env.NODE_ENV || 'local' ) ] );
var PG = require( 'bookshelf' ).initialize( knex );
PG.plugin( 'virtuals' );

module.exports = PG;
