import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover')
  moH () {
    const $el = this.el.nativeElement;
    this.renderer.addClass($el,'border-primary');
    console.log("mo",$el);
  }
  @HostListener('mouseleave')
  mlH  () {
    const $el = this.el.nativeElement;
    this.renderer.removeClass($el,'border-primary');
    console.log("ml",$el);
  }

  constructor(
      private el : ElementRef,
      private renderer: Renderer2
  ) { }

   
}
