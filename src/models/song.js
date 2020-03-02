var BaseModel = require( './model' );

var Song = BaseModel.extend({
    tableName: 'songs',

    slides: function () {
        chord_regex = /\b([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*)(?=[^A-z])/g

        var slides = this.get('text')
            .replace( chord_regex, '' )
            .replace( /\//g, '' )
            .replace( /\([^\(\)]*\)/g, '' )
            .replace( /_/g, '' )
            .replace( /\r\n[\s]*\r\n/g, "\n" )
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
    }
});

module.exports = Song;
