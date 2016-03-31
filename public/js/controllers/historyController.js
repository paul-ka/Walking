// MAIN CONTROLLER
function historyController($scope, $http, historyService) {
	$scope.title = "L'historique";
	
	function load(){
		historyService.get().then(function(res){
			$scope.historys = res.data;
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
	$scope.update = function(history){
		historyService.update(history._id, history).then(function(res){
			load();
		});
	}
	$scope.delete = function(history){
		historyService.delete(history._id).then(function(res){
			load();
		});
	}
	load();
}
