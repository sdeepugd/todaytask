/**
 * http://usejsdoc.org/
 */
var async = require('async');
var Todo = require('../models/todo');
var todoutils = require('../utils/todoUtils');
var constants = require('../utils/constants');

exports.index = function(req, res) {
	Todo.find({status:0}, function(err, todos) {
		console.log(todos);
		res.render('index', {
			title : 'TodayTask',
			todos : todos
		});
	});
};

exports.addtodo = function(req, res) {
	console.log(req.body.todo);
	todoutils.todoCreate(req.body.todo,1,"",constants.TODO);
	res.send("success");
};