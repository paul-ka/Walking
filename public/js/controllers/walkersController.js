// MAIN CONTROLLER
function walkersController($scope, $http, walkersService) {
	$scope.title = "Marcheurs";
	
	function load(){
		walkersService.get().then(function(res){
			$scope.walkers = res.data;
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
	$scope.update = function(walker){
		walkersService.update(walker._id, walker).then(function(res){
			load();
		});
	}
	$scope.delete = function(walker){
		walkersService.delete(walker._id).then(function(res){
			load();
		});
	}
	load();
}
