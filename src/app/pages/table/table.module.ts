import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';
import { SubNavModule } from '@freyjaDemo/app/layout/sub-nav/sub-nav.module';
import { FjTableModule } from '@libs/freyja-ui/src/lib/table/table.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FjTableModule,
    ContentWrapModule,
    SubNavModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ]
})
export class TableModule { }
