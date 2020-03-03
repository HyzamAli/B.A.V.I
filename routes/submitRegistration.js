var express = require('express');
var router = express.Router();

router.post('/', function(req,res,next) {
       console.log(req.body);
       res.render('success', {title: 'Registration'});
       
       	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27018/";

	var dbConn = MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
 	 var dbo = db.db("BAVI");
 	 dbo.collection("voterslist").insertOne(req.body, function(err, res) {
    	if (err) throw err;
  	  console.log("1 user details inserted");
   	 db.close();
  });
});
            
})


module.exports = router;
