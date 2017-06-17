var express = require('express');
var router = express.Router();
var Page = require('../models/page');

router.get('/', function (req, res, next){
    res.render('projects', {
        title: 'Projects',
        message: 'Website under construction'
    });
});

router.get('/cps630', function (req, res, next) {
    res.render('projects', {
        title: 'Web applications',
        message: 'Course completed'
    });
});


module.exports = router;