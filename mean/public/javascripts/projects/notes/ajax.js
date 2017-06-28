//initialize angularjs app
var app = angular.module("app",[]);

//initialize angularjs main controller
app.controller("main", function($scope, $http){
    //the current path of the page/user
    var pathname = window.location.pathname;
    log('path', pathname);
    //ajax post to root of api route (gets the data layout of the main page)
});