var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

  const number = req.body.voterID;
  const password = req.body.password;
  const getUserQuery = {voterID : number};

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  var dbConn = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("BAVI");

  dbo.collection('voterslist').find(getUserQuery).toArray(function(err, result) {
    if (err) throw err;
    
    if(result[0]==null) {
      console.log('No user found');
    }else{
      console.log('User found');

      if(password === result[0].password) {
        console.log('Correct password');
        //res.render('userHome', {title: 'User Home'});
	var str = encodeURIComponent(number);
	console.log('str:',str)
	res.redirect('http://localhost:3000/campaigns/0xc52c546bfd807B7806AA7036F756dA26EA1C8C37/vote'+'?'+str);
      }else {
        console.log('Wrong Password');
      }

    }
  })
  db.close();
  });
});

module.exports = router;
