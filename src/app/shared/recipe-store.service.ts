import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class RecipeStoreService {
  private httpURL = "https://udemy-angular-51448.firebaseio.com/recipes.json";
  private header = new Headers({ "Content-Type": "application/json" });

  constructor(private http: Http) {}

  storeRecipes(recipes: Recipe[]): Observable<any> {
    return this.http.put(this.httpURL, recipes, { headers: this.header });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get(this.httpURL).map((response: Response) => {
      return response.json();
    });
  }
}
