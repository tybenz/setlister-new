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
    },

    fullSong: function() {
        var songData = this.related('song').toJSON();
        songData.start_key = songData.data_key;
        songData.data_key = this.get( 'data_key' );
        songData.position = this.get( 'position' );
        songData.capo = this.get( 'capo' );
        songData.setlist_song_id = this.id;
        songData.song_id = songData.id;
        songData.path = router.songPath(songData.id);
        songData.edit_path = router.editSongPath(songData.id);
        songData.delete_path = router.deleteSetlistSongPath(this.id);
        songData.title_dashes = songData.title.replace(/ /g, '-');
        return songData;
    }
});

module.exports = SetlistSong;
