var ApplicationController = require( './application' );
var Setlist = require( '../models/setlist' );
var SetlistSong = require( '../models/setlist_song' );
var Song = require( '../models/song' );

var SetlistsController = ApplicationController.extend({
    index: function( req, res, next ) {
        new Setlist()
        .orderBy('title', 'ASC')
        .fetchAll()
        .then(function (setlists) {
            if (req.get('Content-Type') == 'application/json') {
                res.send(setlists.toJSON());
                return;
            }

            var i = 0;
            var setlistsJSON = setlists.map(function (setlist) {
                var id = setlist.get('id');
                i++;
                return _.extend({}, setlist.attributes, {
                    num: i,
                    path: router.setlistPath(id),
                    edit_path: router.editSetlistPath(id),
                    slideshow_path: router.setlistSlideshowPath(id)
                });
            });
            this.render( req, res, 'setlists/index', {
                setlists: setlistsJSON,
                new_setlist_path: router.newSetlistPath()
            }, {layout: 'layouts/application'} );
        }.bind(this))
        .done();
    },

    show: function( req, res, next ) {
        new Setlist({id: req.params.id})
        .fetch({
            withRelated: ['setlist_songs', 'setlist_songs.song']
        })
        .then(function (setlist) {
            var setlistSongs = setlist.related( 'setlist_songs' );
            var i = 0;
            var songs = setlistSongs.map(function (setlistSong) {
                i++;
                var songData = setlistSong.related('song').toJSON();
                songData.startKey = songData.dada_key;
                songData.data_key = setlistSong.get( 'data_key' );
                songData.position = setlistSong.position;
                songData.capo = setlistSong.capo;
                songData.setlist_song_id = setlistSong.id;
                songData.song_id = songData.id;
                songData.path = router.songPath(songData.id);
                songData.edit_path = router.editSongPath(songData.id);
                songData.delete_path = router.deleteSetlistSongPath(setlistSong.id);
                songData.title_dashes = songData.title.replace(/ /g, '-');
                songData.num = i;
                return songData;
            });
            var capoList = _.map(_.times(12, Number), function (num) {
                return num + 1;
            });
            this.render( req, res, 'setlists/show', {
                page_title: setlist.get( 'title' ),
                setlist_title: setlist.get( 'title' ),
                setlist_songs: setlistSongs.toJSON(),
                songs: songs,
                capo_list: capoList,
                javascripts: ['/js/setlist.js']
            }, {layout: 'layouts/application'});
        }.bind(this))
        .done();
    },

    slideshow: function( req, res, next ) {
        new Setlist({id: req.params.id})
        .fetch({
            withRelated: ['setlist_songs', 'setlist_songs.song']
        })
        .then(function (setlist) {
            var setlistSongs = setlist.related( 'setlist_songs' );
            var i = 0;
            var songs = setlistSongs.map(function (setlistSong) {
                i++;
                var song = setlistSong.related('song');
                var songData = song.toJSON();
                songData.slides = song.slides();
                songData.position = setlistSong.position;
                songData.setlist_song_id = setlistSong.id;
                songData.song_id = songData.id;
                songData.title_dashes = songData.title.replace(/ /g, '-');
                songData.num = i;
                return songData;
            });
            this.render( req, res, 'setlists/slideshow', {
                page_title: setlist.get( 'title' ),
                setlist_title: setlist.get( 'title' ),
                songs: songs,
                javascripts: ['/js/setlist.js']
            }, {layout: 'layouts/application'});
        }.bind(this))
        .done();
    },

    new: function( req, res, next ) {
        this.render( req, res, 'setlists/edit', {
            submit_path: router.setlistsPath()
        }, {layout: 'layouts/application'});
    },

    create: function( req, res, next ) {
        new Setlist(req.body)
        .save()
        .then(function (setlist) {
            res.redirect(router.setlistsPath());
        })
        .done();
    },

    edit: function( req, res, next ) {
        var id = req.params.id;
        new Setlist({id: id})
        .fetch()
        .then(function (setlist) {
            this.render( req, res, 'setlists/edit', {
                submit_path: router.setlistPath(id),
                page_title: setlist.get( 'title' ),
            }, {layout: 'layouts/application'});
        }.bind(this))
        .done();
    },

    update: function( req, res, next ) {
        var id = req.params.id;
        new Setlist({id: id})
        .fetch()
        .then(function (setlist) {
            return setlist.save(req.body, {update: true});
        }.bind(this))
        .then(function () {
            res.redirect(router.setlistsPath());
        }.bind(this))
        .done();
    },

    delete: function( req, res, next ) {
        var id = req.params.id;
        new Setlist({id: id})
        .fetch()
        .then(function (setlist) {
            return setlist.destroy();
        })
        .then(function () {
            res.send(200);
        })
        .done();
    }
});

module.exports = SetlistsController;
