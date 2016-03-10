/*
  This module defines the route for /resources
*/


var router = require('express').Router();
var Resource = require('../models/resource');


router.get('/', function (req, res, next) {
  Resource
    .query()
    .then(function (resource) {
      if (!resource) throwNotFound(); 
      res.send(resource);
    })
    .catch(next);
});


module.exports = router; 


function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}



/*//add a new resource
app.put('/resources/', function (req, res, next) {
  console.log(req.body);
  Resource
    .query()
    .insertAndFetch(req.body)
    .then(function (resource) {
      console.log(resource);
      res.send(resource); 
    })
    .catch(next);
});

app.patch('/resources/:ldap', function (req, res, next) {
  console.log(req.body);
  // res.send(req.body);
  Resource
  .query()
  .patchAndFetchById(req.params.ldap, req.body)
  .then(function (resource) {res.send(resource); })
  .catch(next);
});


app.get('/resources/:ldap', function (req, res, next) {
  var q;

  q = Resource
    .query()
    .where('LDAP', req.params.ldap)
    .first();
  

  console.log(q.toString());

  q.then(function (resource) {
    if (!resource) throwNotFound(); 
    res.send(resource);
  })
  .catch(next);

});

app.get('/resources/', function (req, res, next) {
  Resource
    .query()
    .then(function (resource) {
      if (!resource) throwNotFound(); 
      res.send(resource);
    })
    .catch(next);
});

app.get('/resources/fname/:fname', function (req, res, next) {
  Resource
    .query()
    .where('Fname', req.params.fname)
    .then(function (resource) {
      if (!resource) throwNotFound(); 
      res.send(resource);
    })
    .catch(next);
});



*/