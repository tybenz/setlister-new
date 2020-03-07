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

    componentDidMount: function () {
        document.body.addEventListener('click', this.globalOnClick);
    },

    componentWillUnmount: function () {
        document.body.removeEventListener('click', this.globalOnClick);
    },

    globalOnClick: function (evt) {
        var target = evt.target;
        if (target.dataset.method && target.dataset.method === 'delete') {
            evt.preventDefault();
            evt.stopPropagation();
            var dataConfirm = target.dataset.confirm;
            if (dataConfirm) {
                dataConfirm = window.confirm(dataConfirm);
            } else {
                dataConfirm = true;
            }
            if (dataConfirm) {
                window.fetch(target.href, {
                    method: 'DELETE'
                }).then(function (response) {
                    if (response.status === 200) {
                        window.location.reload();
                    } else {
                        console.error(new Error('Non-200 response from DELETE ' + target.href + ' ' + response.status));
                        window.location = '/auth_error';
                    }
                }).catch(function (err) {
                    console.error(err);
                    window.location = '/auth_error';
                });
            }
        }
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
                                '/songs/new': <SongsShow isEdit={true} />,
                                '/songs/*': <SongsShow />,
                                '/songs/*/edit': <SongsShow isEdit={true} />
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
