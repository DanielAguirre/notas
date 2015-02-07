(function(){

	var NotaDirective = function(){
		return {
			restrict: 'E',
        	templateUrl: '/js/partials/nota.html',
        	controller:NotaController
		}
	};

	angular.module('notas.directive',[])
		.directive('notaDescription',NotaDirective);

}());