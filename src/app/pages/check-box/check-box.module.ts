import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { SubNavModule } from '../../layout/sub-nav/sub-nav.module';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';
import { ContentComponent } from './content/content.component';
import { FjCheckboxModule } from '../../../environments/environment';
import {TextHelper} from '../../shared/helpers/text.helper';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
  declarations: [CheckBoxComponent, ContentComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjCheckboxModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ],
  providers: [TextHelper],
  exports: [
    CheckBoxComponent, ContentComponent
  ]
})
export class CheckBoxModule { }
