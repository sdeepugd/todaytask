/**
 * http://usejsdoc.org/
 */
var Todo = require('../models/todo')
var jsonutils = require('./jsonutils')

exports.todoCreate = function(todo, stars, Notes, status, userid) {
	tododetail = {
		todo : todo,
		stars : stars,
		Notes : Notes,
		status : status,
		userid : userid
	}

	var todo = new Todo(tododetail);
	todo.save(function(err) {
		if (err) {
			console.log(err);
			return;
		}
	});
	result = {};
	result = jsonutils.appendJsonObject(result, "id", todo._id);
	return result;
}

exports.changetodostatus = function(status, id) {
	Todo.findOne({
		_id : id
	}, function(err, todo) {
		if (err) {
			console.log("errr", err);
		} else {
			todo.status = status;
			todo.save(function(err) {
				if (err) {
					console.log(err);
					return;
				}
			});
		}
	});
}
exports.changepriority = function(stars, id) {
	Todo.findOne({
		_id : stars
	}, function(err, todo) {
		if (err) {
			console.log("errr", err);
		} else {
			todo.stars = id;
			todo.save(function(err) {
				if (err) {
					console.log(err);
					return;
				}
			});
		}
	});
}