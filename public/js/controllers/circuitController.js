// MAIN CONTROLLER
function circuitController($scope, $http, circuitService) {

    $scope.title = "Circuits";

    $scope.walkers = [];
    $scope.i = 1;
    $scope.suivant = function () {

        $scope.i += 1;
    }
    $scope.precedent = function () {
        $scope.i -= 1;
    }

    function load() {
        circuitService.get().then(function (res) {
            $scope.circuits = res.data;

        });
    }
    $scope.addToCircuitsWalkers = function (Walker) {}

    $scope.add = function () {
        var data = {};
        data.name = $scope.name;
        data.date = $scope.date;
        data.place = $scope.place;
        data.feet = $scope.feet;
        data.bike = $scope.bike;
        data.locomotion = $scope.locomotion;
        data.occasionnel = $scope.occasionnel;
        data.habitue = $scope.habitue;
        data.sportif = $scope.sportif;
        data.kml = $scope.kml;
        data.distance = $scope.distance;
        data.experience = $scope.experience;
        circuitService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.name = "";
        $scope.date = "";
        $scope.feet = "";
        $scope.bike = "";
        $scope.kml = "";
        $scope.occasionnel = "";
        $scope.habitue = "";
        $scope.sportif = "";
    }
    $scope.update = function (circuit) {
        circuitService.update(circuit._id, circuit).then(function (res) {
            load();
        });
    }
    $scope.delete = function (circuit) {
        circuitService.delete(circuit._id).then(function (res) {
            load();
        });
    }
    load();
}

