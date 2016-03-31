// MAIN CONTROLLER
function historyController($scope, $http, historyService) {
    $scope.title = "L'historique";


    // set default scope variables
    $scope.data = $scope.img = $scope.loc = $scope.status = null;

    // hide ajax loader image on page load
    $scope.loader = false;

    // process the following code when the form is submitted
    $scope.submit = function () {

        // display ajax loader image
        $scope.loader = true;

        // reset status code
        $scope.status = null;

        // fire ajax request to get weather report for selected location
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.loc + '&appid=a9bfa08d7c9a72603190225b4f255c70')

        // the ajax request was successful
        .success(function (data, status) {

            // store request data in scope
            $scope.data = data;

            // store status code in scope
            $scope.status = status;

            // the selected location was found
            if (data.cod == 200) {

                // build image url
                $scope.img = 'http://openweathermap.org/img/w/' + data.weather[0]['icon'] + '.png';

                // the selected location was not found
            } else {

                // set error message
                $scope.data.message = 'Sorry, \'' + $scope.loc + '\' could not be found.';

            }

            // hide ajax loader image
            $scope.loader = false;
        })

        // the ajax request failed
        .error(function (data, status) {
            // set error message
            $scope.data = 'Oops! The request failed.';

            // store status code in scope
            $scope.status = status;

            // hide ajax loader image
            $scope.loader = false;
        });
    };



    function load() {
        historyService.get().then(function (res) {
            $scope.historys = res.data;
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