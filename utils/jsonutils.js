/**
 * http://usejsdoc.org/
 */

exports.appendJsonObject = function(json, key, value) {
	console.log("key",key,"val", value)
	json[key]=value;
	console.log(json);
	return json
}
