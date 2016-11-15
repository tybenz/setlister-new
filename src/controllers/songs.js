var ApplicationController = require( './application' );
var Song = require( '../models/song' );

var SongsController = ApplicationController.extend({
    index: function( req, res, next ) {
        new Song()
        .orderBy('title', 'ASC')
        .fetchAll()
        .then(function (songs) {
            var i = 0;
            var songsJSON = songs.map(function (song) {
                var id = song.get('id');
                i++;
                return _.extend({}, song.attributes, {
                    num: i,
                    path: router.songPath(id),
                    edit_path: router.editSongPath(id)
                });
            });
            this.render( res, 'songs/index', {
                songs: songsJSON,
                new_song_path: router.newSongPath(),
                javascripts: ['/js/setlists.js']
            }, {layout: 'layouts/application'} );
        }.bind(this))
        .done();
    },

    show: function( req, res, next ) {
        new Song({id: req.params.id})
        .fetch()
        .then(function (song) {
            console.log( song.get('title') );
            this.render( res, 'songs/show', {
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

    new: function( req, res, next ) {
        this.render( res, 'songs/edit', {
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
            this.render( res, 'songs/edit', {
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
