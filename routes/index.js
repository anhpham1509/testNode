var express = require('express');
var router = express.Router();


var index = function (req, res, next) {
    var collection = {};
    res.render('index', collection);
};

var about = function(req, res, next){
    var collection = {};
    res.render('index', collection);
};

/* GET home page. */
router.get('/', index);

/* GET about page. */
router.get('/about*', about);

module.exports = router;
