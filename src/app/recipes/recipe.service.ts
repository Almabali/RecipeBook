import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      "testRecipe",
      "Yummy",
      "http://cdn-image.myrecipes.com/sites/default/files/styles/" +
        "4_3_horizontal_-_900x675/public/wild-mushroom-farfalle-ck.jpg?itok=urP4jrLS",
      [
        new Ingredient("Meat", 1),
        new Ingredient("Bread", 2),
        new Ingredient("Tomato", 5)
      ]
    ),
    new Recipe(
      "Recipe 2",
      "Tasty",
      "http://cdn-image.myrecipes.com/sites/default/files/styles/" +
        "4_3_horizontal_-_900x675/public/wild-mushroom-farfalle-ck.jpg?itok=urP4jrLS",
      [new Ingredient("Strawberry", 20), new Ingredient("Flakes", 1000)]
    )
  ];

  getRecipes() {
    // Slice to get copy and not references!
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
