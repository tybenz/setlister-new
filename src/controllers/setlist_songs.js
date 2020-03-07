var ApplicationController = require( './application' );
var SetlistSong = require( '../models/setlist_song' );
var Setlist = require( '../models/setlist' );

var SetlistSongsController = ApplicationController.extend({
    before: [
        { name: 'authorize' }
    ],

    authorize: function ( req, res, next ) {
        if ( req.user ) {
            next();
        } else {
            req.flash( 'error', 'Not authorized' );
            res.send( 401 );
        }
    },

    create: function( req, res, next ) {
        new Setlist(req.body.setlist_id)
        .fetch({withRelated: ['setlist_songs', {
            'setlist_songs': function (qb) {
                qb.orderBy('position', 'DESC');
            }
        }]})
        .then(function (setlist) {
            var setlistSongs = setlist.related('setlist_songs');
            var lastSong = setlistSongs.at(0);
            var position = ( lastSong ? lastSong.get('position') : 0 ) + 1;

            return new SetlistSong({
                song_id: req.body.song_id,
                setlist_id: req.body.setlist_id,
                position: position,
                data_key: req.body.data_key
            })
            .save();
        })
        .then(function (setlistSong) {
            res.send(200);
        })
        .done();
    },

    update: function( req, res, next ) {
        new SetlistSong({ id: req.params.id })
        .fetch()
        .then(function (setlistSong) {
            setlistSong.set('data_key', req.body.data_key);
            setlistSong.set('capo', req.body.capo);
            setlistSong.set('position', req.body.position);
            return setlistSong.save();
        })
        .then(function (setlistSong) {
            res.send(200);
        })
        .done();
    },

    delete: function( req, res, next ) {
        var id = req.params.id;
        new SetlistSong({id: id})
        .fetch()
        .then(function (setlistSong) {
            return setlistSong.destroy();
        })
        .then(function () {
            res.sendStatus(200);
        })
        .done();
    }
});

module.exports = SetlistSongsController;
