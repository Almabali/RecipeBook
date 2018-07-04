import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}
}
