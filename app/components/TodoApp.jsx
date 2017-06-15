var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoAPI = require ('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	},

	componentDidUpdate: function () {
		TodoAPI.setTodos(this.state.todos);
	},


	// Handle a new Todo
	handleAddTodo: function(todotext) {

		// Add this elemenent to our todos array
		this.setState({
			'todos': 
			[
				...this.state.todos,
				{
					id: uuid(), 
					text: todotext, 
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	},

	// Handle toggle
	handleToggle: function(id) {

		// Toggle the status for this
		var updatedTodos = this.state.todos.map((todo) => {
			if( todo.id === id )
			{
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			return todo;
		});
		this.setState({
			'todos': updatedTodos
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
	},

	render: function () {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);



		return(
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch onSearch={this.handleSearch}/>
							<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
							<AddTodo onAddTodo={this.handleAddTodo}/>
						</div>
					</div>
				</div>

			</div>
		);
	}

});

module.exports = TodoApp;