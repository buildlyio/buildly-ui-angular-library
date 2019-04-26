import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[fj-table-header-template]' })
export class TableHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}
