var React = require('react');
var _ = require('lodash');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var TagList = require('./tag-list.jsx');
var AddToSetlist = require('./add-to-setlist.jsx');
var createReactClass = require('create-react-class');
var moment = require('moment');
var localData = require('../local-data');
var paths = localData.paths;

var SongsIndex = createReactClass({
    getInitialState: function () {
        this.songRowRefs = localData.songs.map(function () {
            return React.createRef();
        });

        return {
            songRef: undefined,
            addToSetlist: undefined,
            tagFilter: undefined,
            sortBy: 'alphabetical'
        };
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
        if (localData.is_signed_in) {
            this.setState({ addToSetlist: song, songRef: ref });
            document.body.addEventListener('click', this.onDocClick);
        } else {
            window.location = '/auth_error';
        }
    },

    onDocClick: function (evt) {
        if (evt.target.className.search(/add-to-setlist/) === -1) {
            evt.preventDefault();
            evt.stopPropagation();
            this.setState({ addToSetlist: undefined, songRef: undefined });
            document.body.removeEventListener('click', this.onDocClick);
        }
    },

    getSongProximity: function (song) {
        if (!song.setlists) {
            return undefined;
        }

        var setlists = song.setlists.sort(function (setlistA, setlistB) {
            var dateA = localData.getSetlistDate(setlistA);
            var dateB = localData.getSetlistDate(setlistB);
            if (!dateA && dateB) return 1;
            if (dateA && !dateB) return -1;
            if (!dateA && !dateB) return 0;
            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;
            return 0;
        });

        var mostRecentSetlist = setlists[0];

        if (mostRecentSetlist) {
            var date = localData.getSetlistDate(mostRecentSetlist);
            if (date) {
                var currentDistanceFromSunday = moment().diff(moment().startOf('week'), 'days');
                var diffInWeeks = moment().diff(date, 'weeks');
                var diffInDays = moment().diff(date, 'days');

                if (diffInDays > 0) {
                    if (currentDistanceFromSunday > 0) {
                        diffInWeeks += 1;
                    }
                }

                if (diffInWeeks <= 12) {
                    return diffInWeeks;
                }
            }
        }

        return undefined;
    },

    getSongFrequency: function (song) {
        if (!song.setlists) {
            return undefined;
        }

        var setlists = song.setlists.sort(function (setlistA, setlistB) {
            var dateA = localData.getSetlistDate(setlistA);
            var dateB = localData.getSetlistDate(setlistB);
            if (!dateA && dateB) return 1;
            if (dateA && !dateB) return -1;
            if (!dateA && !dateB) return 0;
            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;
            return 0;
        });
        var setlistsInLastThreeMonths = [];
        setlists.forEach(function (setlist) {
            var date = localData.getSetlistDate(setlist);
            var isInLastThreeMonths = date && moment().diff(date, 'months') <= 3;
            if (isInLastThreeMonths) {
                setlistsInLastThreeMonths.push(setlist);
            } else {
                return false;
            }
        });
        return setlistsInLastThreeMonths.length || undefined;
    },

    getSongTags: function (song) {
        var tags = song.tags ? song.tags.split(',') : [];

        var prox = this.getSongProximity(song);
        if (typeof prox === 'number') {
            if (prox < -1) {
                tags.push(Math.abs(prox) + 'weeks-from-now');
            } else if (prox == -1) {
                tags.push('next-week');
            } else if (prox == 0) {
                tags.push('this-week');
            } else if (prox == 1) {
                tags.push('last-week');
            } else {
                tags.push(prox + '-weeks-ago');
            }
        }

        return tags;
    },

    onSort: function (sortBy) {
        this.setState({ sortBy: sortBy });
    },

    onTagClick: function (tag, tagColor) {
        this.setState({
            tagFilter: { name: tag, color: tagColor }
        });
    },

    onClearTagFilterClick: function () {
        this.setState({
            tagFilter: undefined,
            songs: _.clone(localData.songs)
        });
    },

    render: function () {
        var sortBy = this.state.sortBy;
        var tagFilter = this.state.tagFilter;
        var addToSetlist = this.state.addToSetlist;
        var mainClassName = 'setlister-react-songs-index';

        var songs = _.clone(localData.songs);

        if (sortBy === 'proximity') {
            songs = songs.sort(function (a, b) {
                var fA = this.getSongProximity(a);
                var fB = this.getSongProximity(b);
                if (fA === undefined && fB !== undefined) return 1;
                if (fB === undefined && fA !== undefined) return -1;
                if (fB === undefined && fA === undefined) return 0;
                if (fA < fB) return -1;
                if (fA > fB) return 1;
                return 0;
            }.bind(this));
        }
        if (sortBy === 'frequency') {
            songs = songs.sort(function (a, b) {
                var fA = this.getSongFrequency(a) || 0;
                var fB = this.getSongFrequency(b) || 0;
                if (fA > fB) return -1;
                if (fA < fB) return 1;
                return 0;
            }.bind(this));
        }
        if (tagFilter) {
            songs = _.filter(songs, function (song) {
                var tags = this.getSongTags(song);
                return tags.includes(tagFilter.name);
            }.bind(this));
        }

        // if months 1-9 or 12/26-12/31
        var today = moment();
        var day = today.format('DD');
        var month = today.format('MM');
        if (month < 10 || month === 12 && day > 25) {
            songs = _.filter(songs, function (song) {
                var tags = this.getSongTags(song);
                return !tags.includes('christmas');
            }.bind(this));
        }

        return (
            <div className={mainClassName}>
                <div className="setlister-react-page-title">
                    Songs
                    <a className="setlister-react-page-action" title="Add song" href={localData.getPath('new_song')}><span className="icon icon-plus" /></a>
                </div>
                <Table
                    showControls={true}
                    titles={['Name', 'Tags', 'Count', 'Actions']}
                    cellClassNames={[
                        'setlist-song-title',
                        'setlist-song-tags',
                        'setlist-song-frequency',
                        'setlist-song-actions'
                    ]}
                    sort={[
                        { value: 'alphabetical', name: 'alphabetical'},
                        { value: 'frequency', name: 'used most often'},
                        { value: 'proximity', name: 'used recently'}
                    ]}
                    tagFilter={this.state.tagFilter}
                    onClearTagFilterClick={this.onClearTagFilterClick}
                    onSort={this.onSort}
                    rows={songs.map(function (song, i) {
                        return [
                            <a href={song.path}>{song.title || song.date}</a>,
                            <TagList tags={this.getSongTags(song)} onTagClick={this.onTagClick} />,
                            this.getSongFrequency(song),
                            <div className="setlister-react-actions">
                                <a className="icon-pencil action" title="Edit song" href={song.edit_path}></a>
                                <a className="icon-remove action" title="Delete song" data-method="delete" data-confirm="Are you sure?" href={song.delete_path}></a>
                                <a className="icon-plus-sign action add-to-setlist-button" ref={this.songRowRefs[i]} title="Add to setlist" href="#" onClick={function (evt) {
                                    evt.preventDefault();
                                    this.onAddToSetlistClick(song, i);
                                }.bind(this)}></a>
                            </div>
                        ];
                    }.bind(this))}
                />
                {addToSetlist && <AddToSetlist song={addToSetlist} songRef={this.state.songRef} />}
            </div>
        );
    }
});

module.exports = SongsIndex;
