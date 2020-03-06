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
                i++;
                return _.extend({}, song.attributes, {
                    num: i,
                    path: router.songPath(id),
                    edit_path: router.editSongPath(id),
                    setlists: song.getSetlists()
                });
            });

            return new Setlist().orderBy('created_at', 'DESC').fetchAll();
        })
        .then(function (setlists) {
            this.renderWithJSON( req, res, {
                paths: {
                    home: router.rootPath(),
                    songs: router.songsPath(),
                    setlists: router.setlistsPath(),
                    new_song: router.newSongPath()
                },
                songs: songsJSON,
                setlists: setlists.toJSON()
            });
        }.bind(this))
        .done();
    },

    show: function( req, res, next ) {
        var capoList = _.map(_.times(12, Number), function (num) {
            return num + 1;
        });

        new Song({id: req.params.id})
        .fetch()
        .then(function (song) {
            this.renderWithJSON( req, res, {
                paths: {
                    home: router.rootPath(),
                    songs: router.songsPath(),
                    setlists: router.setlistsPath(),
                    edit: router.editSongPath(req.params.id)
                },
                song: {
                    capo: song.get('capo'),
                    capo_list: capoList,
                    page_title: song.get( 'title' ),
                    title: song.get( 'title' ),
                    song_title_dashes: song.get('title').replace(/ /g, '-'),
                    text: song.get( 'text' ),
                    start_key: song.get('data_key'),
                    data_key: song.get( 'data_key' ),
                    artist: song.get( 'artist' ),
                    license: song.get( 'license' ),
                }
            });
        }.bind(this))
        .done();
    },

    new: function( req, res, next ) {
        this.render( req, res, 'songs/edit', {
            submit_path: router.songsPath()
        }, {layout: 'layouts/application'});
    },

    create: function( req, res, next ) {
        new Song(req.body)
        .save()
        .then(function (song) {
            res.redirect(router.songsPath());
        })
        .done();
    },

    edit: function( req, res, next ) {
        var id = req.params.id;
        new Song({id: id})
        .fetch()
        .then(function (song) {
            console.log( song.get('title') );
            this.render( req, res, 'songs/edit', {
                submit_path: router.songPath(id),
                page_title: song.get( 'title' ),
                song_title: song.get( 'title' ),
                text: song.get( 'text' ),
                data_key: song.get( 'data_key' ),
                artist: song.get( 'artist' ),
                license: song.get( 'license' )
            }, {layout: 'layouts/application'});
        }.bind(this))
        .done();
    },

    update: function( req, res, next ) {
        var id = req.params.id;
        new Song({id: id})
        .fetch()
        .then(function (song) {
            return song.save(req.body, {update: true});
        }.bind(this))
        .then(function () {
            res.redirect(router.songsPath());
        }.bind(this))
        .done();
    },

    delete: function( req, res, next ) {
        var id = req.params.id;
        new Song({id: id})
        .fetch()
        .then(function (song) {
            return song.destroy();
        })
        .then(function () {
            res.send(200);
        })
        .done();
    }
});

module.exports = SongsController;
