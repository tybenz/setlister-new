var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var setlist = localData.setlist;

var SetlistsShow = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        var tableTitles = ['Title', 'Key', 'Capo', 'Actions']
        var rows = setlist.songs.map(function (song) {
            return [song.title, song.data_key, song.capo, ''];
        });
        var cellClassNames = ['setlist-song-title', 'setlist-song-key', 'setlist-song-capo', 'setlist-song-actions'];

        return (
            <div className="setlister-react-setlists-show">
                <div className="setlister-react-setlist-title">
                    {setlist.title || setlist.date}
                </div>
                <Table titles={tableTitles} rows={rows} cellClassNames={cellClassNames} />
                {setlist.songs.map(function (song) {
                    return <Song key={'song-' + song.position} song={song} />;
                })}
            </div>
        );
    }
});

module.exports = SetlistsShow;
