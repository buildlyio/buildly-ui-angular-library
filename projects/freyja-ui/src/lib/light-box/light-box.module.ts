import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxComponent } from "@libs/freyja-ui/src/lib/light-box/light-box.component";

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
