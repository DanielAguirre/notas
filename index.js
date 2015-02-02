var http = require('http'),
	mongoose = require('mongoose'),
	conf = require('./conf'),
	expressServer = require('./app/expressServer');

mongoose.connect('mongodb://'+conf.mongoDB.host+'/'+conf.mongoDB.name);

var app = new expressServer();

var server = new http.createServer(app.expressServer);


if(!module.parent){
	server.listen(conf.port,function(){
		console.log('runnig app');
	});
}else {
	module.exports = server;
}