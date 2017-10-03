/**
 * http://usejsdoc.org/
 */
var Todo = require('../models/todo')

exports.todoCreate = function(todo, stars, Notes) {
	console.log("inside todo ");
	tododetail = {
		todo : todo,
		stars : stars,
		Notes : Notes,
	}
	
	var todo = new Todo(tododetail);
	todo.save(function(err) {
		if (err) {
			console.log(err);
			return;
		}
	});
	console.log("todo saved ");
}