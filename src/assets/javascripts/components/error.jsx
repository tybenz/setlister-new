var React = require('react');
var createReactClass = require('create-react-class');
var Nav = require('./nav.jsx');
var localData = require('../local-data');
var errorMessage = localData.error;
var flash = localData.flash;

var AppError = createReactClass({
    render: function () {
        return (
            <div className="setlist-react-app">
                <Nav />
                <div className="setlister-react-main">
                    <div className="setlister-react-main-inner">
                        {flash &&
                            <div className="setlister-react-flash">
                                {Object.keys(flash).map(function (type) {
                                    var messages = flash[type];
                                    return messages.map(function (message, i) {
                                        return <div
                                            key={'flash-' + type + '-' + i}
                                            className={'flash ' + type}>
                                                {message}
                                        </div>;
                                    });
                                })}
                            </div>}
                        {errorMessage}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AppError;
