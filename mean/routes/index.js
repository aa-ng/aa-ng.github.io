var express = require('express');
var router = express.Router();
var Page = require('../models/page');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Home',
        message: 'Website under construction'
    });
});

module.exports = router;
