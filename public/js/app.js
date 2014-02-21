angular.module('myapp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl:'partials/test',
				controller:'testCtrl'
			})
	}])
	.controller('testCtrl', ['$scope', function(tScope){
		tScope.name = "Testing";
	}]);