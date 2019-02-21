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
import {CheckboxGridModule} from '../checkbox-grid/checkbox-grid.module';
import { FjSpinnerModule } from '../spinner/spinner.module';
import { IconModule } from '../icon/icon.module';
import { FjButtonModule } from '../button/button.module';
import { FjContentSwitcherModule } from '../content-switcher/content-switcher.module';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule,
    IconModule,
    FjSpinnerModule,
    FjContentSwitcherModule,
    FjButtonModule,
    CheckboxGridModule
  ],
  declarations: [
    TableComponent,
    TableRowComponent,
    TableHeadComponent,
    ActionsComponent,
    FilterByValuesPipe,
    SortByColumnPipe,
  ],
  exports: [TableComponent]
})
export class TableModule { }
