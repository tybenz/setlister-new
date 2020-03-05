var React = require('react');
var createReactClass = require('create-react-class');
var Nav = require('./nav.jsx');
var SetlistNew = require('./setlist-new.jsx');
var NotFound = require('./not-found.jsx');
var localData = require('../localData');
var currentRoute = localData.currentRoute;

var App = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        console.log(currentRoute);
        return (
            <div className="setlister-react-app">
                <Nav currentRoute={currentRoute} />
                <div className="setlister-react-main">
                    <div className="setlister-react-main-inner">
                        {
                            {
                                '/setlists/new': <SetlistNew />
                            }[currentRoute]
                            ||
                            <NotFound />
                        }
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;
