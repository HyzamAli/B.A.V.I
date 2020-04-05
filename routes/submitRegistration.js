var express = require('express');
var router = express.Router();

var factory = require('../votingdapp/ethereum/factory');
var Campaign = require('../votingdapp/ethereum/campaign');

router.post('/', function(req,res,next) {
       const vidnum = req.body.voterID;
       const passwd = req.body.password;
       const phne = req.body.phone;
       const query = {voterId : vidnum};

       console.log(req.body);
       res.render('success', {title: 'Registration'});
       
       	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27018/";

	var dbConn = MongoClient.connect(url, function(err, db) {
	  	if (err) throw err;
	 	var dbo = db.db("BAVI");
		dbo.collection('voterslist').find(query).toArray(function(err, result) {
		  if (err) throw err;
		  if(result[0]=null){
			console.log('User Not Registered Voter');
		  }else{
		  	console.log('User Found');
			dbo.collection("voterslist").updateOne({voterID:vidnum},{$set: { password:passwd, phone:phne }},function(err,res) {
	    	  		if (err) throw err;
	  	  		console.log("1 user login created");
	   	  		db.close();
			});
		  }

	 	
		});
            
       });
})

module.exports = router;
