var $ = require('jQuery');

// Set and fetch Todo items from local storage
module.exports = {

	setTodos: function(todos){
		if( $.isArray(todos))
		{
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},

	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try{
			todos = JSON.parse(stringTodos);
		}
		catch(e)
		{
		}

		if( $.isArray(todos))
		{
			return todos;
		}
		else
		{
			return [];
		}
	},

	filterTodos: function( todos, showCompleted, searchText )
	{
		var filteredTodos = todos;

		// Filter by showCompleted
		filteredTodos = filteredTodos.filter((todo)=>{
			return !todo.completed || showCompleted;
		});

		// Filter by searchText
		searchText = searchText.toLowerCase();
		filteredTodos = filteredTodos.filter((todo)=>{
			var szTest = todo.text.toLowerCase();
			return (szTest.indexOf(searchText) >= 0) || (searchText == '');
		});

		// Sort todos with non-completed first
		filteredTodos.sort( (a, b) => {
			if( !a.completed && b.completed )
			{
				return -1;
			}
			else if( a.completed && !b.completed )
			{
				return 1;
			}
			else
			{
				return 0;
			}
		});

		return filteredTodos;
	}
};