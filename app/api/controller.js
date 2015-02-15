var modelNota = require('./model/nota');

var ApiController = function(){};

ApiController.getAll = function(req, res){
	modelNota.findAll(function(data){
		res.
			json({notas:data})
	});
}

ApiController.save = function(req,res) {
	var nota = req.body.nota;
	modelNota.save(nota,function(data){
		res
		.status(201)
		.set('Content-Type','application/json')
		.json({nota:data})
	})
}

ApiController.get = function(req,res, next) {
	var id = req.params.id
	modelNota.find(id,function(data){
		
		if(!data){
			return res
					.status(400)
					.send();
		}

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
ApiController.delete = function(req,res){
	var id = req.params.id;
	modelNota.delete(id, function(){
		res
			.status(204)
			.send();
	})
}

module.exports = ApiController;