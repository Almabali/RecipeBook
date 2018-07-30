import { Component } from "@angular/core";
import { RecipeStoreService } from "../recipe-store.service";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  constructor(
    private recipeStoreService: RecipeStoreService,
    private recipeService: RecipeService
  ) {}

  onSaveData() {
    this.recipeStoreService
      .storeRecipes(this.recipeService.getRecipes())
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  onFetchData() {
    this.recipeStoreService.fetchRecipes().subscribe((response: Recipe[]) => {
      console.log(response);
      this.recipeService.setRecipes(response);
    });
  }
}
