var BaseModel = require( './model' );
var SetlistSong = require( './setlist_song' );
var Song = require( './song' );

var Setlist = BaseModel.extend({
    tableName: 'setlists',

    setlist_songs: function() {
        return this.hasMany( SetlistSong );
    },

    songs: function() {
        return this.hasMany( Song ).through( SetlistSong );
    }
});

module.exports = Setlist;
