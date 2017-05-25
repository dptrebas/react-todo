var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog'
				},
				{
					id: uuid(),
					text: 'Clean the yard'
				},
				{
					id: uuid(),
					text: 'Leave mail on porch'
				},
				{
					id: uuid(),
					text: 'Play video games'
				}

			]
		};
	},

	// Handle a new Todo
	handleAddTodo: function(todotext) {

		// Add this elemenent to our todos array
		this.setState({
			'todos': 
			[
				...this.state.todos,
				{id: uuid(), text: todotext}
			]
		});
	},

	// Handle a new Todo
	handleSearch: function(showCompleted, searchText) {

		// Add this elemenent to our todos array
		var {todos} = this.state;

		this.setState(
			{
				showCompleted: showCompleted,
				searchText: searchText.toLowerCase()
			}
		);

		todos.push({id: todos.length+1, text: todotext});

		this.setState({
			'todos': todos
		});
	},

	render: function () {
		var {todos} = this.state;

		return(
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}

});

module.exports = TodoApp;