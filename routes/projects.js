/*
  This module defines the route for /resources
*/


var router = require('express').Router();
//var Projects = require('../models/projects');


router.get('/', function (req, res, next) {
  res.send({greeting: 'Howdy!'});
});


module.exports = router; 


function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}