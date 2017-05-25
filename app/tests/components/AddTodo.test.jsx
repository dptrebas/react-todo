var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onAddTodo if valid todo entered', () => {
		var todoText = 'Check Mail';
		var spy = expect.createSpy();
		var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addtodo));

		addtodo.refs.todotext.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('should not call onAddTodo if nothing entered', () => {
		var spy = expect.createSpy();
		var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addtodo));

		addtodo.refs.todotext.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});

