var React = require('react');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var setlist = localData.setlist;

var SetlistsShow = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        return (
            <div className="setlister-react-setlists-show">
                <div className="setlister-react-setlist-summary">
                    <div className="setlister-react-setlist-title">
                        {setlist.title || setlist.date}
                    </div>
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
                            return <div className="setlister-react-setlist-summary-row setlister-row">
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
                    return <div id={song.title_dashes} className="setlister-react-song">
                        <h2 className="setlister-react-song-title">
                            {song.title}
                            {song.capo && 'Capo: ' + song.capo}
                        </h2>
                        <pre className="setlister-react-song-text">{song.text}</pre>
                        <div className="setlister-react-song-footer" />
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = SetlistsShow;
