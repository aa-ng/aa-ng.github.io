var mongoose = require("mongoose");

var PageSchema = mongoose.Schema({
    href: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    tabbed: [
        {

        }
    ],
    cards: [
        {

        }
    ]
});

var Page = module.exports = mongoose.model('Page', PageSchema);

module.exports.createPage = function(newPage, callback){
    newPage.save(callback);
};

module.exports.getPageByUrl = function(href, callback){
    var query;
    if (href) {
        //remove '/' from query if there to match database
        if (href.length > 1 && href.charAt(href.length - 1) === '/')
            query = {href: href.substring(0, href.length - 1)};
        else
            query = {href: href};
        console.log('[pageQuery] : ' + JSON.stringify(query));
        Page.findOne(query, callback);
    }
};

module.exports.getAllPages = function(callback) {
    Page.find({}, callback);
};

module.exports.updatePage = function(data, callback) {
    if (data)
    {
        //not entirely sure why object must be parsed twice
        //testing seems to imply once to string, then again for object
        var page = JSON.parse(JSON.parse(data));
        var query = {_id: page._id};
        console.log("Query: "+JSON.stringify(query));
        Page.findOneAndUpdate(query, page, {upsert:true}, function(err, doc){
            if (err) return res.send(500, { error: err });
            else
                callback();
        });
    }
}