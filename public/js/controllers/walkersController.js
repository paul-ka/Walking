// WALKER CONTROLLER
function walkersController($scope, $http, walkersService) {
    $scope.title = "Les amis";
    $scope.walker = {};

    function load() {
        walkersService.get().then(function (res) {
            $scope.walkers = res.data;
        });

    }


    $scope.add = function () {
        walkersService.create($scope.walker).then(function (res) {
            load();
        });
        $scope.name = "";
        $scope.date = "";
        $scope.imageFile = "";
        location.reload();
    }
    $scope.update = function (walkers) {
        walkersService.update(walkers._id, walkers).then(function (res) {});
    }
    $scope.delete = function (walkers) {
        walkersService.delete(walkers._id).then(function (res) {
            load();
        });
    }
    $scope.previewFile = function () {
        var preview = document.querySelector('#preview');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
            $scope.walker.imageFile = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    $scope.content = '';

    load();
}