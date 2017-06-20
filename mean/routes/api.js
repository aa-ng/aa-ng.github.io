var express = require('express');
var router = express.Router();
var Page = require('../models/page');

var url = require('url');

/*
* Get request for pages
* JSON API that returns the page data documents associated to the query 'path' provided
 */
router.get('/pages', function(req, res, next){
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    if (query.url === '*')
    {
        Page.getAllPages(function (err, doc){
            if (err)
                console.log(req.url+" : error retrieving all pages");
            else
                res.json(doc);
        })
    }
    else
    {
        Page.getPageByUrl(query.url, function (err, doc) {
            if (err) {
                console.log(req.url + " : not found");
            }
            else {
                console.log('[pages] : ' + doc);
                res.json(doc);
            }
        });
    }
});

/*
* Post request for pages
* JSON API that creates a new page data documents and saves it to the db
* To be implemented: req validation
 */
router.post('/pages', function(req, res, next){
    var reqPage = JSON.parse(JSON.parse(req.body.page));
    console.log(reqPage);
    var newPage = Page({
        href: reqPage.href,
        name: reqPage.name,
        cards: reqPage.cards
    });
    Page.createPage(newPage, function(err, page){
        if (err)
            console.log(err);
        else
            res.json('success');
        console.log(page);
    });
});

/*
* Put request for pages
* JSON API that updates/replaces page data documents according to the query provided
 */
router.put('/pages', function(req, res, next){
    //to implement
    //console.log(req.body);
    Page.updatePage(req.body.page, function(){
        res.json(req.body.page);
    });
});

module.exports = router;