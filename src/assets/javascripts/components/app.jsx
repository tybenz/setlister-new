var React = require('react');
var createReactClass = require('create-react-class');
var Nav = require('./nav.jsx');
var SetlistsNew = require('./setlists-new.jsx');
var SetlistsIndex = require('./setlists-index.jsx');
var SetlistsShow = require('./setlists-show.jsx');
var SongsIndex = require('./songs-index.jsx');
var SongsShow = require('./songs-show.jsx');
var NotFound = require('./not-found.jsx');
var localData = require('../localData');
var currentRoute = localData.currentRoute;

var App = createReactClass({
    getInitialState: function (props) {
        return { isInStageMode: false };
    },

    onStageModeOn: function () {
        this.setState({ isInStageMode: true });
    },

    onStageModeOff: function () {
        this.setState({ isInStageMode: false });
    },

    render: function () {
        var isInStageMode = this.state.isInStageMode;

        var className = 'setlist-react-app';
        if (isInStageMode) {
            className += ' stage-mode';
        }

        return (
            <div className={className}>
                <Nav currentRoute={currentRoute} />
                <div className="setlister-react-main">
                    <div className="setlister-react-main-inner">
                        {
                            {
                                '/setlists': <SetlistsIndex />,
                                '/setlists/new': <SetlistsNew />,
                                '/setlists/*': <SetlistsShow stageMode={isInStageMode} onStageModeOn={this.onStageModeOn} onStageModeOff={this.onStageModeOff} />,
                                '/songs': <SongsIndex />,
                                '/songs/*': <SongsShow />
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
