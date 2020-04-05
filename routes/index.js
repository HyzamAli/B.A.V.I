var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;
