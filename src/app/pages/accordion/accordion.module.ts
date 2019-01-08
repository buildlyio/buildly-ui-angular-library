import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubNavModule } from '../../layout/sub-nav/sub-nav.module';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';
import { FjAccordionModule } from '../../../environments/environment';
import { TextHelper } from '../../shared/helpers/text.helper';
import { AccordionComponent } from './accordion.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjAccordionModule,
    HighlightModule.forRoot({ theme: 'arduino-light' })
  ],
  providers: [TextHelper],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
