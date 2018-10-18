import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ContentComponent } from './content/content.component';
import {SubNavModule} from '../../layout/sub-nav/sub-nav.module';

@NgModule({
  imports: [
    CommonModule,
    SubNavModule
  ],
  declarations: [ButtonComponent, ContentComponent],
  exports: [ButtonComponent]
})
export class ButtonModule { }
