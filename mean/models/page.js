var mongoose = require("mongoose");

var PageSchema = mongoose.Schema({
    href: {
        type: String,
        lowercase: true,
        trim: true
    },
    cards: []
});

var Page = module.exports = mongoose.model('Page', PageSchema);

module.exports.createPage = function(newPage, callback){
    newPage.save(callback);
};

module.exports.getPageByUrl = function(href, callback){
    var query;
    //remove '/' from query if there to match database
    if (href.length > 1 && href.charAt(href.length-1) === '/')
        query = { href: href.substring(0, href.length-1) }
    else
        query = { href: href };
    console.log('[pageQuery] : '+JSON.stringify(query))
    Page.findOne(query, callback);
};

module.exports.getAllPages = function(callback) {
    Page.find({}, callback);
};