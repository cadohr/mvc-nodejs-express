var mongoose = require('mongoose')
var Video = require('../models/message');
module.exports.controller = function(router) {

/**
 * a home page route
 */
  router.get('/message', function(req, res) {
      // any logic goes here
      res.render('message/message')
  });

/**
 * About page route
 */
  router.get('/jean', function(req, res) {
      // any logic goes here
      res.render('message/jean')
  });

}