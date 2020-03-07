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
    },

    destroy: function () {
        var setlistSongs = this.related('setlist_songs');

        return Promise.all(setlistSongs.map(function (setlistSong) {
            return setlistSong.destroy();
        }))
        .then(function () {
            return BaseModel.prototype.destroy.call(this);
        }.bind(this));
    }
});

module.exports = Setlist;
