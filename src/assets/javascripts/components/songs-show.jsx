var React = require('react');
var Song = require('./song.jsx');
var KeySelector = require('./key-selector.jsx');
var CapoSelector = require('./capo-selector.jsx');
var createReactClass = require('create-react-class');
var localData = require('../local-data');
var song = localData.song;
var paths = localData.paths;

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

    onKeyChange: function (key) {
        if (song) {
            song.data_key = key;
            this.forceUpdate();
        }
    },

    onCapoChange: function (capo) {
        if (song) {
            song.capo = capo;
            this.forceUpdate();
        }
    },

    onTitleChange: function (title) {
        if (song) {
            song.title = title;
            this.forceUpdate();
        }
    },

    onTextChange: function (text) {
        if (song) {
            song.text = text;
            this.forceUpdate();
        }
    },

    onSaveClick: function () {
        window.fetch(
            song.id ? song.path : localData.getPath('songs'),
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data_key: song.data_key,
                    capo: song.capo,
                    title: song.title,
                    text: song.text
                })
            }
        ).then(function (response) {
            if (response.status === 200) {
                window.location = song.path ? song.path : localData.getPath('songs');
            } else {
                console.error(new Error('Non-200 response from POST ' + song.path + ' ' + response.status));
                window.location = '/auth_error';
            }
        }).catch(function (err) {
            console.error(err);
            window.location = '/auth_error';
        });
    },

    render: function () {
        var isEdit = this.props.isEdit;
        var mainClassName = 'setlister-react-songs-show';

        return (
            <div className={mainClassName}>
                <div className="setlister-react-song-controls">
                    <span className="setlister-react-song-key-select">
                        <span className="setlister-react-field-label">Key:</span>
                        <KeySelector onChange={this.onKeyChange} defaultValue={song.data_key} />
                    </span>
                    <span className="setlister-react-song-capo-select">
                        <span className="setlister-react-field-label">Capo:</span>
                        <CapoSelector onChange={this.onCapoChange} defaultValue={song.capo} />
                    </span>
                    <span className="setlister-react-song-buttons">
                        {isEdit
                            ? <a className="setlister-react-button" onClick={this.onSaveClick}>
                                Save
                            </a>
                            : <a href={paths.edit} className="setlister-react-button">
                                <span className="icon-pencil" /> Edit
                            </a>}
                    </span>
                </div>
                <Song song={song} isEdit={isEdit} onTextChange={this.onTextChange} onTitleChange={this.onTitleChange} />
            </div>
        );
    }
});

module.exports = SongsShow;
