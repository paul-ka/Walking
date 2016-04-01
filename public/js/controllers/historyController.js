// MAIN CONTROLLER
function historyController($scope, $http, historyService, circuitService, walkersService) {
    $scope.title = "L'historique";
    $scope.i = 1;
    $scope.suivant = function () {
        debugger
        $scope.i += 1;
    }
    $scope.precedent = function () {
        $scope.i -= 1;
    }


    function load() {
        historyService.get().then(function (res) {
            $scope.historys = res.data;
        });
        circuitService.get().then(function (res) {
            $scope.circuits = res.data;
        });
        walkersService.get().then(function (res) {
            $scope.walkers = res.data;
        });
    }
    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        historyService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
    }
    $scope.update = function (history) {
        historyService.update(history._id, history).then(function (res) {
            load();
        });
    }
    $scope.delete = function (history) {
        historyService.delete(history._id).then(function (res) {
            load();
        });
    }
    load();
}