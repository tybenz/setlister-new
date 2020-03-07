var React = require('react');
var createReactClass = require('create-react-class');

var capoList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var CapoSelector = createReactClass({
    getInitialState: function () {
        return { value: this.props.defaultValue };
    },

    onInputChange: function (evt) {
        var num = evt.target.value;
        this.setState({ value: num });
        this.props.onChange(num);
    },

    render: function () {
        return <div className="setlister-react-capo-select">
            <select className="setlister-react-capo-select-input" defaultValue={this.props.defaultValue} onChange={this.onInputChange}>
                <option key={'select-option-capo-0'} value={0}>--</option>
                {capoList.map(function (num) {
                    return <option key={'select-option-capo-' + num} value={num}>{num}</option>;
                })}
            </select>
        </div>;
    }
});

module.exports = CapoSelector;
