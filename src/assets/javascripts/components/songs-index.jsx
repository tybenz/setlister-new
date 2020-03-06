var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var songs = localData.songs;

var SongsIndex = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    componentDidMount: function () {
        document.body.addEventListener('keydown', this.onKeyDown);
    },

    componentWillUnmount: function () {
        document.body.removeEventListener('keydown', this.onKeyDown);
    },

    onKeyDown: function (evt) {
    },

    render: function () {
        var tableTitles = ['Name', 'Actions']
        var rows = songs.map(function (song) {
            return [
                <a href={song.path}>{song.title || song.date}</a>,
                ''
            ];
        });
        var cellClassNames = ['setlist-song-title', 'setlist-song-actions'];
        var mainClassName = 'setlister-react-songs-index';

        return (
            <div className={mainClassName}>
                <div className="setlister-react-page-title">Songs</div>
                <Table titles={tableTitles} rows={rows} cellClassNames={cellClassNames} showControls={true} />
            </div>
        );
    }
});

module.exports = SongsIndex;
