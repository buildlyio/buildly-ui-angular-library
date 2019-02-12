import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubNavModule} from '../../layout/sub-nav/sub-nav.module';
import {ContentWrapModule} from '../../components/content-wrap/content-wrap.module';
import { RadioButtonComponent } from './radio-button.component';
import { ContentComponent } from './content/content.component';
import {TextHelper} from '../../shared/helpers/text.helper';
import {HighlightModule} from 'ngx-highlightjs';
import { FjRadioButtonModule } from '@libs/freyja-ui/src/lib/radio-button/radio-button.module';

@NgModule({
  declarations: [RadioButtonComponent, ContentComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjRadioButtonModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ],
  providers: [TextHelper],
  exports: [
    RadioButtonComponent,
    ContentComponent
  ]
})
export class RadioButtonModule { }
