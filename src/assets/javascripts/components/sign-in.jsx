var React = require('react');
var createReactClass = require('create-react-class');

var SignIn = createReactClass({
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        return (
            <form className="setlister-react-sign-in" method="POST" action="">
                <div className="setlister-react-page-title">
                    Sign In
                </div>
                <div className="setlister-react-field-wrapper">
                    <label className="setlister-react-field-label">Email</label>
                    <input autoFocus type="text" className="setlister-react-input" defaultValue="" name="email" />
                </div>
                <div className="setlister-react-field-wrapper">
                    <label className="setlister-react-field-label">Password</label>
                    <input type="password" className="setlister-react-input" defaultValue="" name="password" />
                </div>
                <div>
                    <button type="submit" onClick={this.onCreateClick} className="setlister-react-button">Create</button>
                </div>
            </form>
        );
    }
});

module.exports = SignIn;
