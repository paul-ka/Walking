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
			templateUrl: 'views/kml.html',
			controller: 'kmlController'
		})
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute', 'ngMap'])
    .config(config)
    .controller('circuitController', circuitController)
    .controller('walkersController', walkersController)
    .controller('historyController', historyController)
    .controller('kmlController', kmlController)
    .service('circuitService', circuitService)
    .service('walkersService', walkersService)
    .service('historyService', historyService)
    /*.factory('', )*/
    .run(run);

