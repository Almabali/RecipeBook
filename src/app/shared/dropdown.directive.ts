import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdownDirective]"
})
export class DropdownDirectiveDirective {
  @HostBinding("class.open") isOpen = false;

  @HostListener("click")
  toggleOpen(eventData: Event): void {
    this.isOpen = !this.isOpen;
  }

  constructor() {}
}