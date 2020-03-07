var React = require('react');
var createReactClass = require('create-react-class');
var localData = require('../local-data');

var NotFound = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        return (
            <div className="setlister-react-not-found">Page not found</div>
        );
    }
});

module.exports = NotFound;
