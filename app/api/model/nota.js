var modelNota  =require('./schema/schema');

var Nota = function(){}

Nota.save = function(data, callback){
	modelNota
		.create(data,function(err,data){
			if(err) throw err;
			callback(data);
		})
}

module.exports = Nota;