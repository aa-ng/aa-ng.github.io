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
    var query = { href:href };
    Page.findOne(query, callback);
};