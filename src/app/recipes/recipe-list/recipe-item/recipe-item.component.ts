import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelect: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  onRecipeClick() {
    this.recipeSelect.emit(this.recipe);
  }
}
