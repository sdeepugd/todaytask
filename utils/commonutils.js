/**
 * http://usejsdoc.org/
 */

exports.getcookies = function(req) {
	var map = {};
	var cookiestr = req.headers.cookie.split(";");
	for (i = 0; i < cookiestr.length; i++) {
		cookie = cookiestr[i];
		cookiekey = cookie.split("=")[0].trim();
		cookievalue = cookie.split("=")[1].trim();
		map[cookiekey] = cookievalue;
	}
	return map;
}