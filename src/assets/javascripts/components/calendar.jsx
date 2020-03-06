var React = require( "react" );
var moment = require( "moment" );
var createReactClass = require('create-react-class');

var Calendar = createReactClass({
    getInitialState: function () {
        this.weekdayshort = moment.weekdaysShort();
        return {
            showCalendarTable: true,
            showMonthTable: false,
            origDateObject: moment().startOf('day'),
            dateObject: moment(),
            allmonths: moment.months(),
            showYearNav: false,
            selectedDay: null
        };
    },
    daysInMonth: function () {
        return this.state.dateObject.daysInMonth();
    },
    year: function () {
        return this.state.dateObject.format("Y");
    },
    currentDay: function () {
        return this.state.dateObject.format("D");
    },
    firstDayOfMonth: function () {
        var dateObject = this.state.dateObject;
        var firstDay = moment(dateObject)
            .startOf("month")
            .format("d"); // Day of week 0...1..5...6
        return firstDay;
    },
    month: function () {
        return this.state.dateObject.format("MMMM");
    },
    showMonth: function (e, month) {
        this.setState({
            showMonthTable: !this.state.showMonthTable,
            showCalendarTable: !this.state.showCalendarTable
        });
    },
    setMonth: function (month) {
        var monthNo = this.state.allmonths.indexOf(month);
        var dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("month", monthNo);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showCalendarTable: !this.state.showCalendarTable
        });
    },
    MonthList: function (props) {
        var months = [];
        props.data.map(function (data) {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setMonth(data);
                    }}
                >
                <span>{data}</span>
                </td>
            );
        });
        var rows = [];
        var cells = [];

        months.forEach(function (row, i) {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        var monthlist = rows.map(function (d, i) {
            return <tr key={'month-' + d}>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                    <tr>
                        <th colSpan="4">Select a Month</th>
                    </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        );
    },
    showYearEditor: function () {
        this.setState({
            showYearNav: true,
            showCalendarTable: !this.state.showCalendarTable
        });
    },
    onPrev: function () {
        var curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        var newDateObject = this.state.dateObject.subtract(1, curr).startOf(curr);
        this.setState({
            selectedDay: newDateObject.format('D'),
            dateObject: newDateObject
        });
        this.props.onSelect(moment(newDateObject.format('MM')+'/'+newDateObject.format('D')+'/'+newDateObject.format('YYYY'), 'MM/D/YYYY'));
    },
    onNext: function () {
        var curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        var newDateObject = this.state.dateObject.add(1, curr).startOf(curr);
        this.setState({
            selectedDay: newDateObject.format('D'),
            dateObject: newDateObject
        });
        this.props.onSelect(moment(newDateObject.format('MM')+'/'+newDateObject.format('D')+'/'+newDateObject.format('YYYY'), 'MM/D/YYYY'));
    },
    setYear: function (year) {
        // alert(year)
        var dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("year", year);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showYearNav: !this.state.showYearNav,
            showMonthTable: !this.state.showMonthTable
        });
    },
    onYearChange: function (e) {
        this.setYear(e.target.value);
    },
    getDates: function (startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    },
    YearTable: function (props) {
        var months = [];
        var nextten = moment()
            .set("year", props)
            .add("year", 12)
            .format("Y");

        var tenyear = this.getDates(props, nextten);

        tenyear.map(function (data) {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setYear(data);
                    }}
                >
                <span>{data}</span>
                </td>
            );
        });
        var rows = [];
        var cells = [];

        months.forEach(function (row, i) {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        var yearlist = rows.map(function (d, i) {
            return <tr key={'year-' + d}>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                    <tr>
                        <th colSpan="4">Select a Year</th>
                    </tr>
                </thead>
                <tbody>{yearlist}</tbody>
            </table>
        );
    },
    onDayClick: function (e, d) {
        this.setState(
            {
                selectedDay: d
            },
            function () {
                var date = this.state.dateObject;
                this.props.onSelect(moment(date.format('MM')+'/'+d+'/'+date.format('YYYY'), 'MM/D/YYYY'));
            }
        );
    },
    render: function () {
        var self = this;
        var date = this.state.dateObject;
        var actualDate = this.state.origDateObject; // today's date
        var weekdayshortname = self.weekdayshort.map(function (day) {
            return <th key={day}>{day}</th>;
        });
        var blanks = [];
        for (var i = 0; i < self.firstDayOfMonth(); i++) {
            blanks.push(<td className="calendar-day empty">{""}</td>);
        }
        var daysInMonth = [];
        for (var d = 1; d <= self.daysInMonth(); d++) {
            var currentMoment = moment(date.format('MM')+'/'+d+'/'+date.format('YYYY'), 'MM/D/YYYY');
            var currentDay = currentMoment.isSame(actualDate) ? " today" : "";
            var selectedDay = d == self.state.selectedDay ? " selected-day" : "";
            daysInMonth.push(
                <td
                    key={d}
                    className={'calendar-day' + currentDay + selectedDay}
                    onClick={function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        self.onDayClick(e, this);
                    }.bind(d)}
                >
                    <span>{d}</span>
                </td>
            );
        }

        var totalSlots = [].concat(blanks).concat(daysInMonth);

        var rows = [];
        var cells = [];

        totalSlots.forEach(function (row, i) {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                // var insertRow = cells.slice();
                rows.push(cells);
            }
        });

        var daysinmonth = rows.map(function (d, i) {
            return <tr key={'day-' + i}>{d}</tr>;
        });

        return (
            <div className="tail-datetime-calendar">
                <div className="calendar-navi">
                    <span
                        onClick={function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            self.onPrev();
                        }}
                        className="calendar-button button-prev"
                    />
                    {!self.state.showMonthTable && !self.state.showYearEditor && (
                        <span className="calendar-label">
                            {self.month()}
                        </span>
                    )}
                    <span className="calendar-label">
                        {self.year()}
                    </span>

                    <span
                        onClick={function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            self.onNext();
                        }}
                        className="calendar-button button-next"
                    />
                    </div>
                    <div className="calendar-date">
                        {self.state.showYearNav && <self.YearTable props={self.year()} />}
                        {self.state.showMonthTable && (
                            <self.MonthList data={moment.months()} />
                        )}
                    </div>

                    {self.state.showCalendarTable && (
                        <div className="calendar-date">
                            <table className="calendar-day">
                                <thead>
                                    <tr>{weekdayshortname}</tr>
                                </thead>
                                <tbody>{daysinmonth}</tbody>
                            </table>
                        </div>
                    )}
            </div>
        );
    }
});

module.exports = Calendar;
