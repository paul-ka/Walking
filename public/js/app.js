function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/circuit.html',
            controller: 'circuitController'
        })
        .when('/walkers', {
            templateUrl: 'views/walkers.html',
            controller: 'walkersController'
        })
        .when('/history', {
            templateUrl: 'views/history.html',
            controller: 'historyController'
        })
        .when('/kml', {
            templateUrl: 'views/kml.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}

function run($rootScope, $location) {
    var path = function () {
        return $location.path();
    };
    $rootScope.$watch(path, function (newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
}
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('circuitController', circuitController)
    .controller('walkersController', walkersController)
    .controller('historyController', historyController)
    .service('circuitService', circuitService)
    .service('walkersService', walkersService)
    .service('historyService', historyService)
    /*.factory('', )*/
    .run(run)

// filter to convert epoch time to a human friendly time
.filter('customTimeFilter', function () {
    return function (epochTime) {
        var d = new Date(0);
        d.setUTCSeconds(epochTime);
        var hours = prependZeros(d.getHours(), 2);
        var minutes = prependZeros(d.getMinutes(), 2);
        return hours + ':' + minutes + ' GMT';
    };
})

// filter to convert temperature in kelvin to celsius
.filter('customKelvinToCelsiusFilter', function () {
    return function (n) {
        return n - 273.15;
    };
});

/**
 * I prepend zeros to a number
 * @param integer n
 * @param integer len
 * @return string
 */
function prependZeros(n, len) {
    return (new Array(len + 1).join('0') + n).slice(-len);
}