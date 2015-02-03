'use strict'

var request = require('supertest-as-promised'),
	api = require('../index'),
	host = process.env.API_TEST_HOST || api,
	url='/api/notas',
	_ = require('lodash');

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
		it('Deberia obtener una lista de todas las notas',function(done){
			var id1, id2;

			var data1 = {
				'nota':{
					'title': "Mejorando.la #node-pro",
					"description": "Introducion a clase",
					"type":"js",
					"body": "soy el cuerpo del json"
				}
			};


			var data2 = {
				'nota':{
					'title': "Mejorando.la #node-pro",
					"description": "Ya casi se acaba esta clase",
					"type":"ruby",
					"body": "wohooo"
				}
			};


			request
				.post(url)
				.set('Accept','application/json')
				.send(data1)
				.expect(201)
				.expect('Content-Type', /application\/json/)
				.then(function(res){
					id1 = res.body.nota._id;

					return 	request.post(url)
								.set('Accept','application/json')
								.send(data2)
								.expect(201)
								.expect('Content-Type', /application\/json/)
				}, done)
				.then(function(res){					
					id2 = res.body.nota._id;

					return request.get(url)
							.send()
							.expect(200)
							.expect('Content-Type', /application\/json/)
				}, done)
				.then(function(res){
					var body = res.body;
					expect(body).to.have.property('notas');
					expect(body.notas).to.be.an('array')
						.and.to.have.length.above(0);

					var notas = body.notas

					var nota1 = _.find(notas,{_id:id1})
					var nota2 = _.find(notas,{_id:id2})

					expect(nota1).to.have.property('title', "Mejorando.la #node-pro");
					expect(nota1).to.have.property("description", "Introducion a clase");
					expect(nota1).to.have.property('type', 'js');
					expect(nota1).to.have.property('body','soy el cuerpo del json');
					expect(nota1).to.have.property('_id',id1);

					expect(nota2).to.have.property('title', "Mejorando.la #node-pro");
					expect(nota2).to.have.property("description", "Ya casi se acaba esta clase");
					expect(nota2).to.have.property('type', 'ruby');
					expect(nota2).to.have.property('body','wohooo');
					expect(nota2).to.have.property('_id',id2);
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
					id= res.body.nota._id;
					return request.get(url+'/'+id)
							.set('Accept', 'application/json')
							.send()
				}, done)
				.then(function(res){
					var nota = res.body.nota;

					nota.title = 'Juan Pablo no Sabe escribir ejecucción';
					return request
							.put(url+'/'+id)
							.send(nota)
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
					expect(nota).to.have.property('_id',id);
					done();
				},done)
		})
	})
	describe('DELETE', function(){
		it('deberia eliminar una nota existente', function(done){
			var id;

			request.post(url)
				.set(data)
				.expect(201)
				.then(function(res){
					id = res.body.nota._id;
					return request.delete(url+'/'+id)
						.set('Accept','application/json')
						.expect(204)
				},done)
				.then(function(res){
					return request.get(url+'/'+id)
						.expect(400)
						
				}, done)
				.then(function(res){
					done();
				}, done)
		})

	})
})