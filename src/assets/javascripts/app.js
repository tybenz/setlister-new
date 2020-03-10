var ReactDOM = require('react-dom');
var React = require('react');

var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

if (isIOS) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@media print { .setlister-react-song-text { font-size: 11px; } }';
    document.head.append(style);
}

var App = require( './components/app.jsx' );

ReactDOM.render( React.createElement( App ), document.querySelector('#setlister-react') );
