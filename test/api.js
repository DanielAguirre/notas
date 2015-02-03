'use strict'

var request = require('supertest-as-promised'),
	api = require('../index'),
	host = process.env.API_TEST_HOST || api,
	url='/api/notas';

var data = {
		'nota':{
			'title': "Mejorando.la #node-pro",
			"description": "Introducion a clase",
			"type":"js",
			"body": "soy el cuerpo del json"
		}
	};

request = request(host);

describe('recurso /notas',function(){
	describe('POST',function(){
		it('deberia crear una nueva nota', function(done){
			request.post(url)
				.set('Accept', 'application/json')
				.send(data)
				.expect('Content-Type',/application\/json/)
				.expect(201)
				.then(function(res){
					id = res.body.nota.id;
					return request
								.get('/api/notas/'+id)
								.expect(200)
								.expect('Content-Type',/application\/json/)
				} ,done)
				.then(function(res){
					var nota = res.body.nota;
					//Propiedades					
					expect(nota).to.have.property('title', "Mejorando.la #node-pro");
					expect(nota).to.have.property("description", "Introducion a clase");
					expect(nota).to.have.property('type', 'js');
					expect(nota).to.have.property('body','soy el cuerpo del json');
					expect(nota).to.have.property('id',id);
					done();
				},done);
		})
	})
})