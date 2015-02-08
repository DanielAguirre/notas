(function(){
	var NotaService = function($resource){
		return $resource('/api/notas/:id',{id:'@id'});
	}

	angular.module('notas.service',[])
		.service('NotaService',['$resource',NotaService])
}())