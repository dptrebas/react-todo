var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

	render: function () {
		var {todos} = this.props;

		// Build an array of JSX for all our todos
		var renderTodos = () => {
			return todos.map( (todo) => {
				return (
					<Todo key={todo.id} {...todo}/>
				);
			});
		};

		return(
			<div>
				{renderTodos()}
			</div>
		);
	}

});

module.exports = TodoList;