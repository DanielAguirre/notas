var modelNota  =require('./schema/schema');

var Nota = function(){}

Nota.save = function(data, callback){
	modelNota
		.create(data,function(err,data){
			if(err) throw err;
			callback(data);
		});
}

Nota.find = function(id,callback){
	modelNota
		.findOne({_id:id})
		.exec(function(err,data){
			if(err) throw err;
			callback(data);
		})
}

module.exports = Nota;