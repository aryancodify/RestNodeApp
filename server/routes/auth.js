var jwt = require('jwt-simple');

var auth = {

		login: function(req, res) {

			var username = req.body.username || '';
			var password = req.body.password || '';

			if (username == '' || password == '') {
				res.status(401).json({
					message: "Invalid Credentials"
				});
				return;
			}

			var dbuserObj = auth.validate(username, password);

			if (!dbuserObj)
		} {
			res.status(401).json({
				message: "Invalid Credentials"
			});
			return;
		}
		if (dbuserObj) {
			res.json(genToken(dbUserObj));
		}
	},
	validate: function(username, password) {
		var dbUserObj = {
			name: 'arvind',
			role: 'admin',
			username: 'arvind@myapp.com'
		};
		return dbUserObj;
	},
	validateUser: function(username) {
		var dbUserObj = {
			name: 'arvind',
			role: 'admin',
			username: 'arvind@myapp.com'
		};
		return dbUserObj;
	},
}     

//private function

function genToken(user){
	var expires = expiresIn(7);
	var token = jwt.encode({
		exp:expires
	},require('../config/secret'));
}        

function expiresIn(numDays){
	var dateObj = new Date();
	return dateObj.setDate(dateObj.getDate() + numDays);
}                  

module.exports = auth;