import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') myBackgroundColor: string | undefined;
  constructor() {}

  ngOnInit(): void {
    //this.renderer.setStyle(
    // this.elRef.nativeElement,
    //'background-color',
    //'yellow'
    //);
  }
  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myBackgroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myBackgroundColor = 'transparent';
  }
}
