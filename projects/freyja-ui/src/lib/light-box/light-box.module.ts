import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxComponent } from './light-box.component';

@NgModule({
  declarations: [
    LightBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LightBoxComponent
  ]
})
export class FjLightBoxModule { }
