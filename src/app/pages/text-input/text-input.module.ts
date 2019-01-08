import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoTextInputComponent } from './text-input.component';
import { SubNavModule } from '../../layout/sub-nav/sub-nav.module';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';
import { FjTextInputModule } from '../../../environments/environment';
import { TextHelper } from '../../shared/helpers/text.helper';
import { HighlightModule } from 'ngx-highlightjs';
@NgModule({
  declarations: [DemoTextInputComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjTextInputModule,
    HighlightModule.forRoot({ theme: 'arduino-light' })
  ],
  providers: [TextHelper],
  exports: [
    DemoTextInputComponent
  ]
})
export class TextInputModule { }
