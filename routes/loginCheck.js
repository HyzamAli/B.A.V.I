
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
  // var database = db.db("BAVI");
  console.log(req.body.aadhaar);
  // var no = req.body.aadhaar;
  // console.log(no);
  // console.log(dbo.collection("voterslist").find({ "name": "Hyzam Ali"}).count().limit(1));
  var arr = [];
  dbo.collection("voterslist").find().forEach(function(u) { arr.push(u.aadhaar) });
  //console.log(dbo.collection("voterslist").find().pretty()); UNCOMMENT THIS LINE TO SEE GIBBERISH GETTING PRINTED
  console.log(JSON.stringify(arr));
  if(Array.isArray(req.body.aadhaar))
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
