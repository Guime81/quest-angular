import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowMovies]',
})
export class ShowMoviesDirective {
  @Input() set appShowMovies(showMovies: boolean) {
    showMovies = false;
    if (showMovies) {
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
