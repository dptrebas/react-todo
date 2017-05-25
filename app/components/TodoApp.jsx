var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				},
				{
					id: 3,
					text: 'Leave mail on porch'
				},
				{
					id: 4,
					text: 'Play video games'
				}

			]
		};
	},

	// Handle a new Todo
	handleAddTodo: function(todotext) {

		// Add this elemenent to our todos array
		var {todos} = this.state;

		todos.push({id: todos.length+1, text: todotext});

		this.setState({
			'todos': todos
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