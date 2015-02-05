(function(){
	angular.module('notas',['notas.controller']).
		config(function($interpolateProvider) {
    		$interpolateProvider.startSymbol('{$');
    		$interpolateProvider.endSymbol('$}');
		});
}());