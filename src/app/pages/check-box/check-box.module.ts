import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import {SubNavModule} from '../../layout/sub-nav/sub-nav.module';
import {ContentWrapModule} from '../../components/content-wrap/content-wrap.module';
import { ContentComponent } from './content/content.component';
import { FjCheckBoxModule } from '@libs/freyja-ui/src/lib/check-box/check-box.module';
@NgModule({
  declarations: [CheckBoxComponent, ContentComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjCheckBoxModule
  ],
  exports: [
    CheckBoxComponent, ContentComponent
  ]
})
export class CheckBoxModule { }
