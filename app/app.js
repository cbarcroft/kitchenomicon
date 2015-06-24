angular.module('kitchenomicon', ['ngRoute', 'parse-angular'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            redirectTo: '/recipes'
        });

        $routeProvider.when('/recipes', {
            templateUrl: 'app/views/recipelist.html',
            controller: 'RecipeListController as ctrl'
        });

        $routeProvider.when('/recipes/new', {
            templateUrl: 'app/views/recipeform.html',
            controller: 'RecipeFormController as ctrl'
        });

        $routeProvider.when('/recipes/:recipeId', {
            templateUrl: 'app/views/recipes.html',
            controller: 'RecipeController as ctrl'
        });

    }]);