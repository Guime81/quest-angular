import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstLiSizeColor]',
})
export class FirstLiSizeColorDirective {
  @HostBinding('class.sizeandcolor') isClassAdded: boolean = false;
  constructor() {}

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.isClassAdded = true;
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.isClassAdded = false;
  }
}
