var React = require('react');
var createReactClass = require('create-react-class');
var maxLines = 58;

var numbers = { 'Ab': 11, 'A': 0, 'A#': 1, 'Bb': 1, 'B': 2, 'C': 3, 'C#': 4, 'Db': 4, 'D': 5, 'D#': 6, 'Eb': 6, 'E': 7, 'F': 8, 'F#': 9, 'Gb': 9, 'G': 10, 'G#': 11 };
var notes = {
    sharps: [ 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#' ],
    flats: [ 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab' ]
};
var chordRegex = /\b([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*)(?=[^A-z])/g;
var transpose = function( newKey, oldKey, note ) {
    //This function takes in a chord (it can be complex e.g. G/F#)
    //It shifts the chord according to some offset and returns the result
    var dub = note.split('/');

    for ( var idx in dub ) {
        var notesArr = newKey.match( /b/g ) ? notes.flats : notes.sharps,
            regex = /([A-G])?(b|#)?(.*)?/g,
            extra = dub[ idx ].replace( regex, '$3' ),
            root_note = dub[ idx ].replace( regex, '$1$2' ),
            new_num = numbers[ root_note ] + ( numbers[ newKey ] - numbers[ oldKey ] ),
            new_note = new_num >= 0 ? notesArr[ new_num % 12 ] : notesArr[ new_num + 12 ];

            dub[ idx ] = new_note + extra;
    }

    return dub.join('/');
};

var Song = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    onTextChange: function (evt) {
        this.props.onTextChange(evt.target.value);
    },

    onTitleChange: function (evt) {
        this.props.onTitleChange(evt.target.value);
    },

    render: function () {
        var isEdit = this.props.isEdit;
        var song = this.props.song;
        var oldKey = song.start_key;
        var newKey = song.data_key;

        var div = document.createElement("div");
        div.innerHTML = song.text;
        var cleanText = div.textContent || div.innerText || "";
        textWithMarkup = cleanText.replace(chordRegex, function(match) {
            var chord = match;
            if (newKey && oldKey) {
                chord = transpose(newKey, oldKey, match);
            }
            return '<strong>' + chord + '</strong>';
        });
        textWithMarkup = textWithMarkup.replace(/\b_(.*)(?=[^A-z])/g, '$1');

        var sepRegex = /[A-Z]+\s*[A-Z0-9]*\:/g;
        var chunks = [];
        var match;
        var lastIndex = 0;
        while (match = sepRegex.exec(textWithMarkup)) {
            var str = textWithMarkup.substring(lastIndex, match.index);
            if (str) {
                chunks.push(str);
            }
            lastIndex = match.index;
        }
        var str = textWithMarkup.substring(lastIndex);
        if (str) {
            chunks.push(str);
        }

        var lineTotals = [];
        chunks.forEach(function (chunk, i) {
            var prevLineTotal = lineTotals[i - 1];
            lineTotals.push(
                chunk.split(/\n/).length - 1 +
                    (prevLineTotal || 0) +
                    (i === chunks.length - 1 ? 1 : 0)
            );
        });
        var lastChunkIndex = chunks.length - 1;
        for (var i = lineTotals.length - 1; i >= 0; i--) {
            var lineTotal = lineTotals[i];
            if (lineTotal <= maxLines) {
                lastChunkIndex = i;
                break;
            }
        }
        var columnsOfText = [];
        if (lastChunkIndex) {
            columnsOfText[0] = chunks.slice(0, lastChunkIndex + 1).join('');
            columnsOfText[1] = chunks.slice(lastChunkIndex + 1).join('');
        }

        var className = 'setlister-react-song';
        if (this.props.active) {
            className += ' is-active';
        }

        return <div id={song.title_dashes} className={className}>
            {isEdit
                ? <input autoFocus type="text" className="setlister-react-song-title" onChange={this.onTitleChange} defaultValue={song.title} />
                : <h2 className="setlister-react-song-title">
                    {song.title}
                    {song.capo && song.capo > 0 && <span className="setlist-react-song-capo">Capo: {song.capo}</span>}
                </h2>}
            {isEdit
                ? <div><textarea className="setlister-react-song-text" onChange={this.onTextChange} defaultValue={song.text} /></div>
                : <pre className="setlister-react-song-text"><div className="setlister-react-song-column" dangerouslySetInnerHTML={{
                    __html:  columnsOfText[0]
                }} /><div className="setlister-react-song-column" dangerouslySetInnerHTML={{
                    __html:  columnsOfText[1]
                }} /></pre>}
        </div>;
    }
});

module.exports = Song;
