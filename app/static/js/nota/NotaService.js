(function(){
	var NotaService = function($resource){
		return $resource('/api/notas');
	}

	angular.module('notas.service',[])
		.service('NotaService',['$resource',NotaService])
}())