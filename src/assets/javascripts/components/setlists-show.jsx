var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var KeySelector = require('./key-selector.jsx');
var CapoSelector = require('./capo-selector.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var setlist = localData.setlist;

var SetlistsShow = createReactClass({
    getInitialState: function (props) {
        return { activeSong: 0 };
    },

    componentDidMount: function () {
        document.body.addEventListener('keydown', this.onKeyDown);
    },

    componentWillUnmount: function () {
        document.body.removeEventListener('keydown', this.onKeyDown);
    },

    onKeyDown: function (evt) {
        var activeSong = this.state.activeSong;
        if (evt.keyCode === 38 && this.props.stageMode) {
            evt.preventDefault();
            var newActiveSong = activeSong - 1;
            if (newActiveSong < 0) {
                newActiveSong = setlist.songs.length - 1;
            }
            this.setState({ activeSong: newActiveSong });
        }
        if (evt.keyCode === 40 && this.props.stageMode) {
            evt.preventDefault();
            var newActiveSong = activeSong + 1;
            if (newActiveSong > setlist.songs.length - 1) {
                newActiveSong = 0;
            }
            this.setState({ activeSong: newActiveSong });
        }
        if (evt.keyCode === 27 && this.props.stageMode) {
            evt.preventDefault();
            this.props.onStageModeOff();
        }
    },

    onStageModeOn: function (evt) {
        evt.preventDefault();

        this.props.onStageModeOn();
        this.setState({ activeSong: 0 });
    },

    onStageModeOff: function (evt) {
        evt.preventDefault();

        this.props.onStageModeOff();
    },

    onKeyChange: function (index, key) {
        var song = setlist.songs[index];
        if (song) {
            song.data_key = key;
            this.forceUpdate();
        }
    },

    onCapoChange: function (index, capo) {
        var song = setlist.songs[index];
        if (song) {
            song.capo = capo;
            this.forceUpdate();
        }
    },

    render: function () {
        var tableTitles = ['Title', 'Key', 'Capo', 'Actions']
        var rows = setlist.songs.map(function (song, i) {
            return [
                song.title,
                <KeySelector defaultValue={song.data_key} onChange={function (note) {
                    this.onKeyChange(i, note);
                }.bind(this)} />,
                <CapoSelector defaultValue={song.capo} onChange={function (num) {
                    this.onCapoChange(i, num);
                }.bind(this)} />,
                <div className="setlister-react-actions">
                    <a className="icon-eye-open action" title="View song" href={song.path}></a>
                    <a className="icon-pencil action" title="Edit song" href={song.edit_path}></a>
                    <a className="icon-remove action" title="Remove from setlist" data-method="delete" data-confirm="Are you sure?" href={song.delete_path}></a>
                </div>
            ];
        }.bind(this));
        var cellClassNames = ['setlist-song-title', 'setlist-song-key', 'setlist-song-capo', 'setlist-song-actions'];
        var activeSong = this.state.activeSong;
        var isInStageMode = this.props.stageMode;
        var mainClassName = 'setlister-react-setlists-show';
        if (isInStageMode) {
            mainClassName += ' stage-mode';
        }

        return (
            <div className={mainClassName}>
                {!isInStageMode &&
                    <div className="setlister-react-page-title">
                        {setlist.title || setlist.date}
                        <div className="setlister-react-page-action" title="Music stand mode" onClick={this.onStageModeOn}><span className="icon icon-laptop" /></div>
                    </div>}
                {!isInStageMode &&
                    <Table titles={tableTitles} rows={rows} cellClassNames={cellClassNames} />}
                {setlist.songs.map(function (song, i) {
                    return <Song key={'song-' + song.position} song={song} active={i === activeSong} />;
                })}
            </div>
        );
    }
});

module.exports = SetlistsShow;
