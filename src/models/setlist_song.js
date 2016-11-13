var BaseModel = require( './model' );

var SetlistSong = BaseModel.extend({
    tableName: 'setlists',

    song: function() {
        return this.belongsTo( Song );
    },

    setlist: function() {
        return this.belongsTo( Setlist );
    }
});

module.exports = SetlistSong;
