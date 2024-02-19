import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  color: string = 'yellow';
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  highlight(color:string){
    this.element.nativeElement.style.backgroundColor=color;
  }

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor='yellow';
  }

}
