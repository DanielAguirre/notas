(function(){
	angular.module('notas',['ngRoute','notas.controller']).
		config(['$interpolateProvider', '$routeProvider',function($interpolateProvider, $routeProvider) {
    		$interpolateProvider.startSymbol('{$');
    		$interpolateProvider.endSymbol('$}');

    		$routeProvider
    			.when('/',{
    				templateUrl:'views/notas.html',
    				controller: 'NotaController'
    			})
		}]);
}());