var React = require('react');
var createReactClass = require('create-react-class');
var utils = require('../utils');
var localData = require('../localData');
var paths = localData.paths;
var allSetlists = localData.all_setlists;

var AddToSetlist = createReactClass({
    getInitialState: function (props) {
        this.ref = React.createRef();
        return { indexLoading: -1, indexChecked: -1 };
    },

    componentDidMount: function () {
        this.updatePos();
    },

    componentDidUpdate: function (prevProps) {
        if (prevProps.songRef !== this.props.songRef) {
            this.updatePos();
        }
    },

    updatePos: function () {
        var songRef = this.props.songRef;
        if (songRef && songRef.current) {
            var refEl = songRef.current;
            var posEl = this.ref && this.ref.current;
            var pos = utils.positionElementAroundAnother(refEl, posEl, {
                position: 'left',
                positionOffset: 10,
                alignOffset: -20,
                align: 'top'
            });
            posEl.style.top = pos.y + 'px';
            posEl.style.left = pos.x + 'px';
        }
    },

    onSetlistClick: function (setlist, index) {
        var song = this.props.song;

        this.setState({ indexLoading: index });

        window.fetch(paths.new_setlist_song, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                song_id: song.id,
                data_key: song.data_key,
                setlist_id: setlist.id
            })
        })
        .then(function (response) {
            this.setState({ indexLoading: -1 });
            if (response.status === 200) {
                this.setState({ indexChecked: index });
            } else {
                console.error(new Error('Non-200 response from POST ' + song.path + ' ' + response.status));
            }
        }.bind(this)).catch(function (err) {
            this.setState({ indexLoading: -1 });
            console.error(err);
        }.bind(this));
    },

    render: function () {
        var indexLoading = this.state.indexLoading;
        var indexChecked = this.state.indexChecked;

        return (
            <div ref={this.ref} className="setlister-react-add-to-setlist">
                <div className="setlister-react-add-to-setlist-header">
                    Add To Setlist
                </div>
                <div className="setlister-react-add-to-setlist-items">
                    {allSetlists.map(function (setlist, i) {
                        var className = 'setlister-react-add-to-setlist-item'
                        if (i === indexLoading) {
                            className += ' is-loading';
                        }
                        if (i === indexChecked) {
                            className += ' is-checked';
                        }
                        return (
                            <div
                                key={'setlist-' + setlist.id}
                                className={className}
                                onClick={function (evt) {
                                    evt.preventDefault();
                                    this.onSetlistClick(setlist, i);
                                }.bind(this)}
                            >
                                {setlist.title || setlist.date}
                                <span className="icon icon-refresh" />
                                <span className="icon icon-ok" />
                            </div>
                        );
                    }.bind(this))}
                </div>
            </div>
        );
    }
});

module.exports = AddToSetlist;
