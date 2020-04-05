var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('userHome', { title: 'Home' });
});

module.exports = router;