var BaseModel = require( './model' );

var SetlistSong = BaseModel.extend({
    tableName: 'setlist_songs',

    song: function() {
        var Song = require( './song' );
        return this.belongsTo( Song );
    },

    setlist: function() {
        var Setlist = require( './setlist' );
        return this.belongsTo( Setlist );
    }
});

module.exports = SetlistSong;
