// MAIN CONTROLLER
function circuitController($scope, $http, circuitService) {
    $scope.title = "Circuits";
    $scope.i = 1;

    function load() {
        circuitService.get().then(function (res) {
            $scope.circuits = res.data;
        })
        $scope.suivant = function () {
            debugger
            $scope.i += 1;
        }
        $scope.precedent = function () {
            $scope.i -= 1;
        }

        $scope.add = function () {
            var data = {};
            data.name = $scope.name;
            data.place = $scope.place;
            data.locomotion = $scope.locomotion;
            data.kml = $scope.kml;
            data.distance = $scope.distance;
            data.difficulty = $scope.difficulty;
            circuitService.create(data).then(function (res) {
                load();
            });
            $scope.description = "";
            $scope.name = "";
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
}