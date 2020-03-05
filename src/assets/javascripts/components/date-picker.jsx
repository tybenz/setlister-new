var React = require('react');
var createReactClass = require('create-react-class');
var Calendar = require('./calendar.jsx');
var moment = require('moment');

var DatePicker = createReactClass({
    getInitialState: function (props) {
        this.input = React.createRef();

        return {
            isCalendarShowing: false,
            selectedDay: moment()
        };
    },

    onDateSelect: function (day) {
        this.setState({ selectedDay: day });
        this.props.onSelect(day);
        this.input && this.input.current && this.input.current.focus();
    },

    showCalendar: function () {
        this.setState({ isCalendarShowing: true });
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = undefined;
        }
    },

    hideCalendar: function () {
        if (!this.hideTimer) {
            this.hideTimer = setTimeout(function () {
                this.setState({ isCalendarShowing: false });
                this.hideTimer = undefined;
            }.bind(this), 200);
        }
    },

    render: function () {
        var calendarWrapperClass = 'setlister-react-date-picker-calendar-wrapper';
        if (this.state.isCalendarShowing) {
            calendarWrapperClass += ' is-showing';
        }

        var inputClassName = 'setlister-react-input setlister-react-date-picker-input';
        if (this.state.isCalendarShowing) {
            inputClassName += ' is-active';
        }

        return (
            <div className="setlister-react-date-picker">
                <input
                    className={inputClassName}
                    ref={this.input}
                    type="text"
                    onFocus={this.showCalendar}
                    onBlur={this.hideCalendar}
                    value={this.state.selectedDay.format('MM/DD/YYYY')}
                    readOnly
                />
                <div className={calendarWrapperClass}>
                    <Calendar onSelect={this.onDateSelect} />
                </div>
            </div>
        );
    }
});

module.exports = DatePicker;
