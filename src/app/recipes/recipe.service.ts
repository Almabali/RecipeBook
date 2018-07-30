import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipeListChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {
    this.recipes = [
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
  }

  private recipes: Recipe[];

  getRecipes(): Recipe[] {
    // Slice to get copy and not references!
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipeListChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipeListChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeListChanged.next(this.recipes.slice());
  }

  removeRecipe(id: number): void {
    this.recipes.splice(id, 1);
    this.recipeListChanged.next(this.recipes.slice());
  }
}
