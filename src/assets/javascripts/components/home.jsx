var _ = require('lodash');
var React = require('react');
var Song = require('./song.jsx');
var SongCard = require('./song-card.jsx');
var Table = require('./table.jsx');
var KeySelector = require('./key-selector.jsx');
var CapoSelector = require('./capo-selector.jsx');
var moment = require('moment');
var createReactClass = require('create-react-class');
var localData = require('../local-data');
var recentSetlists = localData.recent_setlists;
var setlistsMinusNextMax = 10;
var setlistsMinusNext = [];
var recentSongs = [];
var nextSetlist;

var chordRegex = /\b([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus4|sus2|sus)*)(?=[^A-z])/g;

var Home = createReactClass({
    getInitialState: function (props) {
        var today = moment();
        var found = false;
        recentSetlists.forEach(function (setlist) {
            var date = moment(setlist.date);
            if (date >= today && date.diff(today, 'days') < 7 && !found) {
                nextSetlist = setlist;
                found = true;
            } else if (setlistsMinusNext.length < setlistsMinusNextMax) {
                setlistsMinusNext.push(setlist);
            }

            if (date < today) {
                recentSongs = recentSongs.concat(setlist.songs);
            }
        });
        recentSongs = _.uniqBy(recentSongs, function (song) {
            return song.id;
        });

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
        return (
            <div className="setlister-react-home">
                {nextSetlist &&
                    <a href={'/setlists/' + nextSetlist.id} className="setlister-react-home-card-section">
                        <div className="setlister-react-home-header">
                            <span className="setlister-react-home-header-link">This week</span>
                            <span className="setlister-react-home-header-subtitle">({localData.getSetlistTitle(nextSetlist)})</span>
                        </div>
                        <div className="setlister-react-card-list">
                            <div className="setlister-react-card-list-inner">
                                {nextSetlist.songs.map(function (song, i) {
                                    return <SongCard key={'next-setlister-song-' + i} song={song} />;
                                }.bind(this))}
                            </div>
                        </div>
                    </a>}
                <div className="setlister-react-home-card-section">
                    <div className="setlister-react-home-header">
                        <a className="setlister-react-home-header-link" href={localData.getPath('songs')}>Recent songs</a>
                        <a className="setlister-react-home-header-see-more" href={localData.getPath('songs')}>
                            See more <span className="icon-chevron-right icon" />
                        </a>
                    </div>
                    <div className="setlister-react-card-list">
                        <div className="setlister-react-card-list-inner">
                            {recentSongs.map(function (song, i) {
                                return <SongCard isSongLink={true} key={'next-setlister-song-' + i} song={song} />;
                            }.bind(this))}
                        </div>
                    </div>
                </div>
                <div className="setlister-react-home-header">
                    <a className="setlister-react-home-header-link" href={localData.getPath('setlists')}>Other setlists</a>
                    <a className="setlister-react-home-header-see-more" href={localData.getPath('setlists')}>
                        See more <span className="icon-chevron-right icon" />
                    </a>
                </div>
                <Table
                    titles={['Name', 'Actions']}
                    cellClassNames={['setlist-song-title', 'setlist-song-actions']}
                    rows={setlistsMinusNext.map(function (setlist) {
                        return [
                            <a href={setlist.path}>{localData.getSetlistTitle(setlist)}</a>,
                            <div className="setlister-react-actions">
                                <a className="icon-play-circle action" title="Start slideshow" href={setlist.slideshow_path}></a>
                                <a className="icon-pencil action" title="Edit song" href={setlist.edit_path}></a>
                                <a className="icon-remove action" title="Delete song" data-method="delete" data-confirm="Are you sure?" href={setlist.delete_path}></a>
                            </div>
                        ];
                    })}
                />
            </div>
        );
    }
});

module.exports = Home;
