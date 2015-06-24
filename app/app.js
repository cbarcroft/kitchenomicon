angular.module('kitchenomicon', ['ngRoute', 'parse-angular'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            template: 'Default'
        });

        $routeProvider.when('/recipes/:recipeId', {
            templateUrl: 'app/views/recipes.html',
            controller: 'RecipeController as ctrl'
        });

    }]);