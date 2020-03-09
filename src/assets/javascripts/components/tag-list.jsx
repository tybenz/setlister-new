var React = require('react');
var _ = require('lodash');
var createReactClass = require('create-react-class');
var localData = require('../local-data');

var possibleColors = [
    'blue',
    'green',
    'orange',
    'red',
    'pink',
    'purple',
    'cyan'
];

var tagColors = {
    'gathering': 'cyan',
    'testimony': 'green',
    'vertical': 'red',
    'christmas': 'purple'
};

var TagList = createReactClass({
    getInitialState: function () {
        return {};
    },

    tagColor: function (tag) {
        var color = tagColors[tag];
        if (!color) {
            if (tag.search(/^used/) !== -1) {
                return 'blue';
            }

            var usedColors = Object.keys(tagColors).map(function (tag) {
                return tagColors[tag];
            });
            var unusedColors = _.difference(possibleColors, usedColors);
            var colorsToChooseFrom = unusedColors;
            if (unusedColors.length) {
                colorsToChooseFrom = possibleColors;
            }
            var lastIndex = colorsToChooseFrom.length - 1;
            var ran = Math.random();
            var index = Math.round(ran * lastIndex);
            var color = colorsToChooseFrom[index];
            tagColors[tag] = color;
        }
        return color;
    },

    render: function () {
        var tags = this.props.tags;
        tags = tags.sort(function (a, b) {
            if (a.search(/^used/) !== -1 && b.search(/^used/) === -1) return -1;
            if (b.search(/^used/) !== -1 && a.search(/^used/) === -1) return 1;
            if (b.search(/^used/) !== -1 && a.search(/^used/) !== -1) return 0;
            if (a > b) return -1;
            if (a < b) return -1;
            if (a > b) return -1;
            return 0;
        });
        return (
            <div className="setlister-react-tag-list">
                {tags.map(function (tag, i) {
                    var className = 'setlister-react-tag';
                    className += ' ' + this.tagColor(tag);
                    return <span
                        key={'tag-' + i}
                        className={className}
                        onClick={function () {
                            this.props.onTagClick(tag, this.tagColor(tag))
                        }.bind(this)}
                    >
                        {tag}
                    </span>;
                }.bind(this))}
            </div>
        );
    }
});

module.exports = TagList;
