var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

// router.get('/addUser', function (req,res) {
//   res.render('addUser',{title: 'Add User'});
// });

// router.post('/userAdd', function (req,res) {
//   var myobj=req.body;
//    MongoClient.connect(url, function(err, db) {
//      if (err) throw err;
//      var dbo = db.db("bavi");
//      dbo.collection("userList").insertOne(myobj, function(err, res) {
//        if (err) throw err;
//        console.log("1 document inserted");
//        db.close();
//        router.get('/', function(req, res, next) {
//          res.render('index', { title: 'Added' });
//        });
//
//      });
//    });
// });

module.exports = router;
