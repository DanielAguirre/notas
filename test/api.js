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
			request
				.post(url)				

				.set('Accept', 'application/json')
				.send(data)
				// Acept application/json
				.expect('Content-Type',/application\/json/)
				// Status Code = 201
				.expect(201)

				.end(function(err,res){
					var body = res.body;
					
					expect(body).to.have.property('nota')

					var nota = body.nota;

					//Propiedades					
					expect(nota).to.have.property('title', "Mejorando.la #node-pro");
					expect(nota).to.have.property("description", "Introducion a clase");
					expect(nota).to.have.property('type', 'js');
					expect(nota).to.have.property('body','soy el cuerpo del json');
					expect(nota).to.have.property('_id');
					done();
				});
		})
	})
	describe('GET', function(){
		it('deberia obtener una nota existente',function(done){
			var id;
			request
				.post(url)
				// Acept application/json
				.set('Accept', 'application/json')
				.send(data)
				// Status Code = 201
				.expect(201)
				.then(function(res){
					id= res.body.nota._id
					return request
							.get(url+'/'+id)
							.expect(200)
							.expect('Content-Type',/application\/json/)
				},done)
				.then(function(res){
					var nota = res.body.nota;
					//Propiedades					
					expect(nota).to.have.property('title', "Mejorando.la #node-pro");
					expect(nota).to.have.property("description", "Introducion a clase");
					expect(nota).to.have.property('type', 'js');
					expect(nota).to.have.property('body','soy el cuerpo del json');
					expect(nota).to.have.property('_id',id);
					done();
				}, done)
		})
	})
	describe('PUT', function(){
		it('deberia actualizar una nota existente', function(done){
			var id;
			request.post(url)
				.set('Accept', 'application/json')
				.send(data)
				.expect(201)
				.then(function(res){
					id= res.body.nota._id
					return request.get('/api/notas/'+id)
							.set('Accept', 'application/json')
							.send()
				}, done)
				.then(function(res){
					var nota = res.body.nota;

					nota.title = 'Juan Pablo no Sabe escribir ejecucción';
					return request
							.put(url+'/'+id)
							.expect(200)
							.expect('Content-Type',/application\/json/)
				},done)
				.then(function(res){
					var nota = res.body.nota;					
					//Propiedades					
					expect(nota).to.have.property('title', "Juan Pablo no Sabe escribir ejecucción");
					expect(nota).to.have.property("description", "Introducion a clase");
					expect(nota).to.have.property('type', 'js');
					expect(nota).to.have.property('body','soy el cuerpo del json');
					expect(nota).to.have.property('id',id);
					done();
				},done)
		})
	})
})