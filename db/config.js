var path = require( 'path' );

module.exports = {
    test: {
        client: 'sqlite3',
        connection: {
            filename: path.join( __dirname, 'setlister-test.db' )
        }
    },

    local: {
        client: 'sqlite3',
        connection: {
            filename: path.join( __dirname, 'setlister-dev.db' )
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        options: {
            ssl: true
        },
        migrations: {
            directory: path.join(__dirname, 'migrations_prod')
        }
    }
};
