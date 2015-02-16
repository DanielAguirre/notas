(function(){
	var NotaService = function($resource){
		
		var resource = $resource('/api/notas/:id',{id:'@id'}, 
			{'update': { method:'PUT' } }
         );

		this.creat_note = function(nota,callback){
			resource
				.save(nota)
				.$promise.then(function(data){
					callback( data);
				});
		}
		
		this.getAll = function(callback){
			resource
				.get()
				.$promise.then(function(data){
					callback( data.notas);
				});
		}

		this.getNote = function(id,callback){
			resource
				.get({id:id})
				.$promise.then(function(data){
					callback(data.nota);
				})
		}

		this.updateNote = function(nota,callback){
			resource.update(nota)
				.$promise.then(function(data){
					callback(data.nota);
				})
		}

		this.delete = function(id){
			resource
				.remove({id:id})
				.$promise.then(function(data){});
		}
	}

	angular.module('notas.service',[])
		.service('NotaService',['$resource',NotaService])
}())