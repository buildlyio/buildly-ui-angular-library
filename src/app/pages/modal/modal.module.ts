import { TextHelper } from './../../shared/helpers/text.helper';
import { FjButtonModule } from './../../../../projects/freyja-ui/src/lib/button/button.module';
import { ModalComponent } from './modal.component';
import { HighlightModule } from 'ngx-highlightjs';
import { FjModalModule } from './../../../../projects/freyja-ui/src/lib/modal/modal.module';
import { ContentWrapModule } from './../../components/content-wrap/content-wrap.module';
import { SubNavModule } from './../../layout/sub-nav/sub-nav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ModalComponent ],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjModalModule,
    FjButtonModule,
    HighlightModule.forRoot({ theme: 'arduino-light' })
  ],
  providers: [TextHelper],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
