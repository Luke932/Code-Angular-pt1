import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  hasview = false;
  @Input() set appUnless(condition: boolean){
    if(!condition && !this.hasview){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasview = true;
    }else if (condition && this.hasview){
      this.viewContainer.clear();
      this.hasview = false;
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
