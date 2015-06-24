angular.module('kitchenomicon')
    .controller('RecipeController', ['$routeParams', function($routeParams) {
        var self = this;

        var clearErrors = function(){
            self.errors = '';
        }

        self.getRecipe = function(objectId){
            clearErrors();

            var query = new Parse.Query("Recipe");
            query.get(objectId).then(function(recipeObject){
                self.recipe = recipeObject.get('data');
            });
        }

        self.getRecipe($routeParams.recipeId);
    }]);
