var express = require('express');
var router = express.Router();

var factory = require('../votingdapp/ethereum/factory');
var Campaign = require('../votingdapp/ethereum/campaign');
var web3 = require('../votingdapp/ethereum/web3');

router.post('/', function(req,res,next) {
       const vidnum = req.body.voterID;
       const passwd = req.body.password;
       const phne = req.body.phone;
       const query = {voterID : vidnum};
       var usraddress;

       console.log(req.body);
       res.render('success', {title: 'Registration'});
       
       	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27018/";

	var dbConn = MongoClient.connect(url, function(err, db) {
	  	if (err) throw err;
	 	var dbo = db.db("BAVI");
		dbo.collection('voterslist').find(query).toArray(function(err,result) {
		  if (err) throw err;
		  //console.log('result[0]:',result[0]);
		  if(result[0]==null){
			console.log('User Not Registered Voter');
		  }else{
		  	console.log('User Registered Voter');
			//creating new eth accnt for user
			(async () => {
			  usraddress = await web3.eth.personal.newAccount(passwd);
			  console.log(usraddress);
			  web3.eth.personal.unlockAccount(usraddress,passwd);
			  //var sender = web3.eth.coinbase;
			  //console.log('coinbase',sender);
			  web3.eth.sendTransaction({from:"0x4e635f8347b45c456085da391a0b0e53437f4616", to:usraddress, value:"999999999999999"})
			
	
		        
			  dbo.collection('voterslist').updateOne({voterID:vidnum},{$set:{password:passwd, phone:phne, address:usraddress}},function(err,res){
	    	  	  if (err) throw err;
	  	  	  console.log("1 user login created");
			  db.close();
			  });
			})();
		  }
		});
            
       });
})

module.exports = router;
//module.exports = usraddress;
