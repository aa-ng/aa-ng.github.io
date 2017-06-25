/*
* Author:Alex
* Purpose: Handle AJAX request for pages
* Dependencies: AngularJS, JQuery, style.css
* Features: AJAX request for index page data
*/

//initialize angularjs app
var app = angular.module("app",[]);

//initialize angularjs main controller
app.controller("main", function($scope, $http){
    //the current path of the page/user
    var pathname = window.location.pathname;
    log('path', pathname);
    //ajax post to root of api route (gets the data layout of the main page)
    $http({
        url: '/api/pages',
        method: 'GET',
        params: {url: pathname}
    }).then(function(res){
        //log the request response
        log("post",(res));
        //generate a html view from the response
        generateLayout(res);
        //add scroll animations
        //scrollAnimate();
        //upgrades mdl textfields as they can render incorrectly when dynamically generated
        componentHandler.upgradeElements($('.mdl-textfield').get());
        componentHandler.upgradeElements($('.mdl-button').get());
        componentHandler.upgradeElements($('.toc').get());
        componentHandler.upgradeElements($('.mdl-layout__drawer'));
    });
});

/*
Sends put request to backend to update page
 */
function updatePage(button){
    log('buttonPressed', button);
    //removed string condensation as it was removing spaces in data, that was wanted
    var page = JSON.stringify($("textarea[name="+button+"]").val()); //.replace(/(\r\n|\n|\r|\s)/gm,""));
    log("page", page);
    var method = 'PUT';
    if (button === 'New')
        method = 'POST';
    var request = $.ajax({
        url: '/api/pages',
        type: method,
        async: false,
        data: {page: page},
        success: function (res){
            log('form', res);
        }
    });
}

/*
Requests list of all page data/documents
 */
function requestAllPageData()
{
    //should be synchronous or else the function will try and return undefined implicitly upon completion
    return $.ajax({
        async: false,
        url: '/api/pages',
        type: 'GET',
        data: {url: '*'},
        contentType: 'application/json; charset=utf-8'
    }).responseText;
}
