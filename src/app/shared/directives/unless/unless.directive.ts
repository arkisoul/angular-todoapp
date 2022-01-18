import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[todoappUnless]',
})
export class UnlessDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input() set todoappUnless(condition: boolean) {
    if(!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else if(condition) {
      this.viewContainer.clear();
    }
  }
}
