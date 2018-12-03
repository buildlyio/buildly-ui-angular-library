import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubNavModule} from '../../layout/sub-nav/sub-nav.module';
import {ContentWrapModule} from '../../components/content-wrap/content-wrap.module';
import { RadioButtonComponent } from './radio-button.component';
import { ContentComponent } from './content/content.component';
import { FjRadioButtonModule } from 'freyja-ui';

@NgModule({
  declarations: [RadioButtonComponent, ContentComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjRadioButtonModule
  ],
  exports: [
    RadioButtonComponent,
    ContentComponent
  ]
})
export class RadioButtonModule { }
