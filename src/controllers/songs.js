var ApplicationController = require( './application' );
var Song = require( '../models/song' );
var Setlist = require( '../models/setlist' );

var sendNotFound = function (next, shouldThrow) {
    var notFoundErr = new Error('Not found');
    notFoundErr.status = 404;
    if (shouldThrow) {
        throw notFoundErr;
    }
    next(notFoundErr);
};

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
        .catch(function (err) {
            next(err);
        });
    },

    show: function( req, res, next ) {
        // getIdParam sends 404 error if id is not valid number
        var id = this.getIdParam(req, res, next);
        if (id) {
            new Song({id: id})
            .fetch()
            .catch(function (err) {
                logger({ type: 'SONG_SHOW_ERROR', message: 'Could not fetch song with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (song) {
                this.renderWithJSON( req, res, {
                    paths: {
                        edit: router.editSongPath(id)
                    },
                    song: {
                        id: id,
                        path: router.songPath(id),
                        capo: song.get('capo'),
                        page_title: song.get( 'title' ),
                        title: song.get( 'title' ),
                        tags: song.get('tags'),
                        song_title_dashes: encodeURIComponent(song.get('title').toLowerCase().replace(/ /g, '-').replace(/[\(\)\']/g, '')),
                        text: song.get( 'text' ),
                        start_key: song.get( 'data_key' ),
                        data_key: song.get( 'data_key' ),
                        artist: song.get( 'artist' ),
                        license: song.get( 'license' ),
                    }
                });
            }.bind(this))
            .catch(function (err) {
                next(err);
            });
        }
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
        .catch(function (err) {
            next(err);
        });
    },

    edit: function( req, res, next ) {
        // getIdParam sends 404 error if id is not valid number
        var id = this.getIdParam(req, res, next);
        if (id) {
            new Song({id: id})
            .fetch()
            .catch(function (err) {
                logger({ type: 'SONG_EDIT_ERROR', message: 'Could not fetch song with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (song) {
                this.renderWithJSON( req, res, {
                    paths: {
                        edit: router.editSongPath(id)
                    },
                    song: {
                        id: id,
                        path: router.songPath(id),
                        capo: song.get('capo'),
                        page_title: song.get( 'title' ),
                        title: song.get( 'title' ),
                        tags: song.get('tags'),
                        song_title_dashes: encodeURIComponent(song.get('title').toLowerCase().replace(/ /g, '-').replace(/[\(\)\']/g, '')),
                        text: song.get( 'text' ),
                        start_key: song.get( 'data_key' ),
                        data_key: song.get( 'data_key' ),
                        artist: song.get( 'artist' ),
                        license: song.get( 'license' ),
                    }
                });
            }.bind(this))
            .catch(function (err) {
                next(err);
            });
        }
    },

    update: function( req, res, next ) {
        // getIdParam sends 404 error if id is not valid number
        var id = this.getIdParam(req, res, next);
        if (id) {
            new Song({id: id})
            .fetch()
            .catch(function (err) {
                logger({ type: 'SONG_UPDATE_ERROR', message: 'Could not fetch song with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (song) {
                Object.keys(req.body).forEach(function (key) {
                    song.set(key, req.body[key]);
                });
                return song.save();
            }.bind(this))
            .then(function () {
                res.redirect(router.songsPath());
            }.bind(this))
            .catch(function (err) {
                next(err);
            });
        }
    },

    delete: function( req, res, next ) {
        // getIdParam sends 404 error if id is not valid number
        var id = this.getIdParam(req, res, next);
        if (id) {
            new Song({id: id})
            .fetch({
                withRelated: [ 'setlist_songs' ]
            })
            .catch(function (err) {
                logger({ type: 'SONG_DELETE_ERROR', message: 'Could not fetch song with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (song) {
                return song.destroy();
            })
            .then(function () {
                res.sendStatus(200);
            })
            .catch(function (err) {
                next(err);
            });
        }
    }
});

module.exports = SongsController;
