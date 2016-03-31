// MAIN CONTROLLER
function kmlController($scope, NgMap) {
	$scope.title = "KML";

    NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
	
}
