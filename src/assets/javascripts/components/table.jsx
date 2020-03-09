var React = require('react');
var createReactClass = require('create-react-class');

var Table = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    onSortChange: function (evt) {
        this.props.onSort(evt.target.value);
    },

    render: function () {
        var isEdit = this.props.isEdit;
        var titles = this.props.titles;
        var tagFilter = this.props.tagFilter;
        var sort = this.props.sort || [];
        var rows = this.props.rows;
        var cellClassNames = this.props.cellClassNames;

        return (
            <div className="setlister-react-table setlister-react-setlist-summary">
                {this.props.showControls &&
                    <div className="setlister-react-table-controls">
                        {tagFilter &&
                            <div className="setlister-react-table-filter">
                                <div className="setlister-react-field-label">FILTER: </div>
                                <span className={'setlister-react-tag ' + tagFilter.color}>{tagFilter.name}</span>
                                <span className="icon icon-remove" onClick={this.props.onClearTagFilterClick} />
                            </div>}

                        <select
                            className="setlister-react-table-sort-menu setlister-react-select"
                            onChange={this.onSortChange}
                        >
                            {sort.map(function (sortObj, i) {
                                return <option key={'sort-' + i} value={sortObj.value}>{sortObj.name}</option>;
                            }.bind(this))}
                        </select>
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
                            {isEdit &&
                                <div className="setlister-react-table-order">
                                    <span
                                        onClick={function () {
                                            this.props.onOrderUpClick(i);
                                        }.bind(this)}
                                        className="setlister-react-table-order-up icon icon-chevron-up"
                                    />
                                    <br/>
                                    <span
                                        onClick={function () {
                                            this.props.onOrderDownClick(i);
                                        }.bind(this)}
                                        className="setlister-react-table-order-down icon icon-chevron-down"
                                    />
                                </div>}
                            {row.map(function (cell, i) {
                                var className = 'setlister-react-table-cell';
                                if (cellClassNames[i]) {
                                    className += ' ' + cellClassNames[i];
                                }
                                return <div key={'cell-' + i} className={className}>{cell}</div>;
                            })}
                            </div>;
                    }.bind(this))}
                </div>
            </div>
        );
    }
});

module.exports = Table;
