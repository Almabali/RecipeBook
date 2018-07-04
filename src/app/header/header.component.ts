import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();

  onChangeSelectedPage(selectedPage: string): void {
    this.selectedPage.emit(selectedPage);
  }
}
