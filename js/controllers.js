(function(){
	angular.module('pokedex.controllers',[])
	.controller('PokedexController', ['$scope', '$routeParams', 'pokemonServices', function ($scope, $routeParams, pokemonServices) {
		var type = $routeParams.type;
		if(type){
			pokemonServices.byType(type).then(function(data){
				$scope.pokemons = data;
			})
		}else{
			pokemonServices.all().then(function(data){
				$scope.pokemons = data;
			});	
		}
    }])
	.controller('PokemonController',['$scope','$routeParams','pokemonServices',function($scope,$routeParams,pokemonServices){
		var name = $routeParams.name; //same param defined on app.js
		$scope.pokemon = {};
		pokemonServices.byName(name).then(function(data){
			$scope.pokemon = data;
		})
	}])
	.controller('TabsController',function(){
		this.tab = 1;
		this.setTab = function(tab){
			this.tab = tab;
		}
	});
})()