var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
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
            var newActiveSong = activeSong - 1;
            if (newActiveSong < 0) {
                newActiveSong = setlist.songs.length - 1;
            }
            this.setState({ activeSong: newActiveSong });
        }
        if (evt.keyCode === 40 && this.props.stageMode) {
            var newActiveSong = activeSong + 1;
            if (newActiveSong > setlist.songs.length - 1) {
                newActiveSong = 0;
            }
            this.setState({ activeSong: newActiveSong });
        }
        if (evt.keyCode === 27 && this.props.stageMode) {
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

    render: function () {
        var tableTitles = ['Title', 'Key', 'Capo', 'Actions']
        var rows = setlist.songs.map(function (song) {
            return [song.title, song.data_key, song.capo, ''];
        });
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
                        <div className="setlister-react-stage-mode-button" title="Music stand mode" onClick={this.onStageModeOn}><span className="icon-laptop" /></div>
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
