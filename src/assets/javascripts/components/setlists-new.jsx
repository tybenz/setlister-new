var React = require('react');
var createReactClass = require('create-react-class');
var DatePicker = require('./date-picker.jsx');
var localData = require('../localData');
var setlistsPath = localData.paths.setlists;

var SetlistsNew = createReactClass({
    getInitialState: function (props) {
        return {
            title: undefined,
            date: undefined
        };
    },

    onTitleChange: function (evt) {
        this.setState({ title: evt.target.value });
    },

    onDateChange: function (d) {
        this.setState({ date: d });
    },

    onCreateClick: function () {
        window.fetch(setlistsPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: this.state.title, date: this.state.date })
        })
        .then(function (response) {
            if (response.status !== 200) {
                console.error(new Error('Non-200 response while trying to create setlist. ' + response.status));
                alert('There was a problem creating the setlist');
            }
            window.location = setlistsPath;
        })
        .catch(function (err) {
            console.error(err);
            alert('There was a problem creating the setlist');
        });
    },

    render: function () {
        return (
            <div className="setlister-react-setlist-new">
                <h1>New Setlist</h1>
                <div className="setlister-react-field-wrapper">
                    <label className="setlister-react-field-label">Title</label>
                    <input placeholder="Optional" className="setlister-react-input" defaultValue="" onChange={this.onTitleChange} />
                </div>
                <div className="setlister-react-field-wrapper">
                    <label className="setlister-react-field-label">Date</label>
                    <DatePicker onSelect={this.onDateChange} />
                </div>
                <div>
                    <button onClick={this.onCreateClick} className="setlister-react-button">Create</button>
                </div>
            </div>
        );
    }
});

module.exports = SetlistsNew;
