var ApiController = function(){}

ApiController.save = function(req,res){
	var nota = req.body.nota;
	
	nota.id=123;
		
	res
		.status(201)
		.json({nota:nota})
}

module.exports = ApiController;