(function(){
	var NotaController = function($scope,$rootScope,$route, $routeParams, NotaService, PaginateFactory) {	

		$rootScope.action = {};

		$scope.creat_note = function(){
			NotaService.creat_note({nota:$scope.nota}, function(nota){});
		}

		$scope.getAll = function(){
			NotaService
				.getAll(function(notas){				
					$scope.all_notes = notas;					
					$scope.notas = $scope.all_notes.slice(0,10)
					$scope.pagina=1;
					$rootScope.action.create="Crear nota";
				});
		};

		$scope.getNote = function() {
			NotaService
				.getNote($routeParams.id,function(nota){
					$scope.nota=nota;
					$rootScope.action.create="Crear nota";
					$rootScope.action.view="Ver notas";
					if($routeParams.id){
						$rootScope.action.edit=true;
					}
				});
		};


		$scope.update_note = function(){
			$scope.nota.id = $routeParams.id;
			NotaService.updateNote($scope.nota,function(nota){});
		};

		$scope.delete = function(id){
			NotaService.delete(id);
		};

		$scope.clear_model= function(){
			$scope.nota = null;
		};

		$scope.paginate= function(pagina){
			PaginateFactory.paginate($scope, pagina);
		};

	};

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','$rootScope','$route','$routeParams','NotaService','PaginateFactory',NotaController]);
}())