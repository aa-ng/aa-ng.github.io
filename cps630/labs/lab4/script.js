var todo_url = 'todo.json'

//var todo = angular.module('todo', []);
//todo.controller('todoController', function($scope) {
function todoController ($scope)
{
	$scope.list = renderTodo().todo;
	log('todoController',$scope.list);
}
//});

function addTodo()
{

}

function requestTodo()
{
	var request = new XMLHttpRequest();
	request.open('GET', todo_url, true);
	request.onload = function ()
	{
		if (request.status >= 200 && request.status < 400)
		{
			log('requestTodo', request.responseText);
			renderHTML(JSON.parse(request.responseText));
			return (JSON.parse(request.responseText));
		}
	}
	request.onerror = function () 
	{ 
		var error='Request dropped? error'; 
		alert(error); 
		log('requestTodo', error);
	};
	request.send();
}

function renderTodo(object)
{
	var object_html = '<div class="jumbotron card">'
		+'<div class="container">'
			+'<div class="col-lg-9">'
				+'<h2>'+object.title+'</h2>'
				+'<p>Completed: '+object.complete+'</p>'
				+'<p>Description: '+object.description+'</p>'
			+'</div>'
			+'<div class="col-lg-3">'
				+'<button class="remove">Remove</button>'
				+'<button class="complete">Complete</button>'
			+'</div>'
		+'</div>'
	+'</div>'
	return object_html;
}

function renderHTML(object)
{
	var list_html = '';
	var list_container = document.getElementById('list_container');
	var list = object.todo;

	log('renderHTML', list[0]);
	for (var i = 0; i < list.length; i++)
	{
		log('renderHTML', i+" : "+renderTodo(list[i]));
		list_html = list_html + renderTodo(list[i]);
	}

	list_container.innerHTML = list_html;
}

function log(tag, message)
{
	console.log("["+tag+"]"+" : "+ message);
}