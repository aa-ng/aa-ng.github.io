todo.controller('todoController', function($scope) {
	$scope.list = requestTodo().todo;
	log('todoController',$scope.list);
});