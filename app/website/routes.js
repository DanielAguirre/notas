var express = require('express');
	HomeController = require('./controllers/homecontroller');

var router = express.Router();

router.get('',HomeController.index)

module.exports = router