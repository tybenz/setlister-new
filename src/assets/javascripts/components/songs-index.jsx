var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var songs = localData.songs;
var paths = localData.paths;

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
                <div className="setlister-react-actions">
                    <a className="icon-pencil action" title="Edit song" href={song.edit_path}></a>
                    <a className="icon-remove action" title="Delete song" data-method="delete" data-confirm="Are you sure?" href={song.delete_path}></a>
                    <a className="icon-plus-sign action" title="Add to setlist" href="#"></a>
                </div>
            ];
        });
        var cellClassNames = ['setlist-song-title', 'setlist-song-actions'];
        var mainClassName = 'setlister-react-songs-index';

        return (
            <div className={mainClassName}>
                <div className="setlister-react-page-title">
                    Songs
                    <a className="setlister-react-page-action" title="Add song" href={paths.new_song}><span className="icon icon-plus" /></a>
                </div>
                <Table titles={tableTitles} rows={rows} cellClassNames={cellClassNames} showControls={true} />
            </div>
        );
    }
});

module.exports = SongsIndex;
