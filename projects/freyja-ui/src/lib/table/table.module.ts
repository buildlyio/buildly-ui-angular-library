import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { FormsModule } from '@angular/forms';
import { ActionsComponent } from './templates/actions/actions.component';
import { FilterByValuesPipe } from './pipes/filter-by-values.pipe';
import { SortByColumnPipe } from './pipes/sort-by-column.pipe';
import { FjCheckboxGridModule} from '../checkbox-grid/checkbox-grid.module';
import { FjSpinnerModule } from '../spinner/spinner.module';
import { IconModule } from '../icon/icon.module';
import { FjButtonModule } from '../button/button.module';
import { FjContentSwitcherModule } from '../content-switcher/content-switcher.module';
import { FjNativeDropdownModule } from '../native-dropdown/native-dropdown.module';
import { MatSelectModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableCustomColumnDirective } from './directives/table-custom-column.directive';
import { TableCellTemplateDirective } from './directives/table-cell-template.directive';
import { TableHeaderTemplateDirective } from '@libs/freyja-ui/src/lib/table/directives/table-header-template.directive';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    TableRoutingModule,
    FormsModule,
    IconModule,
    FjSpinnerModule,
    FjContentSwitcherModule,
    FjButtonModule,
    FjNativeDropdownModule,
    FjCheckboxGridModule,
    MatSelectModule
  ],
  declarations: [
    TableComponent,
    TableRowComponent,
    TableHeadComponent,
    ActionsComponent,
    FilterByValuesPipe,
    SortByColumnPipe,
    TableCustomColumnDirective,
    TableCellTemplateDirective,
    TableHeaderTemplateDirective
  ],
  exports: [
    TableComponent,
    TableCustomColumnDirective,
    TableCellTemplateDirective,
    TableHeaderTemplateDirective
  ]
})
export class FjTableModule { }
