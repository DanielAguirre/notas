(function(){
	var NotaController = function($scope,notas){
		notas.$promise.then(function(data){
			$scope.notas = data.notas;
		}).catch(function(err){
			throw err;
		})
					
		console.log(notas.$promise)
		$scope.getAll = function(){
			return NotaService.get();
		}
	}

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','notas',NotaController]);
}())