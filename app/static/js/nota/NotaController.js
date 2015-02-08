(function(){
	var NotaController = function($scope,$route, $routeParams, NotaService){		

		$scope.getAll = function(){
			NotaService
				.get()
				.$promise.then(function(data){
					$scope.notas = data.notas;
				});
		}
		$scope.getNote = function(){
			console.log($routeParams)
			NotaService
				.get({id:$routeParams.id})
				.$promise.then(function(data){
					$scope.nota=data.nota;
					console.log(data.nota);
				})
		}
	}

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','$route','$routeParams','NotaService',NotaController]);
}())