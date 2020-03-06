var React = require('react');
var Song = require('./song.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var setlist = localData.setlist;
var maxLines = 58;

var SetlistsShow = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        var chord_regex = /\b([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*)(?=[^A-z])/g;

        return (
            <div className="setlister-react-setlists-show">
                <div className="setlister-react-setlist-title">
                    {setlist.title || setlist.date}
                </div>
                <div className="setlister-react-setlist-summary">
                    <div className="setlister-react-setlist-summary-inner">
                        <div className="setlister-react-setlist-summary-row-header setlister-row">
                            <div className="setlister-react-setlist-summary-cell setlist-song-position" />
                            <div className="setlister-react-setlist-summary-cell setlist-song-title">
                                Title
                            </div>
                            <div className="setlister-react-setlist-summary-cell setlist-song-key">
                                Key
                            </div>
                            <div className="setlister-react-setlist-summary-cell setlist-song-capo">
                                Capo
                            </div>
                            <div className="setlister-react-setlist-summary-cell setlist-song-actions">
                                Actions
                            </div>
                        </div>
                        {setlist.songs.map(function (song) {
                            return <div key={'song-in-table-' + song.position} className="setlister-react-setlist-summary-row setlister-row">
                                <div className="setlister-react-setlist-summary-cell setlist-song-position">
                                    {song.position}
                                </div>
                                <div className="setlister-react-setlist-summary-cell setlist-song-title">
                                    {song.title}
                                </div>
                                <div className="setlister-react-setlist-summary-cell setlist-song-key">
                                    {song.data_key}
                                </div>
                                <div className="setlister-react-setlist-summary-cell setlist-song-capo">
                                    {song.capo}
                                </div>
                                <div className="setlister-react-setlist-summary-cell setlist-song-actions">
                                </div>
                            </div>;
                        })}
                    </div>
                </div>
                {setlist.songs.map(function (song) {
                    return <Song key={'song-' + song.position} song={song} />;
                })}
            </div>
        );
    }
});

module.exports = SetlistsShow;
