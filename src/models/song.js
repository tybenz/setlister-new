var BaseModel = require( './model' );

var Song = BaseModel.extend({
    tableName: 'songs'
});

module.exports = Song;
