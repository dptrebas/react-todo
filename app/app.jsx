// Import React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation styles
$(document).foundation();

// Our custom app css
require('style!css!sass!applicationStyles')

// Now actually render our class to the DOM
ReactDOM.render(
	<TodoApp/>,
    document.getElementById('app')
);
