var express = require('express');
var router = express.Router();
var todo_controller = require('../controllers/todo_controller');

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Today Task' ,todos:[{todoitem:"todo1"},{todoitem:"todo2"},{todoitem:"todo3"}]});
//});

/* GET catalog home page. */
router.get('/', todo_controller.index);

router.post('/addtodo', todo_controller.addtodo)

module.exports = router;
