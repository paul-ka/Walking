// MAIN CONTROLLER
function historyController($scope, $http, historyService) {
	$scope.title = "L'historique";
	
	function load(){
		historyService.get().then(function(res){
			$scope.todos = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		historyService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(todo){
		historyService.update(todo._id, todo).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		historyService.delete(todo._id).then(function(res){
			load();
		});
	}
	load();
}
