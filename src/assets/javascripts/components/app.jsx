var React = require('react');
var createReactClass = require('create-react-class');
var Nav = require('./nav.jsx');
var SetlistsNew = require('./setlists-new.jsx');
var SetlistsShow = require('./setlists-show.jsx');
var NotFound = require('./not-found.jsx');
var localData = require('../localData');
var currentRoute = localData.currentRoute;

var App = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        return (
            <div className="setlister-react-app">
                <Nav currentRoute={currentRoute} />
                <div className="setlister-react-main">
                    <div className="setlister-react-main-inner">
                        {
                            {
                                '/setlists/new': <SetlistsNew />,
                                '/setlists/*': <SetlistsShow />
                            }[currentRoute.replace(/[0-9]+/g, '*').replace(/\/$/, '')]
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
