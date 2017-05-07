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

    //ajax post to root of api route (gets the data layout of the main page)
    $http.post("/api").then(function(res){
        //log the request response
        log("post",JSON.stringify(res));
        //generate a view from the response
        generateLayout(res);
        scrollAnimate();
    });
});

function titleToId(title)
{
    //delimit title by spaces
    var id = title.split(" ");
    //get first word and remove extra characters such as commas for the id
    id = id[0].replace(',','');
    return id;
}

//unused
$(document).ready(function(){

});

//standardized log function for consistent format in console
function log(tag,message){ console.log("["+tag+"]"+" : "+message)}
