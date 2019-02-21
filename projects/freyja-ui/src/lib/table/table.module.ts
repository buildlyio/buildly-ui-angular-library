import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatIconModule, MatSelectModule } from '@angular/material';
import { ActionsComponent } from '@libs/midgard-angular/src/lib/components/table/templates/actions/actions.component';
import { FilterByValuesPipe } from '@libs/midgard-angular/src/lib/components/table/pipes/filter-by-values.pipe';
import { SortByColumnPipe } from '@libs/midgard-angular/src/lib/components/table/pipes/sort-by-column.pipe';
import { MidgardTranslationModule } from '@libs/midgard-angular/src/lib/modules/translation/translation.module';
import { MgSpinnerModule } from '@libs/midgard-angular/src/lib/components/spinner/spinner.module';
import { FjButtonModule, FjContentSwitcherModule, IconModule} from 'freyja-ui';
import {CheckboxGridModule} from '../checkbox-grid/checkbox-grid.module';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    MidgardTranslationModule,
    FormsModule,
    MatIconModule,
    IconModule,
    MgSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
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
