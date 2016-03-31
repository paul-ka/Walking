// MAIN CONTROLLER
function walkersController($scope, $http, walkersService) {
	$scope.title = "Les amis";
	
	function load(){
		walkersService.get().then(function(res){
			$scope.todos = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		walkersService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(todo){
		walkersService.update(todo._id, todo).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		walkersService.delete(todo._id).then(function(res){
			load();
		});
	}
	load();
}
