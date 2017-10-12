/**
 * http://usejsdoc.org/
 */
var async = require('async');
var moment = require('moment');
var Todo = require('../models/todo');
var todoutils = require('../utils/todoUtils');
var constants = require('../utils/constants');

var todoobj = {

	startDate : Date(),
	endDate : Date(),
	rendertodo : function(req, res) {
		var startDate = this.startDate;
		var endDate = this.endDate;
		
		async.parallel({
			todo_todo : function(callback) {
				Todo.find({
					status : 0,
					date : {
						$gte : startDate,
						$lt : endDate
					}
				},function(err, todos) {
					callback(err,todos)
				});
			},
			todo_done : function(callback) {
				Todo.find({
					status : 1,
					date : {
						$gte : startDate,
						$lt : endDate
					}
				},function(err, todos) {
					callback(err,todos)
				});
			},
		}, function(err, results) {
			res.render('index', {
				title : 'TodayTask',
				data : results
			});
		});
	}
}

exports.AllTodo = function(req, res) {
	console.log(req.headers.cookie);
	todoobj.startDate = moment.utc("0001-01-01");
	todoobj.endDate = moment(moment().startOf('day')).add(1, 'days')
	todoobj.rendertodo(req, res);
}

exports.TodayTodo = function(req, res) {
	todoobj.startDate = moment().startOf('day')
	todoobj.endDate = moment(todoobj.startDate).add(1, 'days')
	todoobj.rendertodo(req, res);
}

exports.YesterdayTodo = function(req, res) {
	todoobj.startDate = moment().subtract(1, 'days');
	todoobj.endDate = moment().startOf('day');
	todoobj.rendertodo(req, res);
}

exports.LastWeekTodo = function(req, res) {
	todoobj.startDate = moment().startOf('isoWeek')
	todoobj.endDate = moment(moment().startOf('day')).add(1, 'days')
	todoobj.rendertodo(req, res);
}
exports.addtodo = function(req, res) {
	console.log(req.body.todo);
	result = todoutils.todoCreate(req.body.todo, 1, "", constants.TODO);
	res.contentType('application/json');
	res.json(result);
};

exports.changetodostatus = function(req, res) {
	todoutils.changetodostatus(req.body.status, req.body.id);
	res.send("success");
}

exports.changepriority = function(req, res) {
	todoutils.changepriority(req.body.starcount, req.body.id);
	res.send("success");
}

exports.todoObj = todoobj;