var React = require('react');
var createReactClass = require('create-react-class');

var keys = ['Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#'];

var KeySelector = createReactClass({
    getInitialState: function () {
        return { value: this.props.defaultValue };
    },

    onInputChange: function (evt) {
        var note = evt.target.value;
        this.setState({ value: note });
        this.props.onChange(note);
    },

    onKeyButtonClick: function (note) {
        this.setState({ value: note });
        this.props.onChange(note);
    },

    render: function () {
        return <div className="setlister-react-key-select">
            <select className="setlister-react-key-select-input" defaultValue={this.props.defaultValue} onChange={this.onInputChange}>
                {keys.map(function (note) {
                    return <option key={'select-option-key-' + note} value={note}>{note}</option>;
                })}
            </select>
            <div className="setlister-react-key-select-buttons">
                {keys.map(function (note) {
                    var buttonClassName = 'setlister-react-key-select-button';
                    if (note === this.state.value) {
                        buttonClassName += ' is-active';
                    }
                    return <button key={'key-button-' + note} className={buttonClassName} value={note} onClick={function () {
                        this.onKeyButtonClick(note);
                    }.bind(this)}>{note}</button>;
                }.bind(this))}
            </div>
        </div>;
    }
});

module.exports = KeySelector;
