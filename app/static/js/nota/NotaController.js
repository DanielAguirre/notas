(function(){
	var NotaController = function($scope,$rootScope,$route, $routeParams, NotaService){		

		$scope.getAll = function(){
			NotaService
				.getAll(function(notas){				
					$scope.notas = notas;
					$rootScope.action={ create:"Crear nota"}
				});
		}

		$scope.getNote = function() {
			NotaService
				.getNote($routeParams.id,function(nota){
					$scope.nota=nota;
					$rootScope.action={view:"Ver notas"}
				});
		}
		$scope.delete = function(id){
			NotaService.delete(id);
		}
	}

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','$rootScope','$route','$routeParams','NotaService',NotaController]);
}())