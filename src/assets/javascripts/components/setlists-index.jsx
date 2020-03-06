var React = require('react');
var Song = require('./song.jsx');
var Table = require('./table.jsx');
var createReactClass = require('create-react-class');
var localData = require('../localData');
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
                <a href={setlist.path}>{setlist.title || setlist.date}</a>,
                ''
            ];
        });
        var cellClassNames = ['setlist-setlist-title', 'setlist-setlist-actions'];
        var mainClassName = 'setlister-react-setlists-index';

        return (
            <div className={mainClassName}>
                <div className="setlister-react-page-title">Setlists</div>
                <Table titles={tableTitles} rows={rows} cellClassNames={cellClassNames} showControls={true} />
            </div>
        );
    }
});

module.exports = SetlistsIndex;
