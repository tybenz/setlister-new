var React = require('react');
var createReactClass = require('create-react-class');

var Table = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        var titles = this.props.titles;
        var rows = this.props.rows;
        var cellClassNames = this.props.cellClassNames;
        return (
            <div className="setlister-react-table setlister-react-setlist-summary">
                {this.props.showControls &&
                    <div className="setlister-react-table-controls">
                    </div>}
                <div className="setlister-react-table-rows">
                    <div className="setlister-react-table-row setlister-react-table-header-row">
                    {titles.map(function (title, i) {
                        var className = 'setlister-react-table-cell';
                        if (cellClassNames[i]) {
                            className += ' ' + cellClassNames[i];
                        }
                        return <div key={'header-cell-' + i} className={className}>{title}</div>;
                    })}
                    </div>
                    {rows.map(function (row, i) {
                        return <div key={'song-in-table-' + i} className="setlister-react-table-row">
                            {row.map(function (cell, i) {
                                var className = 'setlister-react-table-cell';
                                if (cellClassNames[i]) {
                                    className += ' ' + cellClassNames[i];
                                }
                                return <div key={'cell-' + i} className={className}>{cell}</div>;
                            })}
                            </div>;
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Table;
