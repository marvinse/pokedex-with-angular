(function(){
	angular.module('pokedex.directives',[])
	.directive('pokemonData',function(){
		return {
			restrict: 'E', //element
			templateUrl: 'partials/pokemon-data.html'
		}
	})
	.directive('pokemonName',function(){
		return {
			restrict: 'E', //A for attribute
			templateUrl: function(elem, attr){
				console.log(attr);
				return 'partials/pokemon-name'+(attr.display?attr.display:'')+'.html'
			}
		}
	})
	.directive('pokemonButtons',function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-buttons.html'
		}
	})
	.directive('pokemonType',function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-type.html'
		}
	});
})()