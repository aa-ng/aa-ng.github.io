var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin', {
        title: 'Admin',
        message: 'Are you supposed to be here?',
    });
});

module.exports = router;