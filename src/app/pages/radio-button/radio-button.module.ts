import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { FjButtonModule } from '@libs/freyja-ui/src/lib/button/button.module';

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    CommonModule,
    FjButtonModule
  ],
  exports: [
    RadioButtonComponent
  ]
})
export class RadioButtonModule { }
