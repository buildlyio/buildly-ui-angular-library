import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[fj-table-cell-template]' })
export class TableCellTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}
