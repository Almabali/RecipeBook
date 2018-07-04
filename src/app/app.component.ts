import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  selectedPage = "Recipes";

  onPageChange(selectedPage: string): void {
    this.selectedPage = selectedPage;
  }
}
