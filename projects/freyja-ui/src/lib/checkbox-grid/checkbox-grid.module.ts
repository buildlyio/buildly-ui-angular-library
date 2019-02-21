import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGridComponent } from '../checkbox-grid/checkbox-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CheckboxGridComponent
  ],
  exports: [CheckboxGridComponent]
})
export class FjCheckboxGridModule { }
