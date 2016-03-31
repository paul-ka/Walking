function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/circuit.html',
			controller: 'circuitController'
		})
		.when('/walkers', {
			templateUrl: 'views/walkers.html'
			controller: 'walkersController'
		})
		.when('/history', {
			templateUrl: 'views/history.html'
			controller: 'historyController'
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
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('circuitController', circuitController)
    .controller('walkersController', walkersController)
    .controller('historyController', historyController)
    .service('circuitService', circuitService)
    .service('walkersService', walkersService)
    .service('historyService', historyService)
    /*.factory('', )*/
    .run(run);

