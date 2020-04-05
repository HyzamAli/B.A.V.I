var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

  const number = req.body.voterID;
  const password = req.body.password;
  const getUserQuery = {voterID : number};

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27018/";
  var dbConn = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("BAVI");

  dbo.collection('voterslist').find(getUserQuery).toArray(function(err,result){
    if (err) throw err;
    console.log('result[0]:',result[0]);
    if(result[0]==null) {
      console.log('No user found');
    }else{
      console.log('User found');

      if(password == result[0].password) {
        console.log('Correct password');
        res.render('userHome', {title: 'Registration'});
      }else {
        console.log('Wrong Password');
      }

    }
  })
  db.close();
  });
});

module.exports = router;
