/**
 * http://usejsdoc.org/
 */
var async = require('async');
var Todo = require('../models/todo');
var todoutils = require('../utils/todoUtils');

exports.index = function(req, res) {
	console.log("inside index");
	Todo.find({}, function(err, users) {
		console.log(users);
		res.render('index', {
			title : 'TodayTask',
			todos : users
		});
	});
};

exports.addtodo = function(req, res) {
	console.log(req.body.todo);
	todoutils.todoCreate(req.body.todo,1,"");
	res.send("success");
};