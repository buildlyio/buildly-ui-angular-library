import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubNavModule} from '../../layout/sub-nav/sub-nav.module';
import {ContentWrapModule} from '../../components/content-wrap/content-wrap.module';
import { DemoSvgIconComponent } from './svg-icon.component';
import { FjSvgIconModule } from '../../../environments/environment';
import {TextHelper} from '../../shared/helpers/text.helper';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
  declarations: [DemoSvgIconComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjSvgIconModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ],
  providers: [TextHelper],
  exports: [
    DemoSvgIconComponent
  ]
})
export class SvgIconModule { }
