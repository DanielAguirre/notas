(function(){
	angular.module('notas',
        ['ngRoute',
        'ngResource',
        'notas.controller',
        'notas.service',
        'notas.directive',
        'notas.factory'])
		.config(['$interpolateProvider', '$routeProvider',function($interpolateProvider, $routeProvider) {
        	$interpolateProvider.startSymbol('{$');
    		$interpolateProvider.endSymbol('$}');

    		$routeProvider
    			.when('/',{
    				templateUrl:'views/notas.html',
    				controller: 'NotaController',                    
    			})
                .when('/nota/:id',{
                    templateUrl:'views/detail-note.html',
                    controller: 'NotaController',
                    resolve :{}
                })
                .when('/nueva',{
                    templateUrl:'views/nueva-nota.html',
                    controller: 'NotaController',
                })
                .when('/editar/:id',{
                    templateUrl:'views/nueva-nota.html',
                    controller: 'NotaController',
                })
                .otherwise({
                    redirectTo: '/'
                });
		}]);
}());