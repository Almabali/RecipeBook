import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChange: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // ... spread operator take the ignredient and makes it a list.
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.getIngredients());
  }
}
