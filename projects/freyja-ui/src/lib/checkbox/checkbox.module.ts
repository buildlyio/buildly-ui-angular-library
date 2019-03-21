import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';

@NgModule({
  declarations: [CheckboxComponent, CheckboxGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckboxComponent,
    CheckboxGroupComponent
  ]
})
export class FjCheckboxModule { }
