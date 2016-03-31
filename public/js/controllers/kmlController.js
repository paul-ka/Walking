// MAIN CONTROLLER
function kmlController($scope) {
	$scope.title = "KML";
	
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.17, lng: 1.02},
        zoom: 8
      });
    }
	
}
