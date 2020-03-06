var React = require('react');
var createReactClass = require('create-react-class');
var maxLines = 58;

var Song = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        var song = this.props.song;
        var chord_regex = /\b([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*)(?=[^A-z])/g;

        var div = document.createElement("div");
        div.innerHTML = song.text;
        var cleanText = div.textContent || div.innerText || "";
        textWithMarkup = cleanText.replace(chord_regex, function(match) {
            return '<strong>' + match + '</strong>';
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

        return <div id={song.title_dashes} className="setlister-react-song">
            <h2 className="setlister-react-song-title">
                {song.title}
                {song.capo && <span className="setlist-react-song-capo">Capo: {song.capo}</span>}
            </h2>
            <pre className="setlister-react-song-text"><div className="setlister-react-song-column" dangerouslySetInnerHTML={{
                __html:  columnsOfText[0]
            }} /><div className="setlister-react-song-column" dangerouslySetInnerHTML={{
                __html:  columnsOfText[1]
            }} /></pre>
        </div>;
    }
});

module.exports = Song;
