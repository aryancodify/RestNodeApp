var express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

app.all('/*',function(req,res,next){
	//CORS headers
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
	//Set Custom headers for CORS
	res.header("Access-Control-Allow-Headers","Content-Type,Accept,X-Access-Token,X-Key");
	if(req.method == "OPTIONS"){
		res.status(200).end();
	}else{
		next();
	}
});

//AUTH Middleware - To validate the json token
//Only the requests that start with /api/v1/* will be checked for the token

app.all("/api/v1/*",[require('./middlewares/validateRequest')]);

app.use("/",require('./server/routes'));

//If no route is matched by now , it must be 404
app.use(function(req,res,next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//Start the server
app.set('port',process.env.PORT||3000);

var server = app.listen(app.get('port'),function(){
	console.log('Express server listening on port ' + server.address().port);
});

