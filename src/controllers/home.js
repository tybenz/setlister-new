var Setlist = require('../models/setlist');
var Song = require('../models/song');
var ApplicationController = require( './application' );

var HomeController = ApplicationController.extend({
    index: function( req, res, next ) {
        new Setlist().query(function (q) {
            q.orderBy('created_at', 'DESC');
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

                var id = setlist.id;
                return _.extend({}, setlist, {
                    path: router.setlistPath(id),
                    edit_path: router.editSetlistPath(id),
                    delete_path: router.setlistPath(id),
                    slideshow_path: router.setlistSlideshowPath(id),
                    songs: songs
                });
            });

            this.renderWithJSON(req, res, {
                recent_setlists: recentSetlists
                // recent_songs: recentSongs
            });
        }.bind(this))
        .catch(function (err) {
            next(err);
        });
    },

    signIn: function( req, res, next ) {
        this.renderWithJSON(req, res, {});
    }
});

module.exports = HomeController;
