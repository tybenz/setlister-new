var ApplicationController = require( './application' );
var Setlist = require( '../models/setlist' );
var SetlistSong = require( '../models/setlist_song' );
var Song = require( '../models/song' );

var SetlistsController = ApplicationController.extend({
    before: [
        { name: 'authorize', except: [ 'index', 'show', 'slideshow' ] }
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
        new Setlist()
        .orderBy('created_at', 'DESC')
        .fetchAll()
        .then(function (setlists) {
            if (req.get('Content-Type') == 'application/json') {
                res.send(setlists.toJSON());
                return;
            }

            setlists = setlists.map(function (setlist) {
                var id = setlist.get('id');
                return _.extend({}, setlist.attributes, {
                    path: router.setlistPath(id),
                    edit_path: router.editSetlistPath(id),
                    delete_path: router.setlistPath(id),
                    slideshow_path: router.setlistSlideshowPath(id)
                });
            });

            this.renderWithJSON( req, res, {
                paths: {
                    new_setlist: router.newSetlistPath()
                },
                setlists: setlists
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
            new Setlist({id: id})
            .fetch({
                withRelated: ['setlist_songs', 'setlist_songs.song']
            })
            .catch(function (err) {
                logger({ type: 'SETLIST_SHOW_ERROR', message: 'Could not fetch setlist with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (setlist) {
                var setlistSongs = setlist.related( 'setlist_songs' );
                var songs = setlistSongs.map(function (setlistSong) {
                    return setlistSong.fullSong();
                });
                songs = songs.sort(function (a, b) {
                    if (a.position < b.position) {
                        return -1;
                    }
                    if (a.position > b.position) {
                        return 1;
                    }
                    return 0;
                });

                this.renderWithJSON( req, res, {
                    setlist: {
                        id: setlist.id,
                        path: router.setlistPath(setlist.id),
                        title: setlist.get('title'),
                        date: setlist.get('date'),
                        songs: songs,
                    }
                });
            }.bind(this))
            .catch(function (err) {
                next(err);
            });
        }
    },

    slideshow: function( req, res, next ) {
        // getIdParam sends 404 error if id is not valid number
        var id = this.getIdParam(req, res, next);
        if (id) {
            if (req.query.full) {
                return this.render( req, res, 'setlists/slideshow', {
                    full: true,
                    javascripts: ['/js/slideshow.js']
                }, {layout: 'layouts/slideshow'});
            }

            new Setlist({id: id})
            .fetch({
                withRelated: ['setlist_songs', 'setlist_songs.song']
            })
            .catch(function (err) {
                logger({ type: 'SETLIST_SLIDESHOW_ERROR', message: 'Could not fetch setlist with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (setlist) {
                var setlistSongs = setlist.related( 'setlist_songs' );
                var songs = setlistSongs.map(function (setlistSong) {
                    var song = setlistSong.related('song');
                    var songData = song.toJSON();
                    songData.slides = song.slides();
                    songData.position = setlistSong.position;
                    songData.setlist_song_id = setlistSong.id;
                    songData.song_id = songData.id;
                    songData.title_dashes = encodeURIComponent(songData.title.toLowerCase().replace(/ /g, '-').replace(/[\(\)\']/g, ''));
                    return songData;
                });
                this.render( req, res, 'setlists/slideshow', {
                    page_title: setlist.get( 'title' ),
                    setlist_title: setlist.get( 'title' ),
                    songs: songs,
                    javascripts: ['/js/slideshow.js']
                }, {layout: 'layouts/slideshow'});
            }.bind(this))
            .catch(function (err) {
                next(err);
            });
        }
    },

    new: function( req, res, next ) {
        this.renderWithJSON( req, res, {
            paths: {
                submit: router.setlistsPath()
            }
        });
    },

    create: function( req, res, next ) {
        logger({ type: 'createSetlist', body: req.body });
        new Setlist(req.body)
        .save()
        .then(function (setlist) {
            res.sendStatus(200);
        })
        .catch(function (err) {
            next(err);
        });
    },

    edit: function( req, res, next ) {
        // getIdParam sends 404 error if id is not valid number
        var id = this.getIdParam(req, res, next);
        if (id) {
            new Setlist({id: id})
            .fetch({
                withRelated: ['setlist_songs', 'setlist_songs.song']
            })
            .catch(function (err) {
                logger({ type: 'SETLIST_EDIT_ERROR', message: 'Could not fetch setlist with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (setlist) {
                var setlistSongs = setlist.related( 'setlist_songs' );
                var songs = setlistSongs.map(function (setlistSong) {
                    return setlistSong.fullSong();
                });
                songs = songs.sort(function (a, b) {
                    if (a.position < b.position) {
                        return -1;
                    }
                    if (a.position > b.position) {
                        return 1;
                    }
                    return 0;
                });
                var capoList = _.map(_.times(12, Number), function (num) {
                    return num + 1;
                });

                this.renderWithJSON( req, res, {
                    setlist: {
                        id: setlist.id,
                        path: router.setlistPath(setlist.id),
                        title: setlist.get('title'),
                        date: setlist.get('date'),
                        songs: songs,
                    },
                    capoList: capoList
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
            new Setlist({id: id})
            .fetch()
            .catch(function (err) {
                logger({ type: 'SETLIST_UPDATE_ERROR', message: 'Could not fetch setlist with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (setlist) {
                return setlist.save(req.body, {update: true});
            }.bind(this))
            .then(function () {
                res.redirect(router.setlistsPath());
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
            new Setlist({id: id})
            .fetch({
                withRelated: [ 'setlist_songs' ]
            })
            .catch(function (err) {
                logger({ type: 'SETLIST_DELETE_ERROR', message: 'Could not fetch setlist with id of ' + id, error: err });
                throw this.getNotFound();
            }.bind(this))
            .then(function (setlist) {
                return setlist.destroy();
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

module.exports = SetlistsController;
