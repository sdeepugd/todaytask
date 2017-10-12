/**
 * http://usejsdoc.org/
 */
// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var uid = mongoose.Types.ObjectId();
console.log("id:" + uid);

var TodoSchema = new Schema({
	todo : String,
	date : { type: Date, default: Date.now },
	stars : { type: Number, min:0, max:5},
	Notes : { type: String, trim:true},
	status : {type: Number, min:0,max:2},
	userid : {type: Number}
});

module.exports = mongoose.model('Todo', TodoSchema);