(function(){
	var NotaController = function($scope, notas){
		if(notas){
			notas.$promise.then(function(data){
				$scope.notas = data.notas;			
			}).catch(function(err){
				throw err;
			});
		}

		$scope.getAll = function(){
			return NotaService.get();
		}
	}

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','notas',NotaController]);
}())