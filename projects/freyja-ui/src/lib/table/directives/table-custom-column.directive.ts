import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { TableCellTemplateDirective } from '@libs/freyja-ui/src/lib/table/directives/table-cell-template.directive';
import { TableHeaderTemplateDirective } from '@libs/freyja-ui/src/lib/table/directives/table-header-template.directive';

@Directive({ selector: 'fj-table-custom-column' })
export class TableCustomColumnDirective {

  /**
   * name of the column
   */
  @Input() name: string;
  /**
   * flex property to define the width of the column
   */
  @Input() flex: string;
  /**
   * column index/order in the table
   */
  @Input() index: number;
  /**
   * property name for filtering
   */
  @Input() prop: string;
  /**
   * wether the column is sortable or not
   */
  @Input() sortable: boolean;
  /**
   * wether the column has filtering
   */
  @Input() filtering: boolean;

  @Input()
  @ContentChild(TableCellTemplateDirective, { read: TemplateRef })
  cellTemplateRef: TemplateRef<any>;

  @Input()
  @ContentChild(TableHeaderTemplateDirective, { read: TemplateRef })
  headerTemplateRef: TemplateRef<any>;
}
