var express = require('express');
var router = express.Router();

var factory = require('../votingdapp/ethereum/factory');
var Campaign = require('../votingdapp/ethereum/campaign');
var web3 = require('../votingdapp/ethereum/web3');

router.post('/', function(req,res,next) {
       const campaign = Campaign("0xc52c546bfd807B7806AA7036F756dA26EA1C8C37")
       const vidnum = req.body.voterID;
       const name = req.body.vname;
       const passwd = req.body.password;
       const phne = req.body.phone;
       const query = {voterID : vidnum};
       var usraddress;

       //console.log(req.body);
       res.render('success', {title: 'Registration'});
       
       
       	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

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
			  console.log('usraddress:',usraddress);
			  const sender = await web3.eth.getCoinbase();
       			  //console.log('coinbase:',sender);
			  //web3.eth.personal.unlockAccount(usraddress,passwd);
			  //web3.eth.sendTransaction({from:sender, to:usraddress, value:"999999999999999"})
			  //adding user's eth address and password to db
			  /*dbo.collection('voterslist').updateOne({voterID:vidnum},{$set:{password:passwd, phone:phne, address:usraddress}},function(err,res){
	    	  	  if (err) throw err;
	  	  	  console.log("1 user login created");
			  db.close();
			  });*/
			  await campaign.methods.registerVoter(
		          	vidnum,
		          	name,
		          	usraddress
		    	  ).send({ from: sender });

			})();
		  }
		});
            
       });
//res.redirect('http://localhost:3000/campaigns/0xc52c546bfd807B7806AA7036F756dA26EA1C8C37/vote');

})


module.exports = router;
//module.exports = usraddress;
