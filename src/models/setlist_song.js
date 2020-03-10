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
        songData.start_key = songData && songData.data_key;
        songData.data_key = this.get( 'data_key' );
        songData.position = this.get( 'position' );
        songData.capo = this.get( 'capo' );
        songData.setlist_song_id = this.id;
        songData.song_id = songData && songData.id;
        songData.path = songData && songData.id ? router.songPath(songData.id) : router.songPath(1);
        songData.edit_path = songData && songData.id ? router.editSongPath(songData.id) : router[ 'editSongPath(1);' ]
        songData.setlist_song_path = router.setlistSongPath(this.id);
        songData.delete_path = router.deleteSetlistSongPath(this.id);
        songData.title_dashes = songData && songData.title ? encodeURIComponent(songData.title.toLowerCase().replace(/ /g, '-').replace(/[\(\)\']/g, '')) : '';
        return songData;
    }
});

module.exports = SetlistSong;
