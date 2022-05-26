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
    'christmas': 'purple',
    'solid': 'green',
    'e-flat': 'pink',
    'drop-d': 'purple',
    'jam': 'cyan'
};

var TagList = createReactClass({
    getInitialState: function () {
        return {};
    },

    tagColor: function (tag, posColors) {
        var color = tagColors[tag];
        if (!color) {
            if (tag.search(/week/) !== -1) {
                return 'blue';
            }

            var usedColors = Object.keys(tagColors).map(function (tag) {
                return tagColors[tag];
            });
            var unusedColors = _.difference(posColors, usedColors);
            var colorsToChooseFrom = unusedColors;
            if (unusedColors.length) {
                colorsToChooseFrom = posColors;
            }
            var lastIndex = colorsToChooseFrom.length - 1;
            var ran = Math.random();
            var index = Math.round(ran * lastIndex);
            var color = colorsToChooseFrom[index];
            posColors.splice(index, 1);
            tagColors[tag] = color;
        }
        return color;
    },

    render: function () {
        var tags = this.props.tags;
        tags = tags.sort(function (a, b) {
            if (a.search(/week/) !== -1 && b.search(/week/) === -1) return -1;
            if (b.search(/week/) !== -1 && a.search(/week/) === -1) return 1;
            if (b.search(/week/) !== -1 && a.search(/week/) !== -1) return 0;
            if (a > b) return -1;
            if (a < b) return -1;
            if (a > b) return -1;
            return 0;
        });
        var posColors = possibleColors.slice();
        var tagsWithColors = tags.map(function (tag) {
            return {
                tag: tag,
                color: this.tagColor(tag, posColors)
            }
        });
        return (
            <div className="setlister-react-tag-list">
                {tagsWithColors.map(function (tagData, i) {
                    var tag = tagData.tag;
                    var color = tagData.color;
                    var className = 'setlister-react-tag';
                    className += ' ' + color;
                    return <span
                        key={'tag-' + i}
                        className={className}
                        onClick={function () {
                            this.props.onTagClick(tag, tagData.color)
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
