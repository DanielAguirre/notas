describe('Rutas',function(){
	var location ,route,rootScope;
	beforeEach(module('notas'));
	/*beforeEach(module('ngRoute',function($resource){

	}))*/	

	describe('index route',function(){
		beforeEach(inject(
			function($httpBackend){
				$httpBackend.expectGet('views/home.html').respond(200,'main HTML');				
			}));
		it('Debe de cargar la pagina de inicio de manera exitosa /',function(){
			location.path('/')
			rooStcope.$digest();
			expect(route.current.controller).toBe('HomeController')
		})
	;})

});