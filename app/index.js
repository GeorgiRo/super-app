var React = require('react');
var ReactDOM = require('react-dom');

var injectTapEventPlugin = require('react-tap-event-plugin');

var App = require('./components/App');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// some reset; todo: replace with a proper one //
document.getElementsByTagName('html')[0].style.margin = '0px';
document.getElementsByTagName('html')[0].style.margin = '0px';
document.body.style.margin = '0px';
document.body.style.padding = '0px';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);