(function(){
	angular.module('pokedex.services',[])
	.factory('pokemonServices',['$http','$q','$filter',function($http,$q,$filter){
		var normalize = $filter('normalize');
		function all(){
			var deferred = $q.defer();
			$http.get('pokemons.json')
				.success(function (data) {
		        	deferred.resolve(data);
		        });
			return deferred.promise;
		}

		function byName(name){
			var deferred = $q.defer();
			name = normalize(name);
			all().then(function(data){
				var results = data.filter(function(pokemon){
					return normalize(pokemon.name) === name
				});
				if(results.length > 0){
					deferred.resolve(results[0]);
				}else{
					deferred.reject();
				}
			})
			return deferred.promise;
		}

		function byType(type){
			var deferred = $q.defer();
			type = normalize(type);
			all().then(function(data){
				var results = data.filter(function(pokemon){
					return pokemon.type.some(function(t){ //some is a JS function to work with arrays
						return normalize(t) === type
					})
				});
				deferred.resolve(results);
			})
			return deferred.promise;
		}
		return {
			all: all,
			byName: byName,
			byType: byType
		}
	}]) //q is a service to work with promises
	//factory return an object
})()