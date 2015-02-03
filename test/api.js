'use strict'

var request = require('supertest-as-promised'),
	api = require('../index'),
	host = process.env.API_TEST_HOST || api;

request = request(host);

describe('recurso /notas',function(){
	it('deberia crear una nueva nota', function(done){

	})
})