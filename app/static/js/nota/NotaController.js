(function(){
	var NotaController = function($scope,$rootScope,$route, $routeParams, NotaService, PaginateFactory) {	

		$scope.getAll = function(){
			NotaService
				.getAll(function(notas){				
					$scope.all_notes = notas;					
					$scope.notas = $scope.all_notes.slice(0,10)
					$scope.pagina=1;
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

		$scope.clear_model= function(){
			console.log($scope.nota);

		}

		$scope.paginate= function(pagina){
			$scope.notas = {};			
			PaginateFactory.paginate($scope, pagina);
		}
	}

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','$rootScope','$route','$routeParams','NotaService','PaginateFactory',NotaController]);
}())