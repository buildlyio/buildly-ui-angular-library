import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { SubNavModule } from '../../layout/sub-nav/sub-nav.module';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';
import { ContentComponent } from './content/content.component';
import { FjCheckboxModule } from 'freyja-ui';
// import { FjCheckboxModule } from '@libs/freyja-ui/src/lib/checkbox/checkbox.module';

@NgModule({
  declarations: [CheckBoxComponent, ContentComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjCheckboxModule
  ],
  exports: [
    CheckBoxComponent, ContentComponent
  ]
})
export class CheckBoxModule { }
