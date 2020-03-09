var _ = require('lodash');
var BaseModel = require( './model' );

var Song = BaseModel.extend({
    tableName: 'songs',

    setlist_songs: function() {
        var SetlistSong = require( './setlist_song' );
        return this.hasMany( SetlistSong );
    },

    slides: function () {
        chord_regex = /\b([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus4|sus2|sus)*)(?=[^A-z])/g

        var slides = this.get('text')
            .replace( chord_regex, '' )
            .replace( /\//g, '' )
            .replace( /\([^\(\)]*\)/g, '' )
            .replace( /_/g, '' )
            .replace( /\s*\r\n/g, '\n' )
            .replace( /\s*\n/g, '\n' )
            .replace( /\r\n[\s]*\r\n/g, '\n' )
            .replace( /\n[\s]*\n/g, '\n' )
            .split( /[A-Z\s0-9]+\:/ )
            .map(function (slide) {
                return slide.replace(/^\s*/, '').replace(/\s*$/, '');
            });

        slides = slides.reduce(function (acc, slide) {
            if (slide) {
                acc.push(slide);
            }

            return acc;
        }, []);

        return slides;
    },

    getSetlists: function () {
        var props = this.toJSON();
        var setlistSongs = this.related('setlist_songs');

        var setlists = [];
        var setlists = setlistSongs.map(function (setlistSong) {
            return setlistSong.related('setlist');
        });
        return _.uniqBy(setlists, function (setlist) {
            return setlist.id;
        });
    },

    destroy: function () {
        var setlistSongs = this.related('setlist_songs');

        return Promise.all(setlistSongs.map(function (setlistSong) {
            return setlistSong.destroy();
        }))
        .then(function () {
            return BaseModel.prototype.destroy.call(this);
        }.bind(this));
    }
});

module.exports = Song;
