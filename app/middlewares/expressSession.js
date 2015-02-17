'use strict';

var session = require('express-session');

module.exports = session({	
  secret: 'My super session secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: true
  }
});