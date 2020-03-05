
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  console.log(req.body);
  // console.log('hello');

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  var dbConn = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("BAVI");
  console.log(req.body.aadhar);
  // var no = req.body.aadhaar;
  // console.log(no);
  if((dbo.collection('voterslist').find( { "aadhaar": '1234'} ).count()) > 0)
  {
  	console.log('Existing user');
  }
  else 
  {
  	console.log('User does not exist');
  }
  // console.log(no);
  // console.log('Hello')
   db.close();
	// });
});
  });

module.exports = router;