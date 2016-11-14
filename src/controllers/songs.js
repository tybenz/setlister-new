var ApplicationController = require( './application' );
var Song = require( '../models/song' );

var SongsController = ApplicationController.extend({
    index: function( req, res, next ) {
        new Song()
        .orderBy('title', 'ASC')
        .fetchAll()
        .then(function (songs) {
            var i = 1;
            var songsJSON = songs.map(function (song) {
                song.attributes.num = i;
                return song.attributes;
            });
            this.render( res, 'songs/index', {
                songs: songsJSON
            }, {layout: 'layouts/application'} );
        }.bind(this));
    },
});

module.exports = SongsController;
