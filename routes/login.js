/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login', {title : 'TodayTask'})
});

module.exports = router;