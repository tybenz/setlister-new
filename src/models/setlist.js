var BaseModel = require( './model' );

var Setlist = BaseModel.extend({
    tableName: 'setlists',

    songs: function() {
        return this.belongsToMany( Song ).through( SetlistSong );
    },

    setlist_songs: function() {
        return this.hasMany( SetlistSong );
    }
});

module.exports = Setlist;
