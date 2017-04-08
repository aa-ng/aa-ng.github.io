var express = require('express');
var router = express.Router();

/* Handle '/' of about */
router.get('/', function (req, res, next) {
	res.render('about', {title:' About me', path: '/about', year: new Date().getFullYear()});
});

module.exports = router;
