var React = require('react');

var AddTodo = React.createClass({

	onSubmit: function(e) {
		e.preventDefault();

		var todoText = this.refs.todotext.value;

		// Validate the input
		if( todoText && todoText.length > 0 )
		{
				this.props.onAddTodo(todoText);
		}

		// Always clear it out
		this.refs.todotext.value = '';
		this.refs.todotext.focus();
	},

	render: function () {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="todo-form">
					<input type="text" ref="todotext" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;