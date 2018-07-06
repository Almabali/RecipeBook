import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "testRecipe",
      "Yummy",
      "http://cdn-image.myrecipes.com/sites/default/files/styles/" +
        "4_3_horizontal_-_900x675/public/wild-mushroom-farfalle-ck.jpg?itok=urP4jrLS"
    ),
    new Recipe(
      "Recipe 2",
      "Tasty",
      "http://cdn-image.myrecipes.com/sites/default/files/styles/" +
        "4_3_horizontal_-_900x675/public/wild-mushroom-farfalle-ck.jpg?itok=urP4jrLS"
    )
  ];

  getRecipes() {
    // Slice to get copy and not references!
    return this.recipes.slice();
  }
}
