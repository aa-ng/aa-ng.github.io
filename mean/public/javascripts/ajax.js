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
        log("post",JSON.stringify(res));
        //generate a html view from the response
        generateLayout(res);
        //add scroll animations
        //scrollAnimate();
        //upgrades mdl textfields as they can render incorrectly when dynamically generated
        componentHandler.upgradeElements($('.mdl-textfield').get());
        componentHandler.upgradeElements($('.mdl-button').get());
        //componentHandler.upgradeElements($('.mdl-textfield').get());
    });
});

/*
* Converts multi spaced string to just the string before the first space
* (Delimits by space character and returns the first token)
 */
function titleToId(title)
{
    //delimit title by spaces
    var id = title.split(" ");
    //get first word and remove extra characters such as commas for the id
    id = id[0].replace(',','');
    return id;
}

/*
Sends put request to backend to update page
 */
function updatePage(button){
    console.log(JSON.stringify(button));
    //removed string condensation as it was removing spaces in data, that was wanted
    var page = JSON.stringify($("textarea[name="+button+"]").val()); //.replace(/(\r\n|\n|\r|\s)/gm,""));
    log("page", page);
    var request = $.ajax({
        url: '/api/pages',
        type: 'PUT',
        async: false,
        data: {page: page},
        success: function (res){
            log('form', res);
        }
    });
}

//capture tab key press for textarea
$("div.center").on('keydown', 'textarea', function(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        // call custom function here
    }
});

//add tabbing functionality to textarea
$(document).delegate('textarea', 'keydown', function(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        var start = $(this).get(0).selectionStart;
        var end = $(this).get(0).selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        $(this).val($(this).val().substring(0, start)
            + "\t"
            + $(this).val().substring(end));

        // put caret at right position again
        $(this).get(0).selectionStart =
            $(this).get(0).selectionEnd = start + 1;
    }
});

/*
$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
});
*/

//standardized log function for consistent format in console
function log(tag,message){ console.log("["+JSON.stringify(tag)+"]"+" : "+JSON.stringify(message))}
