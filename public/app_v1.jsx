// React.createClass()
// Used to create the recipe for the class

// Greeter is a React Class
var Greeter = React.createClass({

	// Used to get the default properties in case none are passed in
	getDefaultProps: function () {
		return {
			name: 'React',
			message: 'This is from a component!'
		};
	},

	// Used to get the initial state of this object
	// Sometimes will get default values from passed in properties
	// Other times, will just set it where it needs to go
	getInitialState: function () {
		return {
			name: this.props.name
		};
	},

	// Handle the button click on our form
	onButtonClick: function (e) {
		e.preventDefault();

		// Get the input control and the value
		var nameRef = this.refs.name;
		var name = nameRef.value;
		this.refs.name.value = '';

		if( typeof name === 'string' && name.length > 0 )
		{
			// Update the state of the component
			this.setState({
				name: name
			});
		}
	},

	// The actual render function
	render: function () {
		// Pull any parameters passed in or the defaults
		var name = this.state.name;
		var message = this.props.message;

		// Use JSX to build the HTML we are sending back
		return (
			<div>
			    <h1>Hello {name}!</h1>
				<p>{message}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
			</div>
		);
	}
});

// Some Globals where we will hold things
var firstname = 'Andrew';
var message = 'This is from the top'

// Now actually render our class to the DOM
// ReactDOM.render
ReactDOM.render(
	<Greeter name={firstname} message={message}/>,
    document.getElementById('app')
);
