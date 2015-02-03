var express = require('express'),
	apicontroller = require('./controller.js');
var router = express.Router();

router
	.route('/notas/:id?')
	.all(function(req,res,next){
		console.log(req.method,req.path);
		res.set('Content-Type','application/json');
		next();
	})
	.post(apicontroller.save)