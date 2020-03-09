var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var createReactClass = require('create-react-class');
var localData = require('../local-data');
var setlists = localData.setlists;

var SetlistsIndex = createReactClass({
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
        var rows = setlists.map(function (setlist) {
            return [
                <a href={setlist.path}>{localData.getSetlistTitle(setlist)}</a>,
                <div className="setlister-react-actions">
                    <a className="icon-play-circle action" title="Start slideshow" href={setlist.slideshow_path}></a>
                    <a className="icon-pencil action" title="Edit song" href={setlist.edit_path}></a>
                    <a className="icon-remove action" title="Delete song" data-method="delete" data-confirm="Are you sure?" href={setlist.delete_path}></a>
                </div>
            ];
        });
        var cellClassNames = ['setlist-setlist-title', 'setlist-setlist-actions'];
        var mainClassName = 'setlister-react-setlists-index';

        return (
            <div className={mainClassName}>
                <div className="setlister-react-page-title">
                    Setlists
                    <a className="setlister-react-page-action" title="Add setlist" href={localData.getPath('new_setlist')}><span className="icon icon-plus" /></a>
                </div>
                <Table titles={tableTitles} rows={rows} cellClassNames={cellClassNames} />
            </div>
        );
    }
});

module.exports = SetlistsIndex;
