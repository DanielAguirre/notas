var modelNota = require('./model/nota')

var ApiController = function(){}

ApiController.save = function(req,res) {
	var nota = req.body.nota;
	
	//nota.id=123;
	modelNota.save(nota,function(data){
		res
		.status(201)
		.json({nota:data})
	})
}

ApiController.get = function(req,res) {
	var id = req.params.id
	modelNota.find(id,function(data){
		res.
			json({nota:data})
	})
}

ApiController.update = function(req,res) {
	var id = req.params.id;
	var nota = req.body;	
	modelNota.update(id,nota,function(data){
		res
			.json({nota:nota})
	})
}

module.exports = ApiController;