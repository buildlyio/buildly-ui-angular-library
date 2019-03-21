import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';

@NgModule({
  declarations: [RadioButtonComponent, RadioButtonGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RadioButtonComponent, RadioButtonGroupComponent]
})
export class FjRadioButtonModule { }
