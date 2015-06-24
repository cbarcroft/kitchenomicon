angular.module('kitchenomicon')
    .controller('RecipeListController', [ function() {
        var self = this;
        self.recipes = [];

        var clearErrors = function(){
            self.errors = '';
        }

        self.getRecipes = function(){
            clearErrors();

            var query = new Parse.Query("Recipe");
            query.find().then(function(recipeList){
                self.recipes = recipeList;

                var max =self.recipes.length;
                for(i = 0; i < max; i++){
                    self.recipes[i].data = JSON.parse(self.recipes[i].get('data'));
                }
            });
        }

        self.getRecipes();
    }]);
