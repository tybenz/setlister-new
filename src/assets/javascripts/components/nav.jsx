var React = require('react');
var createReactClass = require('create-react-class');
var localData = require('../local-data');

var Nav = createReactClass({
    getInitialState: function (props) {
        return { isExpanded: false };
    },

    onHamburgerClick: function () {
        this.setState({ isExpanded: !this.state.isExpanded });
    },

    render: function () {
        var className = 'setlister-react-nav';
        if (this.state.isExpanded) {
            className += ' is-open';
        }
        var paths = {};
        if (window.json && window.json.paths) {
            paths = window.json.paths;
        }

        return (
            <div className={className}>
                <div className="setlister-react-nav-inner">
                    <div className="setlister-react-nav-title"><a href={localData.getPath('home')}>Setlister</a></div>
                    <div onClick={this.onHamburgerClick} className="setlister-react-nav-hamburger">
                        <div className="setlister-react-nav-hamburger-line"/>
                        <div className="setlister-react-nav-hamburger-line"/>
                        <div className="setlister-react-nav-hamburger-line"/>
                    </div>
                    <div className="setlister-react-nav-items">
                        <span className="setlister-react-nav-item">
                            <a href={localData.getPath('home')}>Home</a>
                        </span>
                        <span className="setlister-react-nav-item">
                            <a href={localData.getPath('songs')}>Songs</a>
                        </span>
                        <span className="setlister-react-nav-item">
                            <a href={localData.getPath('setlists')}>Setlists</a>
                        </span>
                    </div>
                </div>
                <a href={localData.getPath('sign_in')} className="setlister-react-nav-susi" />
            </div>
        );
    }
});

module.exports = Nav;
