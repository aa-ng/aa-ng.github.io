var app = angular.module("app",[]);
app.controller("main", function($scope, $http){
    $http.post("https://localhost").then(function(res){
        console.log(JSON.stringify(res));
    });
});

$(document).ready(function(){

});
