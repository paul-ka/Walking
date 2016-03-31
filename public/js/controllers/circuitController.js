// MAIN CONTROLLER
function circuitController($scope, $http, circuitService) {
	$scope.title = "Circuit";
	
	function load(){
		circuitService.get().then(function(res){
			$scope.todos = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		circuitService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(todo){
		circuitService.update(todo._id, todo).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		circuitService.delete(todo._id).then(function(res){
			load();
		});
	}
	load();
}
