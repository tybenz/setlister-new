var React = require('react');
var createReactClass = require('create-react-class');
var maxLines = 55;

var chordRegex = /\b([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*)(?=[^A-z])/g;

var SongCard = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        var isSongLink = this.props.isSongLink;
        var song = this.props.song;

        var div = document.createElement("div");
        div.innerHTML = song.text;
        var cleanText = div.textContent || div.innerText || "";
        textWithMarkup = cleanText.replace(chordRegex, function(chord) {
            return '<strong>' + chord + '</strong>';
        });
        textWithMarkup = textWithMarkup.replace(/\b_(.*)(?=[^A-z])/g, '$1');

        if (isSongLink) {
            return <a href={'/songs/' + song.id } className="setlister-react-card">
                <div className="setlister-react-card-preview" dangerouslySetInnerHTML={{
                    __html: textWithMarkup
                }} />
                <div className="setlister-react-card-info">
                    <div className="setlister-react-card-title">
                        {song.title}
                    </div>
                </div>
            </a>;
        }

        return <div className="setlister-react-card">
            <div className="setlister-react-card-preview" dangerouslySetInnerHTML={{
                __html: textWithMarkup
            }} />
            <div className="setlister-react-card-info">
                <div className="setlister-react-card-title">
                    {song.title}
                </div>
            </div>
        </div>;
    }
});

module.exports = SongCard;
