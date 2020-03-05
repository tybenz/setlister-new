var React = require('react');
var createReactClass = require('create-react-class');
var Calendar = require('./calendar.jsx');

var SetlistNew = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        return (
            <div className="setlister-react-setlist-new">
                <Calendar />
            </div>
        );
    }
});

module.exports = SetlistNew;
