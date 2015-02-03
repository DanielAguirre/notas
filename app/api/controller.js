var modelNota = require('./model/nota')

var ApiController = function(){}

ApiController.save = function(req,res){
	var nota = req.body.nota;
	
	//nota.id=123;
	modelNota.save(nota,function(data){
		res
		.status(201)
		.json({nota:data})
	})
}

module.exports = ApiController;