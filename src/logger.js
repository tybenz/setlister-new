var moment = require( 'moment' );

var logger = function( log ) {
    log.time = moment().format();
    if ( !process.env.NODE_TEST ) {
        console.log( JSON.stringify( log ) );
    }
};

logger.error = function( err, requestId ) {
    logger({
        type: 'error',
        status: err.status,
        requestId: requestId,
        message: err.name + ': ' + err.message,
        stack: err.stack
    });
};

var Logger = {
    create: function() {
        return logger;
    }
};

module.exports = Logger;
