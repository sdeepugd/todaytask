var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todo_controller');

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Today Task' ,todos:[{todoitem:"todo1"},{todoitem:"todo2"},{todoitem:"todo3"}]});
//});

/* GET catalog home page. */
router.get('/', todoController.AllTodo);

router.get('/today', todoController.TodayTodo);

router.get('/yesterday', todoController.YesterdayTodo);

router.get('/lastweek', todoController.LastWeekTodo);

router.post('/addtodo', todoController.addtodo)

router.post('/changetodostatus', todoController.changetodostatus)

router.post('/changepriority', todoController.changepriority)

module.exports = router;
