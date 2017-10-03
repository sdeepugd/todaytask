/**
 * http://usejsdoc.org/
 */

var async = require('async')
var Todo = require('./models/todo')

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/todo_db';
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console,
		'MongoDB connection error:'));

function todoCreate(todo, stars, Notes) {
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

todoCreate("some todo", 2, "some notes");

function getalltodos() {
	var todos=Todo.find({}, function(err, users) {
		var userMap = {};

		users.forEach(function(user) {
			userMap[user._id] = user;
		});
//		console.log(users);
	});
	console.log(todos);
}

getalltodos();