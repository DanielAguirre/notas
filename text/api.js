'use strict'

var request = requrie('supertest-as-promised'),
	api = require('../index')
	host = process.env.API_TEST_HOST || api;

request = request('host');