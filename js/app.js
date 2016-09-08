(function(){
	var app = angular.module('pokedex',[
		'ngRoute',//dependencies
		'pokedex.controllers',
		'pokedex.directives',
		'pokedex.filters',
		'pokedex.services'
	]);
	
	//dependency injection
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'views/pokedex.html',
				controller: 'PokedexController'
			})
			.when('/pokemon/:name',{
				templateUrl: 'views/pokemon.html',
				controller: 'PokemonController'
			})
			.when('/:type',{
				templateUrl: 'views/pokedex.html',
				controller: 'PokedexController'
			})
			.otherwise({
				redirectTo: '/'
			})
	}]);

})();