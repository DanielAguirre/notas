var env = process.env.NODE_EN || 'production',
	express  = require('express'),
	swig = require('swig'),
	bodyParser = require('body-parser'),
	middlewares = require('./middlewares'),
	urls = require('./urls');

var ExpressServer = function(){
	
	this.expressServer = express();

	//middlewares

	this.expressServer.use(bodyParser.json());

	for(var middleware in middlewares) {
		console.log(middleware);
		this.expressServer.use(middlewares[middleware])
	}

	if(env === 'development') {
		console.log('OK NO HAY CACHES');
		this.expressServer.set(' view cache', false);
	}

	this.expressServer.engine('html',swig.renderFile);
	this.expressServer.set('view engine','html');
	this.expressServer.set('views',__dirname+'/website/views');

	for(var url in urls) {
		this.expressServer.use(url,urls[url]);
	}
}


module.exports = ExpressServer;