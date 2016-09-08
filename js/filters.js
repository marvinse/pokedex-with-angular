(function(){
	angular.module('pokedex.filters',[])
	.filter('normalize',function(){
		return function(input){
			input = input
				.replace('♀','f')
				.replace('♂','m')
				.replace(/\W+/g,'');
			return input.toLowerCase();
		}
	})
	.filter('imageify',['$filter',function($filter){
		return function(input, ext){//concatening filters
			var ext = ext || 'jpg';
			var url = 'img/pokemons/'+ $filter('normalize')(input) +'.'+ext;
			return url;
		}
	}]);
})()