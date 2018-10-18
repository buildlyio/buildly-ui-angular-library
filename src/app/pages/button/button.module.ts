import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ContentComponent } from './content/content.component';
import {SubNavModule} from '../../layout/sub-nav/sub-nav.module';
import {ContentWrapModule} from '../../components/content-wrap/content-wrap.module';

@NgModule({
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule
  ],
  declarations: [ButtonComponent, ContentComponent],
  exports: [ButtonComponent]
})
export class ButtonModule { }
