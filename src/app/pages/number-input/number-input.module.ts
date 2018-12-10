import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNumberInputComponent } from './number-input.component';
import { SubNavModule } from '../../layout/sub-nav/sub-nav.module';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';
import { ContentComponent } from './content/content.component';
import { FjNumberInputModule } from '../../../environments/environment';
import { TextHelper } from '../../shared/helpers/text.helper';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [DemoNumberInputComponent, ContentComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjNumberInputModule,
    HighlightModule.forRoot({ theme: 'arduino-light' })
  ],
  providers: [TextHelper],
  exports: [
    DemoNumberInputComponent, ContentComponent
  ]
})
export class NumberInputModule { }
