describe('Rutas',function(){
	beforeEach(module('notas'));

	var location ,route,rootScope;

	beforeEach(
		inject(_$location_, _$route_, _$rootScope_){
			location = _$location;
			route = _$route_;
			rootScope = _$rootScope_;
		});
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
	})

});