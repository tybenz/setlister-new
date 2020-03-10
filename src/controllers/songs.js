var ApplicationController = require( './application' );
var Song = require( '../models/song' );
var Setlist = require( '../models/setlist' );

var SongsController = ApplicationController.extend({
    before: [
        { name: 'authorize', except: [ 'index', 'show' ] }
    ],

    authorize: function ( req, res, next ) {
        if ( req.user ) {
            next();
        } else {
            req.flash( 'error', 'Not authorized' );
            res.redirect( router.rootPath() );
        }
    },

    index: function( req, res, next ) {
        var songsJSON;
        new Song()
        .orderBy('title', 'ASC')
        .fetchAll({
            withRelated: ['setlist_songs', 'setlist_songs.setlist']
        })
        .then(function (songs) {
            var i = 0;
            songsJSON = songs.map(function (song) {
                var id = song.get('id');
                return _.extend({}, song.attributes, {
                    path: router.songPath(id),
                    edit_path: router.editSongPath(id),
                    delete_path: router.songPath(id),
                    setlists: song.getSetlists()
                });
            });

            return new Setlist().orderBy('created_at', 'DESC').fetchAll();
        })
        .then(function (setlists) {
            this.renderWithJSON( req, res, {
                paths: {
                    new_song: router.newSongPath(),
                    new_setlist_song: router.createSetlistSongPath()
                },
                songs: songsJSON,
                all_setlists: setlists.toJSON()
            });
        }.bind(this))
        .done();
    },

    show: function( req, res, next ) {
        new Song({id: req.params.id})
        .fetch()
        .then(function (song) {
            this.renderWithJSON( req, res, {
                paths: {
                    edit: router.editSongPath(req.params.id)
                },
                song: {
                    id: song.id,
                    path: router.songPath(song.id),
                    capo: song.get('capo'),
                    page_title: song.get( 'title' ),
                    title: song.get( 'title' ),
                    tags: song.get('tags'),
                    song_title_dashes: song.get('title').replace(/ /g, '-'),
                    text: song.get( 'text' ),
                    start_key: song.get( 'data_key' ),
                    data_key: song.get( 'data_key' ),
                    artist: song.get( 'artist' ),
                    license: song.get( 'license' ),
                }
            });
        }.bind(this))
        .done();
    },

    new: function( req, res, next ) {
        this.renderWithJSON( req, res, {
            song: {}
        });
    },

    create: function( req, res, next ) {
        new Song(req.body)
        .save()
        .then(function (song) {
            res.send({ id: song.id });
        })
        .done();
    },

    edit: function( req, res, next ) {
        new Song({id: req.params.id})
        .fetch()
        .then(function (song) {
            this.renderWithJSON( req, res, {
                paths: {
                    edit: router.editSongPath(req.params.id)
                },
                song: {
                    id: song.id,
                    path: router.songPath(song.id),
                    capo: song.get('capo'),
                    page_title: song.get( 'title' ),
                    title: song.get( 'title' ),
                    tags: song.get('tags'),
                    song_title_dashes: song.get('title').replace(/ /g, '-'),
                    text: song.get( 'text' ),
                    start_key: song.get( 'data_key' ),
                    data_key: song.get( 'data_key' ),
                    artist: song.get( 'artist' ),
                    license: song.get( 'license' ),
                }
            });
        }.bind(this))
        .done();
    },

    update: function( req, res, next ) {
        var id = req.params.id;
        new Song({id: id})
        .fetch()
        .then(function (song) {
            Object.keys(req.body).forEach(function (key) {
                song.set(key, req.body[key]);
            });
            return song.save();
        }.bind(this))
        .then(function () {
            res.redirect(router.songsPath());
        }.bind(this))
        .done();
    },

    delete: function( req, res, next ) {
        var id = req.params.id;
        new Song({id: id})
        .fetch({
            withRelated: [ 'setlist_songs' ]
        })
        .then(function (song) {
            return song.destroy();
        })
        .then(function () {
            res.sendStatus(200);
        })
        .done();
    }
});

module.exports = SongsController;
