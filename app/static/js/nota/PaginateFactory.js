(function(){

	var PaginateFactory = function(){
		var PaginateFactory = {};

		PaginateFactory.paginate = function($scope,pagina) {
			setTimeout(function(){
				$scope.$apply(function(){
					$scope.notas = $scope.all_notes.slice((pagina*10)+1,(pagina+1)*10)
					$scope.pagina = pagina+1
				})				
			}, 100)
		}
		return PaginateFactory;
	}
		
	angular.module('notas.factory',[])
		.factory('PaginateFactory', PaginateFactory)
})();