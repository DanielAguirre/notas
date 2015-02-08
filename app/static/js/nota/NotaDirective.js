(function(){

	var NotaDescription = function() {
		return {
			restrict: 'E',
        	templateUrl: 'js/partials/nota.html',
        	//controller:NotaController
		}
	};

	angular.module('notas.directive',[])
		.directive('notaDescription',['NotaController', NotaDescription]);

}());