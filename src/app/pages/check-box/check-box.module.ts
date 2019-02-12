import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { SubNavModule } from '../../layout/sub-nav/sub-nav.module';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';
import { TextHelper } from '../../shared/helpers/text.helper';
import { HighlightModule } from 'ngx-highlightjs';
import { FjCheckboxModule } from '@libs/freyja-ui/src/lib/checkbox/checkbox.module';

@NgModule({
  declarations: [CheckBoxComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjCheckboxModule,
    HighlightModule.forRoot({ theme: 'arduino-light' })
  ],
  providers: [TextHelper],
  exports: [
    CheckBoxComponent
  ]
})
export class CheckBoxModule { }
