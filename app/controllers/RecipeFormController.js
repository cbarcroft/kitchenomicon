angular.module('kitchenomicon')
    .controller('RecipeFormController', [ function() {
        var self = this;
        self.title = '';
        self.ingredients = [];
        self.directions = { steps: [] }
        self.json = {};

        var clearErrors = function(){
            self.errors = '';
        }

        var reindex = function(objArray){
            max = objArray.length
            for (i = 0; i < max; i++){
                objArray[i].id = i;
            }
        }

        self.addNewIngredient = function() {
            self.ingredients.push({'id': self.ingredients.length});
        };

        self.removeIngredient = function(ingredient) {
            max = self.ingredients.length
            for (i = 0; i < max; i++){
                if (ingredient.id == self.ingredients[i].id){
                    self.ingredients.splice(i, 1);
                    break;
                }
            }
            reindex(self.ingredients);
        };

        self.addNewStep = function() {
            self.directions.steps.push({id: self.directions.steps.length});
        };

        self.removeStep = function(step) {
            max = self.directions.steps.length
            for (i = 0; i < max; i++){
                if (step.id == self.directions.steps[i].id){
                    self.directions.steps.splice(i, 1);
                    break;
                }
            }
            reindex(self.directions.steps);
        }

        self.updateRecipe = function(){
            clearErrors();

            var recipeJson = {
                head : { title: self.title },
                directions : { steps: self.directions.steps },
                ingredients: self.ingredients
            };

            var Recipe = Parse.Object.extend("Recipe");
            var recipe = new Recipe();

            recipe.set("data", angular.toJson(recipeJson));

            recipe.save(null, {
                success: function(recipe) {
                    // Execute any logic that should take place after the object is saved.
                    console.log('New object created with objectId: ' + recipe.id);
                },
                error: function(recipe, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    console.log('Failed to create new object, with error code: ' + recipe.message);
                }
            });
        }
    }]);
