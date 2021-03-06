var _ = require('lodash');
var moment = require('moment');
var localData = _.extend({}, window.json || {});

localData.getSetlistTitle = function (setlist) {
    var title = setlist.title;
    var dateStr = setlist.date;
    var date;
    if (dateStr) {
        if (dateStr.search(/00:00:00\.000Z$/) !== -1) {
            date = moment(setlist.date).add(1, 'days').format('MM/DD/YYYY');
        } else {
            date = moment(setlist.date).format('MM/DD/YYYY');
        }
    }
    if (title && title.search(/[0-9]{2}-[0-9]{2}-[0-9]{4}/) !== -1) {
        title = title.replace(/^.*([0-9]{2}-[0-9]{2}-[0-9]{4}).*$/, '$1');
        return moment(title, 'MM-DD-YYYY').format('MM/DD/YYYY');
    }
    return title || date;
};

localData.getSetlistDate = function (setlist) {
    var dateFormattedTitle = this.getSetlistTitle(setlist);
    if (dateFormattedTitle && dateFormattedTitle.search(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/) !== -1) {
        return moment(dateFormattedTitle, 'MM/DD/YYYY');
    }
};

localData.getPath = function (pathName) {
    var path = localData.fixedPaths[pathName];
    if (path) {
        return path;
    }
    return localData.paths
        ? localData.paths[pathName]
        : undefined;
};

module.exports = localData;
