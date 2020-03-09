var Setlist = require('../models/setlist');
var Song = require('../models/song');
var ApplicationController = require( './application' );

var HomeController = ApplicationController.extend({
    index: function( req, res, next ) {
        new Setlist().query(function (q) {
            q.orderBy('date', 'DESC');
            q.limit(20);
        }).fetchAll({
            withRelated: ['setlist_songs', 'setlist_songs.song']
        }).then(function (recentSetlists) {
            recentSetlists = recentSetlists.map(function (setlist) {
                setlistSongs = setlist.related( 'setlist_songs' );
                var songs = setlistSongs.map(function (setlistSong) {
                    return setlistSong.fullSong();
                }).sort(function (a, b) {
                    if (a.position < b.position) {
                        return -1;
                    }
                    if (a.position > b.position) {
                        return 1;
                    }
                    return 0;
                });

                var setlist = setlist.toJSON();
                setlist.songs = songs;

                return setlist;
            });

            this.renderWithJSON(req, res, {
                recent_setlists: recentSetlists
                // recent_songs: recentSongs
            });
        }.bind(this));
    },

    signIn: function( req, res, next ) {
        this.renderWithJSON(req, res, {});
    }
});

module.exports = HomeController;
