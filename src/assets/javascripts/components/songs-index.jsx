var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var AddToSetlist = require('./add-to-setlist.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var songs = localData.songs;
var paths = localData.paths;

var SongsIndex = createReactClass({
    getInitialState: function (props) {
        this.songRowRefs = songs.map(function () {
            return React.createRef();
        });

        return { songRef: undefined, addToSetlist: undefined };
    },

    componentDidMount: function () {
        document.body.addEventListener('keydown', this.onKeyDown);
    },

    componentWillUnmount: function () {
        document.body.removeEventListener('keydown', this.onKeyDown);
    },

    onKeyDown: function (evt) {
        if (evt.keyCode === 27) {
            this.setState({ addToSetlist: undefined, songRef: undefined });
        }
    },

    onAddToSetlistClick: function (song, index) {
        var ref = this.songRowRefs[index];
        this.setState({ addToSetlist: song, songRef: ref });
        document.body.addEventListener('click', this.onDocClick);
    },

    onDocClick: function (evt) {
        if (evt.target.className.search(/add-to-setlist/) === -1) {
            evt.preventDefault();
            evt.stopPropagation();
            this.setState({ addToSetlist: undefined, songRef: undefined });
            document.body.removeEventListener('click', this.onDocClick);
        }
    },

    render: function () {
        var addToSetlist = this.state.addToSetlist;
        var tableTitles = ['Name', 'Actions']
        var rows = songs.map(function (song, i) {
            return [
                <a href={song.path}>{song.title || song.date}</a>,
                <div className="setlister-react-actions">
                    <a className="icon-pencil action" title="Edit song" href={song.edit_path}></a>
                    <a className="icon-remove action" title="Delete song" data-method="delete" data-confirm="Are you sure?" href={song.delete_path}></a>
                    <a className="icon-plus-sign action" ref={this.songRowRefs[i]} title="Add to setlist" href="#" onClick={function (evt) {
                        evt.preventDefault();
                        this.onAddToSetlistClick(song, i);
                    }.bind(this)}></a>
                </div>
            ];
        }.bind(this));
        var cellClassNames = ['setlist-song-title', 'setlist-song-actions'];
        var mainClassName = 'setlister-react-songs-index';

        return (
            <div className={mainClassName}>
                <div className="setlister-react-page-title">
                    Songs
                    <a className="setlister-react-page-action" title="Add song" href={paths.new_song}><span className="icon icon-plus" /></a>
                </div>
                <Table titles={tableTitles} rows={rows} cellClassNames={cellClassNames} showControls={true} />
                {addToSetlist && <AddToSetlist song={addToSetlist} songRef={this.state.songRef} />}
            </div>
        );
    }
});

module.exports = SongsIndex;
