var _ = require('lodash');
var moment = require('moment');
var localData = _.extend({}, window.json || {});

localData.getSetlistTitle = function (setlist) {
    var title = setlist.title;
    var date = setlist.date && moment(setlist.date).format('MM/DD/YYYY');
    if (title && title.search(/[0-9]{2}-[0-9]{2}-[0-9]{4}/) !== -1) {
        title = title.replace(/^.*([0-9]{2}-[0-9]{2}-[0-9]{4}).*$/, '$1');
        date = moment(title, 'MM-DD-YYYY').format('MM/DD/YYYY');
        title = '';
    }
    return title || date;
};

module.exports = localData;
