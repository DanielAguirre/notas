var mongoose = require('mongoose'),
	Schema =  mongoose.Schema;

var notaSchema = new Schema ({
	title:'string',
	description:'string',
	type:'string',
	body:'string',
});

var Nota = mongoose.model('Nota', notaSchema);

module.exports = Nota;