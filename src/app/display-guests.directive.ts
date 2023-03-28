import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayGuests]',
})
export class DisplayGuestsDirective {
  @Input() set appDisplayGuests(condition: boolean) {
    condition = true;
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(
    private tplRef: TemplateRef<any>,
    private vwRef: ViewContainerRef
  ) {}
}
