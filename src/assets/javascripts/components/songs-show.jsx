var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
var song = localData.song;

var SongsShow = createReactClass({
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
        var mainClassName = 'songer-react-songs-show';

        return (
            <div className={mainClassName}>
                <Song song={song} />
            </div>
        );
    }
});

module.exports = SongsShow;
