(function(){
	var NotaController = function($scope,$route, $routeParams, NotaService){		

		$scope.getAll = function(){
			NotaService
				.getAll(function(notas){				
					$scope.notas = notas;
				});
		}

		$scope.getNote = function() {
			NotaService
				.getNote($routeParams.id,function(nota){
					$scope.nota=nota;
				});
		}
		$scope.delete = function(id){
			NotaService.delete(id);
		}
	}

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','$route','$routeParams','NotaService',NotaController]);
}())