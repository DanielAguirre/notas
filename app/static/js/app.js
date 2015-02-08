(function(){
	angular.module('notas',
        ['ngRoute',
        'ngResource',
        'notas.controller',
        'notas.service',
        'notas.directive']).
		config(['$interpolateProvider', '$routeProvider',function($interpolateProvider, $routeProvider) {
    		$interpolateProvider.startSymbol('{$');
    		$interpolateProvider.endSymbol('$}');

    		$routeProvider
    			.when('/',{
    				templateUrl:'views/notas.html',
    				controller: 'NotaController',
                    resolve: {
                        notas: function(NotaService){
                            return NotaService.get();
                        }
                    }
    			})
                .when('/nueva',{
                    templateUrl:'views/nueva-nota.html',
                    controller: 'NotaController',
                    resolve:{
                        notas: function(){
                            return null;
                        }
                    }
                })
		}]);
}());