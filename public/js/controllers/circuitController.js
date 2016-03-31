// MAIN CONTROLLER
function circuitController($scope, $http, circuitService) {
	$scope.title = "Circuits";
	
	function load(){
		circuitService.get().then(function(res){
			//$scope.circuits = res.data;
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
	$scope.update = function(circuit){
		circuitService.update(circuit._id, circuit).then(function(res){
			load();
		});
	}
	$scope.delete = function(circuit){
		circuitService.delete(circuit._id).then(function(res){
			load();
		});
	}
	load();
}
